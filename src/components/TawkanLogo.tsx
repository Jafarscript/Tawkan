interface TawkanLogoProps {
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export function TawkanLogo({ variant = 'light', showSubtitle = false }: TawkanLogoProps) {
  const isLightBg = variant === 'light';
  const strokeColor = isLightBg ? '#081529' : '#FFFFFF';
  const accentColor = '#F5B400';

  return (
    <div className="inline-flex items-center gap-2.5 shrink-0">
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Circuit wings */}
        <path
          d="M4 20H11M2 24H10M4 28H11"
          stroke={strokeColor}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M37 20H44M38 24H46M37 28H44"
          stroke={strokeColor}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Outer rings */}
        <circle cx="24" cy="24" r="14" stroke={strokeColor} strokeWidth="2.6" />
        <circle cx="24" cy="24" r="10.2" stroke={accentColor} strokeWidth="1.6" />
        {/* Lightning bolt */}
        <path
          d="M25.5 14L18.5 25H23.5L22 34L29.5 22.5H24.2L25.5 14Z"
          fill={accentColor}
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight whitespace-nowrap ${
            isLightBg ? 'text-slate-950' : 'text-white'
          }`}
        >
          TAWKAN
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 whitespace-nowrap ${
              isLightBg ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            Electrical Installation
          </span>
        )}
      </div>
    </div>
  );
}
