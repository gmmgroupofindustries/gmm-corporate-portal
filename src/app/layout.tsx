import type { Metadata, Viewport } from 'next';
import { Jost, Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { siteContent } from '../content/site';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500'],
  subsets: ['bengali'],
  display: 'swap',
  variable: '--font-hind-siliguri',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#EDEFEE',
};

export const metadata: Metadata = {
  title: 'GMM Group of Industries — Parent Holding Company',
  description:
    'Official corporate portal of GMM Group of Industries, parent enterprise governing six specialized operating concerns across core production, infrastructure, and supply sectors in Bangladesh.',
  metadataBase: new URL('https://gmmgroupofindustries.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'GMM Group of Industries',
    description:
      'Parent enterprise governing six operating concerns across core production, infrastructure, and supply sectors.',
    url: 'https://gmmgroupofindustries.com',
    siteName: 'GMM Group of Industries',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GMM Group of Industries',
    url: 'https://gmmgroupofindustries.com',
    logo: 'https://gmmgroupofindustries.com/favicon.svg',
    foundingDate: '1988',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GMM Corporate Tower, 42 Kemal Ataturk Avenue, Gulshan-2',
      addressLocality: 'Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-2-988-5601',
      contactType: 'corporate inquiries',
      email: 'info@gmmgroup.com.bd',
    },
    subOrganization: siteContent.en.concerns.items.map((concern) => ({
      '@type': 'Organization',
      name: concern.name,
      url: concern.url,
      description: concern.description,
    })),
  };

  return (
    <html lang="en" className={`${jost.variable} ${hindSiliguri.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-concrete text-steel antialiased">
        {children}
      </body>
    </html>
  );
}
