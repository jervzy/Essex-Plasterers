export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  qualityStandard: string;
  finishQuality: string;
  idealFor: string[];
  materialsUsed: string[];
  turnaround: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'skimming',
    number: '01',
    title: 'INTERNAL SKIMMING & PLASTERING',
    subtitle: 'Mirror-smooth two-coat finish over plasterboard or backing coats',
    description: 'Our core trade. We apply a meticulous two-coat plaster skim over newly boarded ceilings and walls, or re-skim tired, damaged surfaces. Every wall and ceiling is trowel-polished to a glass-smooth finish, creating an immaculate canvas ready for painting or high-end decoration without any snagging or sanding.',
    qualityStandard: 'Premium Residential Finish',
    finishQuality: 'Glass-smooth finish ready for direct painting',
    idealFor: ['New Build Residences', 'Home Extensions & Loft Conversions', 'Full Property Refurbishments', 'High-Spec Kitchen & Bathroom Fits'],
    materialsUsed: ['British Gypsum Thistle Multi-Finish', 'Thistle Bond-It Bonding Agent', 'Alkali-Resistant Scrim Tape'],
    turnaround: '25–40m² per craftsman / day'
  },
  {
    id: 'rendering',
    number: '02',
    title: 'EXTERNAL RENDERING & MONOCOUCHE',
    subtitle: 'Weather-proof silicone, scratch render, and durable exterior coatings',
    description: 'Engineered for the demanding Essex climate. We specialize in through-colour monocouche renders (Weber, K-Rend, Parex) and breathable thin-coat silicone systems. These provide a water-repellent, low-maintenance exterior finish that protects your brickwork against the elements while enhancing your home\'s kerb appeal.',
    qualityStandard: '10-Year Weatherproof Guarantee',
    finishQuality: 'Durable, crack-resistant & self-cleaning protection',
    idealFor: ['Exterior Facade Modernization', 'New Build Timber & Block Frames', 'Damp-Proofing Remedial Work', 'Architectural Feature Walls'],
    materialsUsed: ['Weber.pral M Monocouche', 'K-Rend Silicone TC 15', 'High-Tensile Fiberglass Reinforcement Mesh'],
    turnaround: '15–25m² sprayed & scraped / day'
  },
  {
    id: 'heritage',
    number: '03',
    title: 'HERITAGE LATH & PLASTER RESTORATION',
    subtitle: 'Traditional lime plastering and historic conservation for period homes',
    description: 'Essex is home to hundreds of listed Georgian, Victorian, and Tudor properties. Our skilled craftsmen use traditional lime putties, natural horsehair reinforcement, and riven oak laths to restore period ceilings and walls while maintaining structural breathability and authentic character.',
    qualityStandard: 'Authentic Period Craftsmanship',
    finishQuality: 'Breathable lime finishes matching original character',
    idealFor: ['Grade I & II Listed Buildings', 'Period Victorian & Georgian Manors', 'Timber-Framed Tudor Cottages', 'Historic Cornice & Moulding Repair'],
    materialsUsed: ['Mature Lime Putty (3-Month Slaked)', 'Natural Goat & Horse Hair Fiber', 'Hand-Riven Chestnut / Oak Laths'],
    turnaround: 'Bespoke heritage scheduling'
  },
  {
    id: 'drylining',
    number: '04',
    title: 'COMMERCIAL & RESIDENTIAL DRY LINING',
    subtitle: 'Plasterboard partitioning, ceiling systems, and soundproofing',
    description: 'Clean, efficient interior partitioning systems for residential extensions, office fit-outs, and commercial spaces across Essex. We construct sturdy metal stud partition walls, suspended ceiling grids, and acoustic soundproofing systems built for durability and clean lines.',
    qualityStandard: 'High-Durability Partitioning',
    finishQuality: 'Solid construction with superior sound & acoustic insulation',
    idealFor: ['Commercial Office Fit-Outs', 'Retail & Hospitality Spaces', 'Schools & Healthcare Facilities', 'Multi-Storey Residential Developments'],
    materialsUsed: ['British Gypsum Gypframe Metal Studs', 'SoundBloc & FireWall Plasterboards', 'Isover Acoustic Mineral Wool'],
    turnaround: 'Up to 60m² boarding per crew / day'
  },
  {
    id: 'screeding',
    number: '05',
    title: 'FLOOR LEVELING & SCREEDING',
    subtitle: 'Liquid flow screeds and traditional leveling for underfloor heating',
    description: 'The foundation of exceptional flooring. We install liquid flow screeds and reinforced sand/cement leveling screeds designed to perfectly encapsulate underfloor heating pipes. The result is maximum thermal efficiency and a solid, level surface ready for tiling, wood flooring, or carpets.',
    qualityStandard: 'Solid Level Foundation',
    finishQuality: 'Perfectly flat, smooth surface ready for tiling & flooring',
    idealFor: ['Underfloor Heating Installations', 'Open-Plan Ground Floor Renovations', 'Commercial Floor Leveling', 'High-Load Garage & Workshop Floors'],
    materialsUsed: ['Gypsol Anhydrite Flow Screed', 'Reinforced Polypropylene Fiber Screed', 'Edge Isolation Perimeter Foam'],
    turnaround: 'Up to 500m² liquid screed / day'
  },
  {
    id: 'polished',
    number: '06',
    title: 'VENETIAN PLASTER & MICROCEMENT',
    subtitle: 'Bespoke Italian marble plasters and seamless waterproof bathroom finishes',
    description: 'For clients seeking a standout feature or luxury finish. We hand-apply Italian Venetian marble plasters and durable waterproof microcement. Available in high-gloss marble effects, textured industrial aesthetics, or seamless waterproof coatings for modern bathrooms and wet rooms.',
    qualityStandard: 'Bespoke Artisan Luxury',
    finishQuality: 'Hand-trowelled Italian craftsmanship & 100% waterproof',
    idealFor: ['Luxury Residential Feature Walls', 'Seamless Wet Rooms & Shower Enclosures', 'Bespoke Kitchen Worktops & Splashbacks', 'High-End Retail Reception Desks'],
    materialsUsed: ['Authentic Italian Slaked Lime & Marble Dust', 'Natural Mineral Pigments & Carnauba Wax', 'Bi-Component Waterproof Microcement'],
    turnaround: 'Multi-layer artisanal cure (4–7 days)'
  }
];

export const ESSEX_COVERAGE_AREAS = [
  'CHELMSFORD', 'COLCHESTER', 'BRENTWOOD', 'LOUGHTON', 
  'BILLERICAY', 'SOUTHEND-ON-SEA', 'BASILDON', 'EPPING', 
  'MALDON', 'SAFFRON WALDEN', 'HARLOW', 'RAYLEIGH',
  'WITHAM', 'BRAINTREE', 'CHIGWELL', 'ONGAR',
  'BURNHAM-ON-CROUCH', 'ROCHFORD', 'THAXTED', 'GREAT DUNMOW'
];

export interface TestimonialLog {
  logId: string;
  location: string;
  clientType: string;
  projectScope: string;
  quote: string;
  date: string;
}

export const CREDIBILITY_LOGS: TestimonialLog[] = [
  {
    logId: 'PROJECT-402',
    location: 'BRENTWOOD, ESSEX',
    clientType: 'Senior Architect & Developer',
    projectScope: '4,500 sq ft Luxury Residential Build',
    quote: 'Essex Plasterers completed the entire dry lining and two-coat skimming across 14 rooms with exceptional attention to detail. Their smooth finish quality, reliability, and site cleanliness are unmatched in the county.',
    date: 'MAY 2026'
  },
  {
    logId: 'PROJECT-388',
    location: 'CHELMSFORD CITY CENTRE',
    clientType: 'Commercial Fit-Out Director',
    projectScope: 'Grade II Listed Office Restoration',
    quote: 'When restoring historic lime plaster ceilings, you need true craftsmen. The team from Essex Plasterers demonstrated deep knowledge of traditional lath work and delivered an immaculate restoration on schedule and with zero mess.',
    date: 'APRIL 2026'
  },
  {
    logId: 'PROJECT-351',
    location: 'COLCHESTER, ESSEX',
    clientType: 'Private Homeowner',
    projectScope: 'Full Exterior Monocouche Render & Kitchen Skim',
    quote: 'Our exterior transformed from weathered brick to a crisp, weather-proof ash grey render. The quote was transparent, the crew arrived at 7am sharp daily, and the finish quality is absolute perfection.',
    date: 'FEBRUARY 2026'
  }
];
