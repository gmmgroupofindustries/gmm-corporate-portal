const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const BREAKPOINTS = [
  { name: '280px (Ultra-narrow phone)', width: 280, height: 653 },
  { name: '320px (Compact phone)', width: 320, height: 568 },
  { name: '390px (Standard phone)', width: 390, height: 844 },
  { name: '600px (Large phone / Phablet)', width: 600, height: 960 },
  { name: '744px (Tablet portrait)', width: 744, height: 1133 },
  { name: '820px (Tablet)', width: 820, height: 1180 },
  { name: '1024px (Desktop)', width: 1024, height: 768 },
  { name: '1440px (Laptop / Desktop)', width: 1440, height: 900 },
  { name: '1920px (Full HD)', width: 1920, height: 1080 },
  { name: '2560px (Ultra Wide / 2K)', width: 2560, height: 1440 },
  { name: '844x390 (Landscape Phone)', width: 844, height: 390 },
];

async function runVerification() {
  console.log('Launching Headless Chrome for Multi-Breakpoint Browser Verification...\n');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  let allPassed = true;

  for (const bp of BREAKPOINTS) {
    await page.setViewport({ width: bp.width, height: bp.height });
    await new Promise((r) => setTimeout(r, 200));

    const metrics = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const hasHorizontalScroll = scrollW > innerW;
      const h1Text = document.querySelector('h1')?.innerText || '';
      const ribbonCount = document.querySelectorAll('[aria-hidden="true"]').length;
      return { scrollW, innerW, hasHorizontalScroll, h1Text, ribbonCount };
    });

    const status = !metrics.hasHorizontalScroll ? 'PASSED' : 'FAILED';
    if (metrics.hasHorizontalScroll) allPassed = false;

    console.log(
      `[${status}] ${bp.name} (${bp.width}x${bp.height}): scrollWidth=${metrics.scrollW}, innerWidth=${metrics.innerW}`
    );
  }

  // Verify Mobile Menu below 1024px
  await page.setViewport({ width: 390, height: 844 });
  const menuButton = await page.$('button[aria-controls="mobile-navigation-overlay"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise((r) => setTimeout(r, 200));
    const overlayVisible = await page.$('#mobile-navigation-overlay');
    console.log(`\n[Mobile Menu Test]: Overlay Opened = ${!!overlayVisible}`);

    // Test Escape key
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 200));
    const overlayAfterEsc = await page.$('#mobile-navigation-overlay');
    console.log(`[Mobile Menu Test]: Overlay Closed on Esc = ${!overlayAfterEsc}`);
  }

  // Verify Bilingual Toggle
  console.log('\n[Bilingual Switcher Test]:');
  const initialH1 = await page.evaluate(() => document.querySelector('h1')?.innerText);
  console.log('Initial (EN) H1:', initialH1.replace(/\n/g, ' '));

  // Click Visible Language Switch Button
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const langBtn = buttons.find((b) => b.innerText.includes('বাংলা') && b.offsetParent !== null);
    if (langBtn) langBtn.click();
  });
  await new Promise((r) => setTimeout(r, 300));
  const bengaliH1 = await page.evaluate(() => document.querySelector('h1')?.innerText);
  console.log('Switched (BN) H1:', bengaliH1?.replace(/\n/g, ' '));
  const concernsHeading = await page.evaluate(() => document.getElementById('concerns-heading')?.innerText);
  console.log('Switched (BN) Concerns Heading:', concernsHeading);

  console.log('\nConsole Errors:', consoleErrors.length === 0 ? 'None (Clean)' : consoleErrors);
  console.log(`\nVerification Result: ${allPassed && consoleErrors.length === 0 ? 'ALL CRITERIA PASSED' : 'FAILED'}`);

  await browser.close();
  process.exit(allPassed && consoleErrors.length === 0 ? 0 : 1);
}

runVerification().catch((err) => {
  console.error('Verification failed with error:', err);
  process.exit(1);
});
