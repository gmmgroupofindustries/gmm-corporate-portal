import React from 'react';

/**
 * Straight continuous ribbon spanning a section's full height.
 * Composed of two lengthwise planes: amber (#FD953A) and orange (#FA5D19).
 * Overlapped by 1px on top and bottom to eliminate any pixel seams between sections.
 */
export const StraightRibbon: React.FC<{
  className?: string;
  isInitialLoad?: boolean;
}> = ({ className = '', isInitialLoad = false }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 top-[-1px] bottom-[-1px] w-[var(--rb)] pointer-events-none select-none z-10 ${
        isInitialLoad ? 'anim-ribbon-load' : ''
      } ${className}`}
    >
      {/* Plane 1: Amber */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2"
        style={{ backgroundColor: 'var(--color-amber)' }}
      />
      {/* Plane 2: Orange */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2"
        style={{ backgroundColor: 'var(--color-orange)' }}
      />
    </div>
  );
};

/**
 * Diagonal Ribbon Stroke for a single company row (>= 720px).
 * Measures approx 50° angle.
 * Width: calc(var(--concern-row-min-h) / 1.19 + var(--rb))
 * Even rows (0, 2, 4): Outward stroke (front face: Amber + Orange)
 * Odd rows (1, 3, 5): Inward stroke (back face: Orange + Rust, mirrored via scaleX(-1))
 */
export const ConcernRowRibbon: React.FC<{
  rowIndex: number;
}> = ({ rowIndex }) => {
  const isBackFace = rowIndex % 2 === 1;

  const plane1Color = isBackFace ? 'var(--color-orange)' : 'var(--color-amber)';
  const plane2Color = isBackFace ? 'var(--color-rust)' : 'var(--color-orange)';

  return (
    <>
      {/* Desktop / Tablet diagonal stroke (720px+) */}
      <div
        aria-hidden="true"
        className="hidden tablet:block absolute left-0 top-[-1px] bottom-[-1px] pointer-events-none select-none z-10 transition-[filter] duration-200 ribbon-stroke"
        style={{
          width: 'calc(var(--concern-row-min-h) / 1.19 + var(--rb))',
          transform: isBackFace ? 'scaleX(-1)' : 'none',
          transformOrigin: 'calc((var(--concern-row-min-h) / 1.19 + var(--rb)) / 2) center',
        }}
      >
        {/* Plane 1 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: plane1Color,
            clipPath:
              'polygon(0 0, calc(var(--rb) * 0.5) 0, calc(100% - var(--rb) * 0.5) 100%, calc(100% - var(--rb)) 100%)',
          }}
        />

        {/* Plane 2 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: plane2Color,
            clipPath:
              'polygon(calc(var(--rb) * 0.5) 0, var(--rb) 0, 100% 100%, calc(100% - var(--rb) * 0.5) 100%)',
          }}
        />

        {/* Turn fold plane at start vertex */}
        <div
          className="absolute top-0 left-0"
          style={{
            width: 'var(--rb)',
            height: 'calc(var(--rb) * 0.85)',
            backgroundColor: 'var(--color-rust)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />

        {/* Turn fold plane at end vertex */}
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: 'var(--rb)',
            height: 'calc(var(--rb) * 0.85)',
            backgroundColor: 'var(--color-rust)',
            clipPath: 'polygon(100% 100%, 0 100%, 100% 0)',
          }}
        />
      </div>

      {/* Phone straight strip + rust fold triangle (< 720px) */}
      <div
        aria-hidden="true"
        className="tablet:hidden absolute left-0 top-[-1px] bottom-[-1px] w-[var(--rb)] pointer-events-none select-none z-10"
      >
        {/* Straight Strip */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2"
          style={{ backgroundColor: 'var(--color-amber)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{ backgroundColor: 'var(--color-orange)' }}
        />

        {/* Small rust fold triangle at top of each company row on phones */}
        <div
          className="absolute top-0 left-0 w-[var(--rb)] h-[var(--rb)]"
          style={{
            backgroundColor: 'var(--color-rust)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />
      </div>
    </>
  );
};

