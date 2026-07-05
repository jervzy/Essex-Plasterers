export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bsStandard: string;
  tolerance: string;
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
    description: 'Our core discipline. We apply a rigorous two-coat plaster skim over newly boarded ceilings and partitions, or re-skim deteriorated walls. Every surface is trowel-polished to a glass-like finish, creating an immaculate canvas ready for high-specification emulsion, decorative wallpaper, or architectural lighting without surface imperfections.',
    bsStandard: 'BS EN 13279-1 / BS 5262 Compliant',
    tolerance: '< 1.5mm deviation over 3m straight edge',
    idealFor: ['New Build Residences', 'Home Extensions & Loft Conversions', 'Full Property Refurbishments', 'High-Spec Kitchen & Bathroom Fits'],
    materialsUsed: ['British Gypsum Thistle Multi-Finish', 'Thistle Bond-It Bonding Agent', 'Alkali-Resistant Scrim Tape'],
    turnaround: '25–40m² per craftsman / day'
  },
  {
    id: 'rendering',
    number: '02',
    title: 'EXTERNAL RENDERING & MONOCOUCHE',
    subtitle: 'Weather-proof silicone, scratch render, and traditional external coatings',
    description: 'Engineered for the demanding coastal and inland Essex climate. We specialize in through-colour monocouche renders (Weber, K-Rend, Parex) and breathable thin-coat silicone systems. These provide a water-repellent, self-cleaning exterior facade that eliminates the need for repainting while enhancing thermal efficiency.',
    bsStandard: 'BS EN 998-1 / BS 5262 External Standard',
    tolerance: 'Uniform texture & zero cracking guarantee',
    idealFor: ['Exterior Facade Modernization', 'New Build Timber & Block Frames', 'Damp-Proofing Remedial Work', 'Architectural Feature Walls'],
    materialsUsed: ['Weber.pral M Monocouche', 'K-Rend Silicone TC 15', 'High-Tensile Fiberglass Reinforcement Mesh'],
    turnaround: '15–25m² sprayed & scraped / day'
  },
  {
    id: 'heritage',
    number: '03',
    title: 'HERITAGE LATH & PLASTER RESTORATION',
    subtitle: 'Traditional lime plastering and historic conservation for listed buildings',
    description: 'Essex is home to hundreds of Grade I and Grade II listed Georgian, Victorian, and Tudor structures. Our master craftsmen utilize non-hydraulic and hydraulic lime putties, horsehair reinforcement, and riven oak laths to restore period ceilings and walls while maintaining structural breathability and historic authenticity.',
    bsStandard: 'Historic England & BS 7913 Conservation Compliant',
    tolerance: 'Period-accurate undulation & profile matching',
    idealFor: ['Grade I & II Listed Buildings', 'Period Victorian & Georgian Manors', 'Timber-Framed Tudor Cottages', 'Historic Cornice & Moulding Repair'],
    materialsUsed: ['Mature Lime Putty (3-Month Slaked)', 'Natural Goat & Horse Hair Fiber', 'Hand-Riven Chestnut / Oak Laths'],
    turnaround: 'Bespoke heritage scheduling'
  },
  {
    id: 'drylining',
    number: '04',
    title: 'COMMERCIAL DRY LINING & PARTITIONS',
    subtitle: 'MF ceiling grids, metal stud wall assemblies, and fire-rated acoustics',
    description: 'Precision interior lining systems for commercial contractors, retail units, and educational facilities across Essex. We construct heavy-duty metal stud partitions, suspended MF plasterboard ceiling grids, and specialized fire-stop and acoustic barriers certified to commercial building regulations.',
    bsStandard: 'BS 8212 / BS EN 14195 Commercial Standard',
    tolerance: 'Laser-level alignment & 60-120 min fire rating',
    idealFor: ['Commercial Office Fit-Outs', 'Retail & Hospitality Spaces', 'Schools & Healthcare Facilities', 'Multi-Storey Residential Developments'],
    materialsUsed: ['British Gypsum Gypframe Metal Studs', 'SoundBloc & FireWall Plasterboards', 'Isover Acoustic Mineral Wool'],
    turnaround: 'Up to 60m² boarding per crew / day'
  },
  {
    id: 'screeding',
    number: '05',
    title: 'ARCHITECTURAL FLOOR SCREEDING',
    subtitle: 'Liquid flow screeds and traditional sand/cement leveling for underfloor heating',
    description: 'The foundation of exceptional flooring. We install anhydrite liquid flow screeds and reinforced fiber sand/cement screeds engineered to fully encapsulate underfloor heating pipes without air pockets. The result is maximum thermal conductivity and a millimeter-perfect datum ready for large-format tiles or timber flooring.',
    bsStandard: 'BS 8204-1 Floor Screeding Standard',
    tolerance: 'SR1 (< 3mm under 2m straight edge)',
    idealFor: ['Underfloor Heating Installations', 'Open-Plan Ground Floor Renovations', 'Commercial Floor Leveling', 'High-Load Garage & Workshop Floors'],
    materialsUsed: ['Gypsol Anhydrite Flow Screed', 'Reinforced Polypropylene Fiber Screed', 'Edge Isolation Perimeter Foam'],
    turnaround: 'Up to 500m² liquid screed / day'
  },
  {
    id: 'polished',
    number: '06',
    title: 'VENETIAN POLISHED PLASTER & MICROCEMENT',
    subtitle: 'Bespoke Marmorino, Travertino, and seamless waterproof surface finishes',
    description: 'For clients seeking an extraordinary architectural statement. Hand-applied Italian marble plasters and durable waterproof microcement finishes. Available in high-gloss specular marble effects, raw pitted industrial concrete textures, or seamless waterproof bathroom coatings.',
    bsStandard: 'Artisanal Italian Formulation Standards',
    tolerance: 'Bespoke tactile surface profiling',
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
    logId: 'LOG-EX-402',
    location: 'BRENTWOOD, ESSEX',
    clientType: 'Senior Architect & Developer',
    projectScope: '4,500 sq ft Luxury Residential Build',
    quote: 'Essex Plasterers completed the entire internal dry lining and two-coat skimming across 14 rooms with zero snagging items at practical completion. Their adherence to tolerance and site cleanliness is unmatched in the county.',
    date: 'MAY 2026'
  },
  {
    logId: 'LOG-EX-388',
    location: 'CHELMSFORD CITY CENTRE',
    clientType: 'Commercial Fit-Out Director',
    projectScope: 'Grade II Listed Office Restoration',
    quote: 'When restoring historic lime plaster ceilings, you cannot hide behind shortcuts. The craftsmen from Essex Plasterers demonstrated profound knowledge of traditional lath work and delivered an immaculate restoration on schedule.',
    date: 'APRIL 2026'
  },
  {
    logId: 'LOG-EX-351',
    location: 'COLCHESTER, ESSEX',
    clientType: 'Private Homeowner',
    projectScope: 'Full Exterior Monocouche Render & Kitchen Skim',
    quote: 'Our exterior facade transformed from weathered brick to a crisp, weather-proof ash grey monocouche render. The quote was transparent, the crew arrived at 7am sharp daily, and the finish is absolute perfection.',
    date: 'FEBRUARY 2026'
  }
];
