import { useState } from 'react';
import { Zap } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 text-slate-200 p-6 text-center ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center mb-2">
          <Zap className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-medium text-slate-300 max-w-[18ch]">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
