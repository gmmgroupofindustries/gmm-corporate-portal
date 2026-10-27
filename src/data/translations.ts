import type { Subsidiary, MetricItem, GovernancePillar, NewsItem } from '../types/content';

export const subsidiariesData: Subsidiary[] = [
  {
    id: 'gmm-heavy-engineering',
    name: {
      en: 'GMM Heavy Engineering Ltd.',
      bn: 'জিএমএম হেভি ইঞ্জিনিয়ারিং লিমিটেড'
    },
    category: 'manufacturing',
    categoryLabel: { en: 'Manufacturing & Heavy Fabrication', bn: 'ভারী শিল্প ও মেটাল ফ্যাব্রিকেশন' },
    tagline: {
      en: 'High-precision industrial fabrication, pressure vessels, and mega-structural steel assemblies.',
      bn: 'উচ্চ-নির্ভুল ভারী শিল্প কাঠামো, প্রেসার ভেসেল ও মেগা স্টিল ফেব্রিকেশন।'
    },
    year: '1988',
    capacity: { en: '180,000 MT / Year', bn: 'প্রতি বছর ১,৮০,০০০ মেট্রিক টন' },
    headcount: '2,800+',
    headquarters: { en: 'Industrial Zone 3, Narayanganj', bn: 'ইন্ডাস্ট্রিয়াল জোন ৩, নারায়ণগঞ্জ' },
    description: {
      en: 'A flagship manufacturing powerhouse equipped with automated CNC plasma profile cutters, 100-ton overhead gantry systems, and submerged arc welding bays serving infrastructure, power plants, and maritime complexes.',
      bn: 'স্বয়ংক্রিয় সিএনসি প্লাজমা কাটার, ১০০-টন ওভারহেড গ্যান্ট্রি এবং সাবমার্জড আর্ক ওয়েল্ডিং বে সমৃদ্ধ শীর্ষস্থানীয় ম্যানুফ্যাকচারিং কমপ্লেক্স যা বিদ্যুৎকেন্দ্র ও অবকাঠামো খাতে সেবা দিয়ে আসছে।'
    },
    capabilities: {
      en: ['Bridge Girders & Span Assemblies', 'ASME Code Pressure Vessels', 'Industrial Boiler Structures', 'Hydraulic Heavy Presses'],
      bn: ['ব্রিজ গার্ডার ও স্প্যান সংযোজন', 'এএসএমই কোড প্রেসার ভেসেল', 'ইন্ডাস্ট্রিয়াল বয়লার কাঠামো', 'হাইড্রোলিক হেভি প্রেস']
    },
    isoCertifications: ['ISO 9001:2015', 'ISO 45001:2018', 'ASME "U" Stamp']
  },
  {
    id: 'gmm-structural-metallurgy',
    name: {
      en: 'GMM Structural Casting & Metallurgy',
      bn: 'জিএমএম স্ট্রাকচারাল কাস্টিং ও মেটালার্জি'
    },
    category: 'manufacturing',
    categoryLabel: { en: 'Manufacturing & Heavy Fabrication', bn: 'ভারী শিল্প ও মেটাল ফ্যাব্রিকেশন' },
    tagline: {
      en: 'Continuous induction billet casting, alloy steel refinement, and specialized seismic structural rebar.',
      bn: 'কন্টিনিউয়াস কাস্টিং, অ্যালয় স্টিল পরিশোধন ও সিসমিক গ্রেড রিবার উৎপাদন।'
    },
    year: '1996',
    capacity: { en: '320,000 MT / Year', bn: 'প্রতি বছর ৩,২০,০০০ মেট্রিক টন' },
    headcount: '1,950+',
    headquarters: { en: 'Sreepur Heavy Steel Belt, Gazipur', bn: 'শ্রীপুর হেভি স্টিল বেল্ট, গাজীপুর' },
    description: {
      en: 'State-of-the-art electric arc furnace facility engineering grade 500W and 550D thermo-mechanically treated (TMT) rebars and custom high-durability alloy billets for heavy load-bearing foundations.',
      bn: 'আধুনিক ইলেকট্রিক আর্ক ফার্নেস সমৃদ্ধ রিবার ও অ্যালয় বিলেট কারখানা যা সর্বোচ্চ গ্রেডের টিএমটি রড এবং ভিত্তিপ্রস্তরের বিশেষ উপাদান উৎপাদন করে।'
    },
    capabilities: {
      en: ['500W / 550D Seismic TMT Rebar', 'Ductile Iron Pipeline Castings', 'Direct Ladle Metallurgy Refining', 'Spectrographic Purity Lab'],
      bn: ['৫০০W / ৫৫০D সিসমিক টিএমটি রিবার', 'ডাক্টাইল আয়রন পাইপলাইন কাস্টিং', 'ল্যাডল মেটালার্জি রিফাইনিং', 'স্পেকট্রোগ্রাফিক পিউরিটি ল্যাব']
    },
    isoCertifications: ['ISO 9001:2015', 'BSTI Grade-1 Certification']
  },
  {
    id: 'gmm-energy-solutions',
    name: {
      en: 'GMM Power & Energy Infrastructure',
      bn: 'জিএমএম পাওয়ার অ্যান্ড এনার্জি ইনফ্রাস্ট্রাকচার'
    },
    category: 'energy',
    categoryLabel: { en: 'Energy & Infrastructure', bn: 'বিদ্যুৎ ও জাতীয় অবকাঠামো' },
    tagline: {
      en: 'Utility-scale substation engineering, high-voltage transformers, and industrial hybrid microgrids.',
      bn: 'ইউটিলিটি সাবস্টেশন, হাই-ভোল্টেজ ট্রান্সফরমার ও হাইব্রিড মাইক্রোগ্রিড সমাধান।'
    },
    year: '2004',
    capacity: { en: '450 MVA Grid Capacity', bn: '৪৫০ এমভিএ গ্রিড হ্যান্ডলিং সক্ষমতা' },
    headcount: '1,400+',
    headquarters: { en: 'Meghnaghat Industrial Hub', bn: 'মেঘনাঘাট ইন্ডাস্ট্রিয়াল হাব' },
    description: {
      en: 'Pioneering turn-key EPC electrical infrastructure solutions, from 132/33kV grid substations to smart industrial solar-thermal generation complexes guaranteeing continuous baseload reliability.',
      bn: '১৩২/৩৩ কেভি গ্রিড সাবস্টেশন থেকে শুরু করে শিল্পভিত্তিক স্মার্ট সোলার-থার্মাল পাওয়ার স্টেশন স্থাপন পর্যন্ত টার্ন-কি ইপিসি সলিউশন প্রদানকারী।'
    },
    capabilities: {
      en: ['132/33 kV GIS Substation EPC', 'Power Transformer Manufacturing (up to 50MVA)', 'Industrial Captive Power Plants', 'Automated SCADA Monitoring'],
      bn: ['১৩২/৩৩ কেভি জিআইএস সাবস্টেশন ইপিসি', '৫০ এমভিএ পর্যন্ত পাওয়ার ট্রান্সফরমার নির্মাণ', 'শিল্পভিত্তিক ক্যাপটিভ বিদ্যুৎকেন্দ্র', 'অটোমেটেড স্কাডা মনিটরিং']
    },
    isoCertifications: ['ISO 14001:2015', 'ISO 9001:2015', 'IEC 60076 Compliant']
  },
  {
    id: 'gmm-marine-infra',
    name: {
      en: 'GMM Infra & Marine Construction',
      bn: 'জিএমএম ইনফ্রা অ্যান্ড মেরিন কনস্ট্রাকশন'
    },
    category: 'energy',
    categoryLabel: { en: 'Energy & Infrastructure', bn: 'বিদ্যুৎ ও জাতীয় অবকাঠামো' },
    tagline: {
      en: 'Deep-water channel dredging, heavy jetty piling, and national river training infrastructure.',
      bn: 'ডিপ-ওয়াটার ক্যাপিটাল ড্রেজিং, ভারী জেটি পাইলিং এবং নদী শাসন অবকাঠামো।'
    },
    year: '2009',
    capacity: { en: '12M Cubic Metres / Year Dredging', bn: 'প্রতি বছর ১২ মিলিয়ন ঘনমিটার ড্রেজিং' },
    headcount: '2,100+',
    headquarters: { en: 'Chattogram Port Coastal Corridor', bn: 'চট্টগ্রাম পোর্ট উপকূলীয় করিডোর' },
    description: {
      en: 'Possessing an advanced proprietary fleet of cutter suction dredgers, pontoon pile-drivers, and heavy tugs, delivering critical deep-water terminal works, economic zone soil stabilization, and coastal breakwaters.',
      bn: 'নিজস্ব কাটার সাকশন ড্রেজার ও পন্টুন পাইলিং ফ্লিট নিয়ে দেশের প্রধান বন্দর, অর্থনৈতিক অঞ্চল ও উপকূলীয় নদী শাসন প্রকল্পের শীর্ষ ঠিকাদারি প্রতিষ্ঠান।'
    },
    capabilities: {
      en: ['Heavy Marine Jetty Construction', 'Trailing Suction Hopper Dredging', 'Pre-stressed Concrete Tubular Piling', 'Coastal Revetment & Embankments'],
      bn: ['ভারী মেরিন জেটি নির্মাণ', 'হপার ও কাটার সাকশন ড্রেজিং', 'প্রি-স্ট্রেসড কংক্রিট পাইলিং', 'উপকূলীয় বাঁধ ও রিভেটমেন্ট']
    },
    isoCertifications: ['ISO 45001:2018', 'FIDIC Compliant Operations']
  },
  {
    id: 'gmm-maritime-shipping',
    name: {
      en: 'GMM Global Maritime & Shipping',
      bn: 'জিএমএম গ্লোবাল মেরিটাইম অ্যান্ড শিপিং'
    },
    category: 'logistics',
    categoryLabel: { en: 'Maritime & Supply Chain', bn: 'মেরিটাইম ও লজিস্টিকস সাপ্লাই চেইন' },
    tagline: {
      en: 'Ocean bulk freight operations, coastal feeder vessels, and international chartering agency.',
      bn: 'সমুদ্রগামী বাল্ক কার্গো বহর, উপকূলীয় ফিডার ভেসেল এবং আন্তর্জাতিক শিপিং চার্টারিং।'
    },
    year: '2011',
    capacity: { en: '380,000 DWT Commercial Fleet', bn: '৩,৮০,০০০ ডিডব্লিউটি বাণিজ্যিক বহর' },
    headcount: '1,100+',
    headquarters: { en: 'Agrabad Commercial Area, Chattogram', bn: 'আগ্রাবাদ বাণিজ্যিক এলাকা, চট্টগ্রাম' },
    description: {
      en: 'Connecting global commodity routes from the Middle East, Southeast Asia, and the Bay of Bengal through a dedicated fleet of Supramax dry-bulk carriers and shallow-draft coaster vessels.',
      bn: 'সুপ্রাম্যাক্স ড্রাই-বাল্ক এবং কোস্টাল ফিডার জাহাজের মাধ্যমে মধ্যপ্রাচ্য ও দক্ষিণ-পূর্ব এশিয়ার সাথে বঙ্গোপসাগরের বাণিজ্য সংযোগ রক্ষা করে আসছে।'
    },
    capabilities: {
      en: ['Supramax Dry-Bulk Transport', 'Coastal Inland Cargo Feeder Network', 'Port Agency & Stevedoring Hub', 'IMO Green Charter Standard Fleet'],
      bn: ['সুপ্রাম্যাক্স ড্রাই-বাল্ক পরিবহন', 'অভ্যন্তরীণ নৌপরিবহন নেটওয়ার্ক', 'পোর্ট এজেন্সি ও স্টিভেডোরিং', 'আইএমও গ্রিন চার্টার কমপ্লায়েন্ট ফ্লিট']
    },
    isoCertifications: ['ISM Code Certified', 'ISO 9001:2015', 'MARPOL Tier III']
  },
  {
    id: 'gmm-cold-chain-logistics',
    name: {
      en: 'GMM Integrated Logistics & Terminals',
      bn: 'জিএমএম ইন্টিগ্রেটেড লজিস্টিকস অ্যান্ড টার্মিনালস'
    },
    category: 'logistics',
    categoryLabel: { en: 'Maritime & Supply Chain', bn: 'মেরিটাইম ও লজিস্টিকস সাপ্লাই চেইন' },
    tagline: {
      en: 'Automated dry ports, inland container depots (ICD), and temperature-controlled cold logistics.',
      bn: 'স্বয়ংক্রিয় অফ-ডক আইসিডি টার্মিনাল ও কোল্ড-চেইন সমন্বিত সাপ্লাই হাব।'
    },
    year: '2016',
    capacity: { en: '120,000 TEU Yard Throughput', bn: 'প্রতি বছর ১,২০,০০০ টিইইউ কনটেইনার' },
    headcount: '980+',
    headquarters: { en: 'Sitakunda Logistics Corridor', bn: 'সীতাকুণ্ড লজিস্টিকস করিডোর' },
    description: {
      en: 'A premier multimodal logistics nexus spanning 50 acres of bonded customs container yard, multi-temperature cold storage bays, and GPS-telematics freight vehicle fleets guaranteeing time-critical delivery.',
      bn: '৫০ একর বিস্তৃত কাস্টমস বন্ডেড আইসিডি টার্মিনাল, তাপমাত্রা নিয়ন্ত্রিত আধুনিক কোল্ড স্টোরেজ এবং জিপিএস ট্র্যাকিংযুক্ত ফ্রেইট বহর।'
    },
    capabilities: {
      en: ['Bonded Container Depot (ICD)', '-25°C Ultra-Low Cold Storage', 'Intermodal Rail-Road Transshipment', 'Real-time Cargo Tracking System'],
      bn: ['বন্ডেড কনটেইনার ডিপো (আইসিডি)', '-২৫° সে. অত্যাধুনিক কোল্ড স্টোরেজ', 'রেল-সড়ক ইন্টারমোডাল পরিবহন', 'রিয়েল-টাইম কার্গো ট্র্যাকিং']
    },
    isoCertifications: ['ISO 28000:2007 (Supply Chain Security)', 'GDP Compliant']
  },
  {
    id: 'gmm-polymers-materials',
    name: {
      en: 'GMM Poly-Plast & Advanced Materials',
      bn: 'জিএমএম পলি-প্লাস্ট অ্যান্ড অ্যাডভান্সড মেটেরিয়ালস'
    },
    category: 'materials',
    categoryLabel: { en: 'Advanced Materials & Ventures', bn: 'উন্নত কাঁচামাল ও বিশেষায়িত উদ্যোগ' },
    tagline: {
      en: 'High-density industrial polymer extrusions, geo-textiles, and circular recycled resins.',
      bn: 'শিল্পের জন্য পলিমার এক্সট্রুশন, জিও-টেক্সটাইল ও সার্কুলার পলিমার সমাধান।'
    },
    year: '2014',
    capacity: { en: '65,000 MT / Year Output', bn: 'প্রতি বছর ৬৫,০০০ মেট্রিক টন' },
    headcount: '850+',
    headquarters: { en: 'Bhaluka Industrial Belt, Mymensingh', bn: 'ভালুকা শিল্পাঞ্চল, ময়মনসিংহ' },
    description: {
      en: 'Engineered non-woven geo-textiles for riverbank stabilization, heavy-duty polypropylene woven bags for agricultural bulk shipping, and a pioneering circular plastics re-granulation facility.',
      bn: 'নদী ভাঙন রোধে ব্যবহৃত টেকসই জিও-টেক্সটাইল, ভারী শিল্প ও কৃষির জন্য পলিপ্রোপিলিন ব্যাগ এবং আধুনিক প্লাস্টিক রিসাইক্লিং ইউনিট।'
    },
    capabilities: {
      en: ['High-Strength Polypropylene Geotextile', 'Circular Polymer Upcycling Units', 'Heavy Industrial Packaging Rolls', 'Precision Lab Polymer Testing'],
      bn: ['উচ্চ-শক্তির পলিপ্রোপিলিন জিওটেক্সটাইল', 'সার্কুলার পলিমার আপসাইক্লিং', 'ভারী শিল্প প্যাকেজিং রোলস', 'ল্যাব পলিমার টেস্টিং ও সার্টিফিকেশন']
    },
    isoCertifications: ['ISO 14001:2015', 'OEKO-TEX Certified']
  },
  {
    id: 'gmm-agri-refineries',
    name: {
      en: 'GMM Agro-Tech & Commodity Refineries',
      bn: 'জিএমএম এগ্রো-টেক অ্যান্ড কমোডিটি রিফাইনারিজ'
    },
    category: 'materials',
    categoryLabel: { en: 'Advanced Materials & Ventures', bn: 'উন্নত কাঁচামাল ও বিশেষায়িত উদ্যোগ' },
    tagline: {
      en: 'Automated pulse processing, edible vegetable oil refining, and high-efficiency grain silos.',
      bn: 'স্বয়ংক্রিয় খাদ্যশস্য প্রক্রিয়াজাতকরণ, ভোজ্যতেল পরিশোধন ও মেগা সাইলো ব্যবস্থাপনা।'
    },
    year: '2019',
    capacity: { en: '450,000 MT Storage & Processing', bn: '৪,৫০,০০০ মেট্রিক টন সংরক্ষণ ও পরিশোধন' },
    headcount: '1,250+',
    headquarters: { en: 'Mongla Port Industrial Area', bn: 'মোংলা পোর্ট শিল্পাঞ্চল' },
    description: {
      en: 'Modern Swiss Bühler grain-milling complexes and De Smet edible oil fractional distillation lines delivering essential staple security with uncompromising purity and food-grade hygiene standards.',
      bn: 'সুইস বুলার প্রযুক্তি নির্ভর গ্রেইন মিলিং কমপ্লেক্স এবং অত্যাধুনিক ভোজ্যতেল রিফাইনারি যা খাদ্যের পুষ্টিমান ও নিরাপত্তা নিশ্চিতে প্রতিশ্রুতিবদ্ধ।'
    },
    capabilities: {
      en: ['Automated Grain Silo Complex (200K MT)', 'Continuous Fractionation Edible Oil Refinery', 'Nutritional Fortification Standards', 'Zero-Waste Biomass Energy Units'],
      bn: ['স্বয়ংক্রিয় গ্রেইন সাইলো (২ লাখ টন)', 'কন্টিনিউয়াস ভোজ্যতেল পরিশোধন ইউনিট', 'পুষ্টিমান ফর্টিফিকেশন মানদণ্ড', 'বায়োমাস বর্জ্য শক্তি উৎপাদন']
    },
    isoCertifications: ['ISO 22000:2018 (Food Safety)', 'HACCP Certified', 'HALAL Certified']
  }
];

export const metricsData: MetricItem[] = [
  {
    id: 'heritage',
    value: '35+',
    suffix: 'Years',
    label: { en: 'Industrial Heritage', bn: 'শিল্পে অগ্রযাত্রার ইতিহাস' },
    subtext: { en: 'Pioneering heavy enterprise since 1988', bn: '১৯৮৮ সাল থেকে শিল্প খাতের আস্থা' }
  },
  {
    id: 'enterprises',
    value: '08',
    suffix: 'Entities',
    label: { en: 'Specialized Subsidiaries', bn: 'বিশেষায়িত সহযোগী প্রতিষ্ঠান' },
    subtext: { en: 'Unified under GMM Group governance', bn: 'জিএমএম কেন্দ্রীয় সুশাসনের অধীন' }
  },
  {
    id: 'workforce',
    value: '12,500+',
    suffix: 'Strong',
    label: { en: 'Engineering & Workforce', bn: 'দক্ষ প্রকৌশলী ও কর্মী পরিবার' },
    subtext: { en: 'Across manufacturing & port facilities', bn: 'সারাদেশে উৎপাদন ও বন্দর প্রকল্পে' }
  },
  {
    id: 'global-reach',
    value: '18+',
    suffix: 'Countries',
    label: { en: 'Trade & Export Footprint', bn: 'আন্তর্জাতিক বাণিজ্য ও রপ্তানি' },
    subtext: { en: 'Reliable transcontinental corridors', bn: 'বিশ্বস্ত আন্তর্জাতিক সরবরাহ করিডোর' }
  }
];

export const governancePillars: GovernancePillar[] = [
  {
    title: {
      en: 'Centralized Fiduciary Discipline',
      bn: 'কেন্দ্রীয় আর্থিক শৃঙ্খলা ও নিরীক্ষা'
    },
    description: {
      en: 'Unified capital allocation, stringent quarterly forensic audits, and statutory compliance overseen by an autonomous Board of Directors.',
      bn: 'কেন্দ্রীয় মূলধন বরাদ্দ, ত্রৈমাসিক স্বাধীন নিরীক্ষা এবং পর্ষদীয় স্বচ্ছতার মাধ্যমে প্রতিটি প্রতিষ্ঠানের জবাবদিহিতা নিশ্চিতকরণ।'
    },
    icon: 'ShieldCheck'
  },
  {
    title: {
      en: 'Operational Autonomy of Concerns',
      bn: 'সহযোগী প্রতিষ্ঠানের কার্যনির্বাহী স্বাধীনতা'
    },
    description: {
      en: 'Each sister enterprise operates with dedicated technical managing directors and specialized domain engineers empowered for rapid agile execution.',
      bn: 'প্রতিটি সিস্টার কনসার্ন নিজস্ব কারিগরি ব্যবস্থাপনা পরিচালক ও বিশেষজ্ঞদের নেতৃত্বে স্বাধীনভাবে সেরা আউটপুট প্রদান করে।'
    },
    icon: 'Layers'
  },
  {
    title: {
      en: 'Zero-Harm Workplace & Safety (OHSAS)',
      bn: 'শূন্য-ঝুঁকি কর্মপরিবেশ ও শ্রমিক কল্যাণ'
    },
    description: {
      en: 'Stringent industrial safety standards across heavy foundries, high-voltage yards, and marine vessels to safeguard our human capital.',
      bn: 'ভারী কারখানা, উচ্চ ভোল্টেজ ইয়ার্ড ও সামুদ্রিক জাহাজে সর্বোচ্চ আন্তর্জাতিক সেফটি স্ট্যান্ডার্ড ও স্বাস্থ্যবীমা নিশ্চিতকরণ।'
    },
    icon: 'HeartHandshake'
  },
  {
    title: {
      en: 'Eco-Industrial Stewardship (ESG)',
      bn: 'পরিবেশবান্ধব টেকসই শিল্পায়ন (ইএসজি)'
    },
    description: {
      en: 'Pioneering closed-loop wastewater recycling, circular heat recovery systems, and solar hybrid generation across group facilities.',
      bn: 'কারখানাগুলোতে জিরো-ডিসচার্জ ওয়াটার রিসাইক্লিং, ফার্নেস হিট রিকভারি এবং ছাদভিত্তিক সৌর বিদ্যুৎ উৎপাদন প্রকল্প।'
    },
    icon: 'Leaf'
  }
];

export const newsroomDispatches: NewsItem[] = [
  {
    date: 'OCT 2026',
    category: { en: 'Regulatory Disclosure', bn: 'প্রাতিষ্ঠানিক বিজ্ঞপ্তি' },
    title: {
      en: 'GMM Group Inaugurates 450 MVA High-Voltage Substation Phase II',
      bn: 'জিএমএম এনার্জির নতুন ৪৫০ এমভিএ হাই-ভোল্টেজ সাবস্টেশন দ্বিতীয় ধাপ উদ্বোধন'
    },
    excerpt: {
      en: 'The holding company completes grid interconnection expansion at Meghnaghat, bolstering continuous industrial baseload power for surrounding manufacturing hubs.',
      bn: 'মেঘনাঘাট ইন্ডাস্ট্রিয়াল বেল্টে নতুন গ্রিড সংযুক্তি সফলভাবে সম্পন্ন, যা স্থানীয় ভারী শিল্প এলাকায় নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ নিশ্চিত করবে।'
    }
  },
  {
    date: 'SEP 2026',
    category: { en: 'Fleet Expansion', bn: 'বাণিজ্যিক বহর সম্প্রসারণ' },
    title: {
      en: 'GMM Global Maritime Takes Delivery of 64,000 DWT Ultramax Carrier',
      bn: 'জিএমএম মেরিটাইমের বহরে যুক্ত হলো নতুন ৬৪,০০০ ডিডব্লিউটি আল্ট্রাম্যাক্স জাহাজ'
    },
    excerpt: {
      en: 'Equipped with Tier-III NOx emission-scrubbing systems, the vessel strengthens the group’s direct dry-bulk shipping capabilities across Asian corridors.',
      bn: 'আইএমও টিয়ার-৩ পরিবেশবান্ধব ধোঁয়া নিঃসরণ প্রযুক্তি সমৃদ্ধ নতুন জাহাজটি এশিয়া রুটে গ্রুপের নিজস্ব বাল্ক পণ্য পরিবহন সক্ষমতা বহুলাংশে বৃদ্ধি করল।'
    }
  },
  {
    date: 'AUG 2026',
    category: { en: 'Sustainability & ESG', bn: 'টেকসই শিল্প রূপরেখা' },
    title: {
      en: 'GMM Structural Metallurgy Attains Platinum Green Factory Benchmark',
      bn: 'জিএমএম মেটালার্জির কারখানা অর্জন করল আন্তর্জাতিক প্লাটিনাম গ্রিন স্বীকৃতি'
    },
    excerpt: {
      en: 'Achieving 94% process water recirculation and waste-heat power generation, establishing an industrial precedent in heavy manufacturing.',
      bn: '৯৪% পানি পুনর্ব্যবহার এবং ফার্নেস তাপ থেকে নিজস্ব বিদ্যুৎ উৎপাদনের মাধ্যমে ভারী শিল্পে এক অনন্য পরিবেশবান্ধব দৃষ্টান্ত স্থাপন।'
    }
  }
];

export const uiText = {
  en: {
    nav: {
      overview: 'Overview',
      structure: 'Holding Framework',
      subsidiaries: 'Subsidiaries & Concerns',
      governance: 'Governance & ESG',
      news: 'Dispatches',
      contact: 'Institutional Office',
      quickPortal: 'Sister Concerns Directory',
      langBtn: 'বাংলা'
    },
    hero: {
      badge: 'Parent Holding Conglomerate',
      tagline: 'Orchestrating Industrial Excellence.',
      subtagline: 'Anchoring Generational Growth.',
      description: 'GMM Group of Industries is the apex parent holding enterprise governing eight specialized market leaders across Heavy Manufacturing, Power Infrastructure, Maritime Logistics, and Advanced Commodity Refineries.',
      exploreBtn: 'Explore Sister Concerns',
      contactBtn: 'Corporate Dossier & Secretariat',
      statHeader: 'Core Operating Divisions',
      statusPill: 'Sovereign Holding Entity'
    },
    structureSection: {
      badge: 'Institutional Architecture',
      title: 'The Parent-Subsidiary Sovereign Model',
      description: 'How GMM Group of Industries creates synergistic enterprise value while safeguarding specialized operational excellence across each autonomous sister concern.',
      parentRoleTitle: 'Parent Group Responsibilities (GMM Group)',
      parentRoles: [
        'Strategic Vision & Macro Capital Allocation',
        'Group-Wide Fiduciary Governance & Statutory Audits',
        'Synergistic Cross-Enterprise Procurement & Logistics',
        'Boardroom Oversight, Fiduciary Compliance & ESG Mandates'
      ],
      daughterRoleTitle: 'Sister / Daughter Concerns Operations',
      daughterRoles: [
        'Dedicated Technical & Operational Autonomy',
        'Specialized Engineering, Production & Factory Management',
        'Direct Client Relationship & Domestic/Export Delivery',
        'Sector-Specific ISO Certifications & Quality Controls'
      ]
    },
    subsidiarySection: {
      badge: 'Enterprise Ecosystem',
      title: 'Our Diversified Sister Companies',
      description: 'Eight premier industrial operating entities unified under sovereign GMM governance, each driving scale in vital national and global sectors.',
      allTab: 'All Concerns',
      manufacturingTab: 'Heavy Manufacturing',
      energyTab: 'Energy & Infrastructure',
      logisticsTab: 'Maritime & Logistics',
      materialsTab: 'Materials & Agro-Tech',
      viewDetails: 'Examine Subsidiary Details',
      capacityLabel: 'Production / Operating Scale:',
      estLabel: 'Inception:'
    },
    governanceSection: {
      badge: 'Corporate Stewardship',
      title: 'Boardroom Governance, Integrity & ESG',
      description: 'A sovereign conglomerate built on four decades of unyielding fiduciary discipline, zero-compromise industrial safety, and regenerative environmental leadership.',
      chairmansDispatchTitle: "Chairman's Official Statement",
      chairmansQuote: '"True industrial leadership is measured not solely by tonnes fabricated or megawatts transmitted, but by the generational permanence of the trust we forge with our partners, workforce, and national economy."',
      chairmansSign: 'Executive Board of Directors, GMM Group of Industries'
    },
    newsSection: {
      badge: 'Media Centre & Dispatches',
      title: 'Corporate Announcements & Statements',
      readMore: 'Read Full Regulatory Dispatch'
    },
    contactSection: {
      badge: 'Central Secretariat',
      title: 'Holding Headquarters & Inquiries',
      description: 'Central communications portal for institutional stakeholders, joint venture inquiries, procurement tenders, and board correspondence.',
      hqAddressLabel: 'Registered Holding Headquarters',
      hqAddress: 'GMM Corporate Tower, Level 14-16, Commercial Avenue, Gulshan Industrial Axis, Dhaka, Bangladesh',
      phoneLabel: 'Executive Secretariat PABX',
      phone: '+880 (2) 887-9400 / 887-9401',
      emailLabel: 'Official Correspondence Email',
      email: 'secretariat@gmmgroup.com.bd',
      formTitle: 'Institutional Inquiry Docket',
      nameLabel: 'Full Name / Official Designation',
      orgLabel: 'Organization / Institution Name',
      concernLabel: 'Target Sister Concern (Optional)',
      allConcernsOption: 'GMM Group (Parent Holding Corporate)',
      messageLabel: 'Official Statement / Communication Intent',
      submitBtn: 'Transmit Official Inquiry',
      successMessage: 'Inquiry registered into the Secretariat logging queue.'
    },
    footer: {
      holdingNotice: 'GMM Group of Industries is the apex parent holding corporation. All sister enterprises are legally registered autonomous operating entities managed under group governance policies.',
      quickLinks: 'Institutional Links',
      subsidiaryList: 'Directory of Sister Concerns',
      copyright: '© 1988–2026 GMM Group of Industries Ltd. All Rights Reserved. Statutory Corporate Disclosures.'
    }
  },
  bn: {
    nav: {
      overview: 'পরিচিতি',
      structure: 'কাঠামো রূপরেখা',
      subsidiaries: 'সহযোগী প্রতিষ্ঠানসমূহ',
      governance: 'সুশাসন ও ইএসজি',
      news: 'প্রাতিষ্ঠানিক সংবাদ',
      contact: 'প্রধান কার্যালয়',
      quickPortal: 'সিস্টার কনসার্ন ডিরেক্টরি',
      langBtn: 'English'
    },
    hero: {
      badge: 'প্যারেন্ট হোল্ডিং কনগ্লোমারেট',
      tagline: 'শিল্পের উৎকর্ষে সমন্বিত শক্তি।',
      subtagline: 'জাতীয় অগ্রযাত্রায় অবিচল অঙ্গীকার।',
      description: 'জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ একটি শীর্ষস্থানীয় প্যারেন্ট হোল্ডিং প্রতিষ্ঠান—যা ভারী শিল্প, বিদ্যুৎ অবকাঠামো, আন্তর্জাতিক মেরিটাইম লজিস্টিকস ও বিশেষায়িত কাঁচামাল পরিশোধন খাতে ৮টি শীর্ষস্থানীয় সহযোগী প্রতিষ্ঠানকে পরিচালনা করে।',
      exploreBtn: 'সহযোগী প্রতিষ্ঠানসমূহ দেখুন',
      contactBtn: 'বোর্ড সেক্রেটারিয়েট ও যোগাযোগ',
      statHeader: 'মূল শিল্প বিভাগসমূহ',
      statusPill: 'সার্বভৌম হোল্ডিং প্রতিষ্ঠান'
    },
    structureSection: {
      badge: 'প্রাতিষ্ঠানিক রূপরেখা',
      title: 'প্যারেন্ট ও সিস্টার কনসার্ন সুশাসন মডেল',
      description: 'কীভাবে জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ প্রতিটি সহযোগী প্রতিষ্ঠানের নিজস্ব স্বকীয়তা ও পেশাদার স্বাধীনতা বজায় রেখে কেন্দ্রীয়ভাবে সর্বোচ্চ মান নিশ্চিত করে।',
      parentRoleTitle: 'প্যারেন্ট গ্রুপের দায়িত্ব (জিএমএম গ্রুপ)',
      parentRoles: [
        'কৌশলগত পরিকল্পনা ও সুষম মূলধন বরাদ্দ',
        'গ্রুপভিত্তিক অডিট, স্বচ্ছতা ও জবাবদিহিতা নিশ্চিতকরণ',
        'যৌথ আন্তর্জাতিক সোর্সিং ও সমন্বিত লজিস্টিকস',
        'পরিচালনা পর্ষদের দিকনির্দেশনা ও টেকসই মানদণ্ড রক্ষা'
      ],
      daughterRoleTitle: 'সিস্টার / সহযোগী প্রতিষ্ঠানের দায়িত্ব',
      daughterRoles: [
        'স্বাধীন কারিগরি ও অপারেশনাল পরিচালনা',
        'উন্নত কারখানা ব্যবস্থাপনা ও সার্বক্ষণিক মান নিয়ন্ত্রণ',
        'গ্রাহক ও শিল্প পার্টনারদের সরাসরি সেবা প্রদান',
        'নিজস্ব খাতের আন্তর্জাতিক আইএসও সার্টিফিকেশন মানদণ্ড রক্ষা'
      ]
    },
    subsidiarySection: {
      badge: 'শিল্প পরিবার',
      title: 'আমাদের বিশেষায়িত সহযোগী প্রতিষ্ঠানসমূহ',
      description: 'জিএমএম সেন্ট্রাল গভর্নেন্সের অধীনে পরিচালিত ৮টি শক্তিশালী প্রতিষ্ঠান—যা দেশের শিল্পভিত্তি ও বিশ্ববাণিজ্যে ভূমিকা রাখছে।',
      allTab: 'সকল প্রতিষ্ঠান',
      manufacturingTab: 'ভারী শিল্প ও মেটাল',
      energyTab: 'বিদ্যুৎ ও অবকাঠামো',
      logisticsTab: 'মেরিটাইম ও লজিস্টিকস',
      materialsTab: 'কাঁচামাল ও এগ্রো-টেক',
      viewDetails: 'বিস্তারিত তথ্য ও সক্ষমতা দেখুন',
      capacityLabel: 'উৎপাদন ও পরিচালন সক্ষমতা:',
      estLabel: 'প্রতিষ্ঠাকাল:'
    },
    governanceSection: {
      badge: 'কর্পোরেট মূল্যবোধ',
      title: 'পর্ষদীয় সুশাসন, সততা ও পরিবেশগত দায়বদ্ধতা',
      description: 'বিগত চার দশকেরও বেশি সময় ধরে আর্থিক শৃঙ্খলা, কর্মীদের শতভাগ কর্মক্ষেত্রের নিরাপত্তা এবং পরিবেশবান্ধব টেকসই শিল্পায়নে জিএমএম গ্রুপ অবিচল।',
      chairmansDispatchTitle: 'চেয়ারম্যানের প্রাতিষ্ঠানিক বাণী',
      chairmansQuote: '"প্রকৃত শিল্প নেতৃত্ব কেবল টন পরিমাপের উৎপাদন বা মেগাওয়াটে মাপা যায় না; বরং দেশ ও জাতির সাথে গড়ে ওঠা দীর্ঘমেয়াদী আস্থা এবং দায়িত্বশীল অগ্রযাত্রাই আমাদের প্রকৃত শক্তি।"',
      chairmansSign: 'পরিচালনা পর্ষদ, জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ'
    },
    newsSection: {
      badge: 'মিডিয়া ও তথ্যকেন্দ্র',
      title: 'অফিশিয়াল ঘোষণা ও প্রেস রিলিজ',
      readMore: 'সম্পূর্ণ প্রেস বিজ্ঞপ্তি পড়ুন'
    },
    contactSection: {
      badge: 'কেন্দ্রীয় সেক্রেটারিয়েট',
      title: 'কর্পোরেট হেডকোয়ার্টার ও প্রাতিষ্ঠানিক যোগাযোগ',
      description: 'বোর্ড যোগাযোগ, প্রাতিষ্ঠানিক বিনিয়োগকারী, যৌথ উদ্যোগ ও দরপত্র সংক্রান্ত তথ্যের জন্য কেন্দ্রীয় পোর্টাল।',
      hqAddressLabel: 'নিবন্ধিত কর্পোরেট সদর দপ্তর',
      hqAddress: 'জিএমএম কর্পোরেট টাওয়ার, লেভেল ১৪-১৬, কমার্শিয়াল অ্যাভিনিউ, গুলশান ইন্ডাস্ট্রিয়াল করিডোর, ঢাকা, বাংলাদেশ',
      phoneLabel: 'এক্সিকিউটিভ সেক্রেটারিয়েট পিএবিএক্স',
      phone: '+৮৮০ (২) ৮৮৭-৯৪০০ / ৮৮৭-৯৪০১',
      emailLabel: 'অফিশিয়াল যোগাযোগ ইমেইল',
      email: 'secretariat@gmmgroup.com.bd',
      formTitle: 'ইনস্টিটিউশনাল যোগাযোগ ফরম',
      nameLabel: 'আপনার পূর্ণ নাম ও পদবি',
      orgLabel: 'প্রতিষ্ঠান / সংস্থার নাম',
      concernLabel: 'নির্দিষ্ট সহযোগী প্রতিষ্ঠান (ঐচ্ছিক)',
      allConcernsOption: 'জিএমএম গ্রুপ (মূল প্যারেন্ট হোল্ডিং অফিস)',
      messageLabel: 'যোগাযোগের বিষয়বস্তু / প্রাতিষ্ঠানিক বার্তা',
      submitBtn: 'বার্তা প্রেরণ করুন',
      successMessage: 'আপনার বার্তাটি সফলভাবে সেন্ট্রাল ডকেটে সংরক্ষিত হয়েছে।'
    },
    footer: {
      holdingNotice: 'জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ একটি শীর্ষ মূল হোল্ডিং প্রতিষ্ঠান। প্রতিটি সহযোগী প্রতিষ্ঠান কোম্পানি আইন অনুযায়ী নিবন্ধিত ও কেন্দ্রীয় কর্পোরেট নীতিমালার অধীনে পরিচালিত।',
      quickLinks: 'গুরুত্বপূর্ণ লিঙ্ক',
      subsidiaryList: 'সিস্টার কনসার্ন ডিরেক্টরি',
      copyright: '© ১৯৮৮–২০২৬ জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ লিমিটেড। সর্বস্বত্ব সংরক্ষিত। বিধিবদ্ধ প্রাতিষ্ঠানিক নোটিশ।'
    }
  }
};
