import panelImg from '../assets/images/electrician_breaker_panel_1794574669889.jpg';
import solarImg from '../assets/images/solar_rooftop_lagos_1794574669835.jpg';
import inverterImg from '../assets/images/hybrid_inverter_battery_1794574670841.jpg';
import lightingImg from '../assets/images/architectural_led_lighting_1794574671007.jpg';

export const BUSINESS_INFO = {
  name: 'TAWKAN',
  fullName: 'TAWKAN Electrical Installation',
  hotlineDisplay: '0806 555 5451',
  hotlineHref: 'tel:+2348065555451',
  whatsappDisplay: '0912 799 530',
  whatsappNumber: '234912799530',
  email: 'hello@tawkanelectrical.ng',
  hours: 'Mon – Sat · 7:30 AM – 6:30 PM',
  coverageSummary: 'Serving Lekki, Victoria Island, Ikoyi, Ikeja, Surulere & All Lagos',
};

export interface ShowcasePanel {
  id: string;
  label: string;
  caption: string;
  image: string;
  alt: string;
}

export const HERO_PANELS: ShowcasePanel[] = [
  {
    id: 'panel',
    label: 'Distribution Boards',
    caption: 'Three-phase wiring & breaker balancing',
    image: panelImg,
    alt: 'TAWKAN electrical engineer wiring a three-phase circuit breaker distribution board',
  },
  {
    id: 'solar',
    label: 'Solar Arrays',
    caption: 'Monocrystalline rooftop installations',
    image: solarImg,
    alt: 'Monocrystalline solar photovoltaic panels installed on a pitched roof in Lagos at sunset',
  },
  {
    id: 'inverter',
    label: 'Inverter & Storage',
    caption: 'Hybrid inverters & LiFePO4 battery banks',
    image: inverterImg,
    alt: 'Wall-mounted hybrid solar inverter connected with neat conduit piping to three lithium battery cabinets',
  },
  {
    id: 'lighting',
    label: 'Interior Lighting',
    caption: 'Architectural LED & cove installations',
    image: lightingImg,
    alt: 'Contemporary living room illuminated by warm recessed ceiling cove LED lighting and pendant fixtures',
  },
];

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    id: 'wiring',
    title: 'Complete Building Wiring & Rewiring',
    summary:
      'Full first-fix conduit piping, armoured cable reticulation, earthing pits, and labeled three-phase distribution boards built to Nigerian and IEC safety codes.',
    deliverables: [
      'New-build residential & commercial conduit wiring',
      'Distribution board upgrades & phase balancing',
      'Surge protection & copper earth rod installations',
    ],
    featured: true,
    image: panelImg,
    imageAlt: 'Electrical engineer installing labeled circuit breakers inside a distribution panel',
  },
  {
    number: '02.',
    id: 'solar',
    title: 'Hybrid Solar & Inverter Systems',
    summary:
      'Custom-engineered solar photovoltaic arrays, hybrid MPPT inverters, and lithium iron phosphate battery banks sized for 24-hour Lagos energy independence.',
    deliverables: [
      'Roof load audit & shade-free mounting structures',
      '5 kVA to 60 kVA single & three-phase hybrid inverters',
      'Lithium (LiFePO4) & tubular battery bank commissioning',
    ],
    featured: true,
    image: inverterImg,
    imageAlt: 'Hybrid solar inverter with precision conduit wiring and lithium battery storage',
  },
  {
    number: '03.',
    id: 'industrial',
    title: 'Industrial Power & ATS Panels',
    summary:
      'Heavy-duty automatic transfer switches, motor starters, and preventive thermal inspections for workshops, cold rooms, and light manufacturing floors.',
    deliverables: [
      'Automatic changeover & synchronization panels',
      '3-phase machinery power drops & isolators',
    ],
  },
  {
    number: '04.',
    id: 'lighting',
    title: 'Architectural & Smart Lighting',
    summary:
      'Warm recessed ceiling coves, exterior perimeter floodlights, photocell dusk-to-dawn controls, and smart dimmer circuits for modern residences and offices.',
    deliverables: [
      'POP cove LED strips & recessed downlights',
      'Automated security & compound lighting',
    ],
  },
  {
    number: '05.',
    id: 'diagnostics',
    title: 'Fault Diagnostics & Safety Audits',
    summary:
      'Rapid tracing of earth-leakage tripping, voltage drops, and overheating neutrals using calibrated clamp meters, insulation testers, and thermal imaging.',
    deliverables: [
      'Pre-handover & pre-purchase property electrical audits',
      'Emergency breaker trip & partial outage resolution',
    ],
  },
  {
    number: '06.',
    id: 'generator',
    title: 'Standby Generator Integration',
    summary:
      'Clean synchronization between grid supply, solar inverters, and standby diesel generators so critical appliances never experience changeover surges.',
    deliverables: [
      'Contactor-interlocked changeover panels',
      'Dedicated essential vs. heavy-load circuit splitting',
    ],
  },
];

export type ProjectCategory =
  | 'All Projects'
  | 'Solar & Inverters'
  | 'Commercial Wiring'
  | 'Interior Lighting';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  location: string;
  systemSpec: string;
  duration: string;
  outcomeMetric: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'lekki-15kva-hybrid',
    title: '5-Bedroom Residence 15 kVA Solar & LiFePO4 Bank',
    category: 'Solar & Inverters',
    location: 'Lekki Phase 1, Lagos',
    systemSpec: '15 kVA Hybrid · 30 kWh Lithium · 18 × 550W Panels',
    duration: 'Completed in 4 Days',
    outcomeMetric: '68% monthly diesel reduction within 60 days',
    description:
      'Replaced a noisy 30 kVA diesel generator dependency with a parallel hybrid solar inverter system powering three inverter AC units, borehole pump, and whole-home lighting round the clock.',
    highlights: [
      'Clean anodized aluminum roof rail mounting with zero roof leaks',
      'Split essential/non-essential DB architecture for automatic load shedding',
      'Mobile app telemetry configured for homeowner real-time battery monitoring',
    ],
    image: solarImg,
    alt: 'Rooftop solar panel installation at sunset on a modern residence in Lekki Lagos',
  },
  {
    id: 'vi-office-panel',
    title: 'Four-Floor Commercial Office Three-Phase Rewiring',
    category: 'Commercial Wiring',
    location: 'Victoria Island, Lagos',
    systemSpec: '200A Three-Phase DB · Surge & Earth Grid',
    duration: 'Completed in 9 Days',
    outcomeMetric: 'Zero breaker trips across 42 workstations & server rack',
    description:
      'Overhauled aged, unbalanced floor distribution boards in an active commercial building, introducing dedicated clean-earth lines for IT servers and color-coded phase load balancing.',
    highlights: [
      'Full continuity and insulation resistance testing across 64 circuits',
      'Schneider MCCB protection with Type-2 surge arresters on every riser',
      'As-built circuit directory laminated inside every distribution enclosure',
    ],
    image: panelImg,
    alt: 'Commercial three-phase distribution panel wired with color-coded conductors and labeled breakers',
  },
  {
    id: 'ikoyi-inverter-room',
    title: 'Boutique Clinic 20 kVA Zero-Transfer Hybrid Backup',
    category: 'Solar & Inverters',
    location: 'Ikoyi, Lagos',
    systemSpec: '20 kVA 3-Phase Inverter · 45 kWh Storage',
    duration: 'Completed in 5 Days',
    outcomeMetric: 'Sub-10ms switchover protecting diagnostic imaging gear',
    description:
      'Engineered an uninterrupted utility room battery bank and conduit network for a private medical practice requiring silent, clean sine-wave power during grid fluctuations.',
    highlights: [
      'Fire-rated utility room PVC conduit layout with labeled DC/AC isolators',
      'Automatic generator start dry-contact trigger when storage drops below 20%',
      'Balanced phase voltage held within ±1.5% tolerance under peak clinic load',
    ],
    image: inverterImg,
    alt: 'Neat wall-mounted hybrid inverter and three floor-standing lithium battery units',
  },
  {
    id: 'banana-island-lighting',
    title: 'Duplex Architectural Cove & Smart Lighting Package',
    category: 'Interior Lighting',
    location: 'Ikoyi / Banana Island Axis, Lagos',
    systemSpec: '2700K Warm Recessed LED · 18 Dimmer Zones',
    duration: 'Completed in 6 Days',
    outcomeMetric: '44% lower lighting wattage vs. legacy halogen fixtures',
    description:
      'Designed and installed layered ambient ceiling cove lighting, brass drop pendants, and exterior stair step lights with centralized scene switches across living and dining spaces.',
    highlights: [
      'High-CRI 2700K driver-protected LED profiles concealed in gypsum coves',
      'Surge-protected lighting circuits isolated from heavy motor loads',
      'Dusk-to-dawn photocell automation for compound perimeter security lights',
    ],
    image: lightingImg,
    alt: 'Luxury duplex living room featuring recessed warm ceiling cove lighting and pendant lamps',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  outcome: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'babatunde',
    name: 'Engr. Babatunde Adeyemi',
    role: 'Facility Manager, Horizon Commercial Annex',
    location: 'Victoria Island, Lagos',
    projectType: 'Three-Phase Distribution Overhaul',
    quote:
      'Before TAWKAN stepped in, our third-floor AC risers tripped twice a week from severe phase imbalance. Their team traced every circuit, rebuilt the main distribution board with proper busbars, and handed over a labeled schematic.',
    outcome: '14 months of continuous operation with zero unplanned breaker trips.',
  },
  {
    id: 'chidinma',
    name: 'Chidinma Okafor',
    role: 'Homeowner',
    location: 'Lekki Phase 1, Lagos',
    projectType: '15 kVA Hybrid Solar & Battery System',
    quote:
      'They audited our actual appliance wattage first instead of pushing an undersized kit. The conduit work in our inverter room is spotless, and our diesel generator now barely runs except during prolonged heavy rain.',
    outcome: 'Monthly fuel spend dropped by over two-thirds in the first 60 days.',
  },
  {
    id: 'tunde',
    name: 'Tunde Bakare',
    role: 'Operations Lead, PrimePack Processing',
    location: 'Ikeja Industrial Estate, Lagos',
    projectType: 'ATS Panel & Workshop Lighting Retrofit',
    quote:
      'TAWKAN scheduled the changeover panel cutover over a single weekend so we lost zero production hours. Every terminal was torqued, labeled, and verified under load before sign-off.',
    outcome: 'Zero production downtime during installation and faster shift changeovers.',
  },
];

export interface LoadPreset {
  id: string;
  label: string;
  description: string;
  recommendedKva: string;
  batteryKwh: string;
  solarArray: string;
  typicalAppliances: string;
}

export const LOAD_PRESETS: LoadPreset[] = [
  {
    id: 'flat-2bed',
    label: '2–3 Bed Apartment',
    description: 'Essential home backup & work-from-home setup',
    recommendedKva: '5 kVA – 7.5 kVA',
    batteryKwh: '10 kWh LiFePO4',
    solarArray: '8 × 550W Panels',
    typicalAppliances: '1 Inverter AC, Fridge/Freezer, TVs, Wi-Fi, Lighting & Fans',
  },
  {
    id: 'duplex-4bed',
    label: '4–5 Bed Duplex',
    description: 'Whole-home comfort including multiple inverter ACs',
    recommendedKva: '10 kVA – 15 kVA',
    batteryKwh: '20–30 kWh LiFePO4',
    solarArray: '16 × 550W Panels',
    typicalAppliances: '3–4 Inverter ACs, Borehole Pump, Washing Machine, Full Home',
  },
  {
    id: 'commercial-office',
    label: 'Office / Clinic / Retail',
    description: 'Three-phase business continuity & clean server power',
    recommendedKva: '20 kVA – 40 kVA',
    batteryKwh: '40–60 kWh Storage',
    solarArray: '30+ × 550W Panels',
    typicalAppliances: 'Commercial ACs, Workstations, POS/Servers, Cold Storage',
  },
];
