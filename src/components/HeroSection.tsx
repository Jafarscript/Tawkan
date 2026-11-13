import { ArrowRight, Award, Clock, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import { BUSINESS_INFO, HERO_PANELS } from '../data/tawkanData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onRequestSurvey: () => void;
}

const TRUST_HIGHLIGHTS = [
  { icon: ShieldCheck, label: 'Safe & Reliable' },
  { icon: Users, label: 'Experienced Team' },
  { icon: Award, label: 'Quality Workmanship' },
  { icon: Clock, label: 'Fast & Efficient' },
];

const KPI_STRIP = [
  { value: '500+', label: 'Happy Clients Across Lagos' },
  { value: '1,000+', label: 'Projects Completed Safely' },
  { value: '7+ Years', label: 'Field Engineering Experience' },
  { value: 'All Lagos', label: 'Island, Mainland & Environs' },
];

export function HeroSection({ onRequestSurvey }: HeroSectionProps) {
  return (
    <section id="top" className="relative bg-navy-900 text-white overflow-hidden">
      {/* Subtle architectural depth without AI slop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(245,180,0,0.12),transparent_52%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition & Primary Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-wide text-solar-400 mb-3">
              Safe, Reliable & Certified Engineering in Lagos
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white [text-wrap:balance] max-w-2xl">
              Expert Electrical &amp; Solar Installation Services{' '}
              <span className="text-solar-400">in Lagos</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              TAWKAN Electrical Installation delivers code-compliant building wiring, hybrid solar
              inverter systems, and industrial power maintenance for homes, offices, and facilities.
            </p>

            {/* Primary CTA + Secondary Direct Channel */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestSurvey}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-navy-950 bg-solar-500 hover:bg-solar-400 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                <span>Request Free Site Survey</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello TAWKAN Electrical Installation, I would like to inquire about electrical or solar services in Lagos.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-navy-800/80 hover:bg-navy-800 border border-slate-700 hover:border-solar-500/60 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400"
              >
                <MessageCircle className="w-4 h-4 text-solar-400 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">WhatsApp {BUSINESS_INFO.whatsappDisplay}</span>
              </a>
            </div>

            {/* 4 Unboxed Trust Attributes */}
            <div className="mt-10 pt-7 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-solar-400 shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 4-Panel Architectural Showcase */}
          <div className="lg:col-span-6 flex">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]">
              {HERO_PANELS.map((panel, index) => (
                <a
                  key={panel.id}
                  href="#projects"
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-400 ${
                    index === 0 || index === 2 ? 'sm:translate-y-0' : 'sm:translate-y-2'
                  }`}
                >
                  <SafeImage
                    src={panel.image}
                    alt={panel.alt}
                    fallbackTitle={panel.label}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-xs font-bold text-white leading-tight">{panel.label}</p>
                    <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2 leading-snug">
                      {panel.caption}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Quantitative KPI Strip Below Hero */}
      <div className="bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {KPI_STRIP.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col ${idx > 0 ? 'lg:pl-8' : ''} ${
                  idx < KPI_STRIP.length - 1 ? 'lg:pr-8' : ''
                }`}
              >
                <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900 tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
