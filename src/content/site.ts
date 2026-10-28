// TODO(content): Verify all operational placeholders, dates, and names with the group secretariat.

export type Language = 'en' | 'bn';

export interface Milestone {
  year: string;
  event: string;
}

export interface SisterConcern {
  id: string;
  name: string;
  sector: string;
  description: string;
  meta: string; // e.g. "Since 2004, Gazipur"
  url: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
}

export interface SiteContent {
  nav: {
    groupTitle: string;
    links: {
      group: string;
      concerns: string;
      howWeWork: string;
      leadership: string;
      contact: string;
    };
    menuButton: string;
    closeMenu: string;
    skipToContent: string;
    switchLangLabel: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    paragraph: string;
  };
  group: {
    statement: string;
    milestones: Milestone[];
  };
  concerns: {
    title: string;
    visitWebsite: string;
    items: SisterConcern[];
  };
  howWeWork: {
    title: string;
    statements: [string, string, string];
  };
  leadership: {
    title: string;
    chairmanMessage: string;
    chairmanName: string;
    chairmanTitle: string;
    directors: LeadershipMember[];
  };
  contact: {
    title: string;
    primaryEmail: string;
    businessEmail: string;
    careersEmail: string;
    mediaEmail: string;
    businessLabel: string;
    careersLabel: string;
    mediaLabel: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
  };
  footer: {
    copyright: string;
  };
}

export const siteContent: Record<Language, SiteContent> = {
  en: {
    nav: {
      groupTitle: 'Group of Industries',
      links: {
        group: 'The group',
        concerns: 'Our sister concerns',
        howWeWork: 'How we work',
        leadership: 'Leadership',
        contact: 'Contact',
      },
      menuButton: 'Menu',
      closeMenu: 'Close menu',
      skipToContent: 'Skip to main content',
      switchLangLabel: 'বাংলা',
    },
    hero: {
      headlineLine1: 'One group.',
      headlineLine2: 'Many industries.',
      paragraph:
        'GMM Group of Industries is the parent enterprise for six operating concerns across core production, infrastructure, and supply sectors. Headquartered in Dhaka, the group provides long-term capital allocation, governance, and operating discipline to each business.',
    },
    group: {
      statement:
        'Founded in 1988, GMM Group of Industries has developed into a multi-sector holding enterprise managing six operating companies across textiles, metallurgy, agriculture, packaging, energy, and logistics. Each company operates with dedicated management and technical leadership while drawing on group resources for capital allocation, compliance, and strategic planning.',
      milestones: [
        {
          year: '1988',
          event: 'Founding of the group with the incorporation of the initial manufacturing enterprise in Dhaka.',
        },
        {
          year: '1996',
          event: 'Expansion into heavy steel casting and structural metallurgy to serve domestic infrastructure.',
        },
        {
          year: '2004',
          event: 'Commissioning of commercial power infrastructure, substation EPC, and transformer assembly facilities.',
        },
        {
          year: '2011',
          event: 'Inauguration of commercial ocean bulk cargo shipping operations and maritime agency.',
        },
        {
          year: '2019',
          event: 'Consolidation of automated grain handling, agro-processing, and packaging conversion assets.',
        },
      ],
    },
    concerns: {
      title: 'Our sister concerns',
      visitWebsite: 'Visit website',
      items: [
        {
          id: 'textiles',
          name: 'GMM Textiles & Apparel Ltd.',
          sector: 'Textiles & Apparel',
          description:
            'Vertically integrated spinning, weaving, and garment fabrication serving international apparel buyers. The facility operates certified water-recycling and automated yarn-quality control systems.',
          meta: 'Since 1988, Narayanganj',
          url: 'https://textiles.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'steel',
          name: 'GMM Steel & Engineering Ltd.',
          sector: 'Steel & Engineering',
          description:
            'Electric arc furnace billet casting and automated hot rolling of high-strength structural rebars and fabricated structural steel. Supplies major national highway, bridge, and civil engineering works.',
          meta: 'Since 1996, Gazipur',
          url: 'https://steel.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'agro',
          name: 'GMM Agro & Foods Ltd.',
          sector: 'Agro & Foods',
          description:
            'Bulk grain processing, mechanized terminal storage silos, and edible vegetable oil refining. The company delivers domestic staple supply with strict food-grade laboratory verification.',
          meta: 'Since 2001, Mongla',
          url: 'https://agro.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'packaging',
          name: 'GMM Industrial Packaging Ltd.',
          sector: 'Packaging',
          description:
            'Manufacture of corrugated cartons, multi-wall paper sacks, and woven polymer sacks for heavy industry and export shipping. Facilities run inline flexographic printing and box conversion machinery.',
          meta: 'Since 2008, Mymensingh',
          url: 'https://packaging.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'energy',
          name: 'GMM Power & Energy Infrastructure Ltd.',
          sector: 'Energy',
          description:
            'Turnkey construction of high-voltage transmission substations, industrial power distribution transformers, and commercial captive power facilities. Authorized under national utility engineering standards.',
          meta: 'Since 2014, Narayanganj',
          url: 'https://energy.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'logistics',
          name: 'GMM Integrated Logistics & Terminals Ltd.',
          sector: 'Logistics',
          description:
            'Customs-bonded container yard management, multi-modal freight forwarding, and coastal bulk shipping. Operates heavy container reach-stackers, temperature-controlled cold rooms, and inland transport fleets.',
          meta: 'Since 2018, Chattogram',
          url: 'https://logistics.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
      ],
    },
    howWeWork: {
      title: 'How we work',
      statements: [
        'We invest in core physical industries with multi-decade horizons, prioritizing operational durability over short-term cyclical returns.',
        'We practice direct, plain dealing with partners, employees, suppliers, and regulatory authorities with zero ambiguity in our agreements.',
        'We maintain strict responsibility to the communities where our factories stand, ensuring worker safety and rigorous environmental containment.',
      ],
    },
    leadership: {
      title: 'Leadership',
      chairmanMessage:
        'A holding group endures when its operating companies remain disciplined in their specific trades while sharing a common standard of financial prudence and civic obligation. Our responsibility at the parent level is to ensure each sister concern has the capital, governance, and long-term clarity needed to build permanent national value.',
      chairmanName: 'M. A. Rahman', // TODO(content): Replace with confirmed Chairman name
      chairmanTitle: 'Chairman & Founder, GMM Group of Industries',
      directors: [
        {
          name: 'Tariq A. Rahman', // TODO(content): Replace with confirmed Director name
          role: 'Managing director, GMM Group of Industries',
        },
        {
          name: 'Shahidul Islam, FCA', // TODO(content): Replace with confirmed CFO name
          role: 'Group director of finance & treasury',
        },
        {
          name: 'Engr. Mahbubul Alam', // TODO(content): Replace with confirmed Chief Operations name
          role: 'Group director of industrial operations',
        },
        {
          name: 'Nazmul H. Chowdhury', // TODO(content): Replace with confirmed Legal Counsel name
          role: 'Head of statutory compliance & corporate secretariat',
        },
      ],
    },
    contact: {
      title: 'Contact',
      primaryEmail: 'info@gmmgroup.com.bd', // TODO(content): Replace with primary contact email
      businessEmail: 'commercial@gmmgroup.com.bd', // TODO(content): Replace with commercial email
      careersEmail: 'careers@gmmgroup.com.bd', // TODO(content): Replace with careers email
      mediaEmail: 'secretariat@gmmgroup.com.bd', // TODO(content): Replace with secretariat email
      businessLabel: 'Business inquiries',
      careersLabel: 'Careers',
      mediaLabel: 'Secretariat & press',
      addressLabel: 'Head office',
      address: 'GMM Corporate Tower, 42 Kemal Ataturk Avenue, Gulshan-2, Dhaka 1212, Bangladesh', // TODO(content): Replace with confirmed head office address
      phoneLabel: 'Telephone',
      phone: '+880 2 988 5601', // TODO(content): Replace with confirmed phone number
    },
    footer: {
      copyright: '© 1988–2026 GMM Group of Industries Ltd. Registered in Dhaka, Bangladesh.',
    },
  },
  bn: {
    nav: {
      groupTitle: 'গ্রুপ অব ইন্ডাস্ট্রিজ',
      links: {
        group: 'পরিচিতি',
        concerns: 'সহযোগী প্রতিষ্ঠান',
        howWeWork: 'কার্যপদ্ধতি',
        leadership: 'নেতৃত্ব',
        contact: 'যোগাযোগ',
      },
      menuButton: 'মেনু',
      closeMenu: 'মেনু বন্ধ করুন',
      skipToContent: 'সরাসরি মূল অংশে যান',
      switchLangLabel: 'English',
    },
    hero: {
      headlineLine1: 'একটি গ্রুপ।',
      headlineLine2: 'বহুমাত্রিক শিল্প।',
      paragraph:
        'জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ উৎপাদন, অবকাঠামো ও সরবরাহ খাতের ছয়টি সহযোগী প্রতিষ্ঠানের মূল পরিচালনাকারী প্রতিষ্ঠান। ঢাকায় প্রধান কার্যালয় নিয়ে গ্রুপটি প্রতিটি ব্যবসাকে দীর্ঘমেয়াদি মূলধন, সুশাসন ও কার্যনির্বাহী দিকনির্দেশনা প্রদান করে।',
    },
    group: {
      statement:
        '১৯৮৮ সালে প্রতিষ্ঠিত জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ বস্ত্র, ধাতুশিল্প, কৃষি প্রক্রিয়াজাতকরণ, প্যাকেজিং, বিদ্যুৎ ও লজিস্টিকস খাতে বিস্তৃত একটি বহু-শিল্প হোল্ডিং প্রতিষ্ঠান। প্রতিটি প্রতিষ্ঠান নিজস্ব দক্ষ প্রকৌশলী ও কারিগরি ব্যবস্থাপনায় স্বাধীনভাবে পরিচালিত হয় এবং কেন্দ্রীয় গ্রুপ কাঠামোর মাধ্যমে দীর্ঘমেয়াদি মূলধন ও প্রাতিষ্ঠানিক সহায়তা গ্রহণ করে।',
      milestones: [
        {
          year: '১৯৮৮',
          event: 'ঢাকায় প্রাথমিক শিল্প উৎপাদন কারখানা স্থাপনের মধ্য দিয়ে গ্রুপের যাত্রা শুরু।',
        },
        {
          year: '১৯৯৬',
          event: 'জাতীয় অবকাঠামো নির্মাণে সহায়তার উদ্দেশ্যে স্ট্রাকচারাল স্টিল ও মেটালার্জি শিল্পে সম্প্রসারণ।',
        },
        {
          year: '২০০৪',
          event: 'বিদ্যুৎ বিতরণ সাবস্টেশন ইপিসি এবং ট্রান্সফরমার সংযোজন কারখানার বাণিজ্যিক কার্যক্রম শুরু।',
        },
        {
          year: '২০১১',
          event: 'আন্তর্জাতিক সমুদ্রগামী ড্রাই-বাল্ক কার্গো পরিবহন এবং বন্দর সেবা ব্যবস্থার সূচনা।',
        },
        {
          year: '২০১৯',
          event: 'স্বয়ংক্রিয় খাদ্যশস্য সাইলো, কৃষিজাত তেল প্রক্রিয়াজাতকরণ ও প্যাকেজিং রূপান্তর ইউনিটের একত্রীকরণ।',
        },
      ],
    },
    concerns: {
      title: 'আমাদের সহযোগী প্রতিষ্ঠানসমূহ',
      visitWebsite: 'ওয়েবসাইট দেখুন',
      items: [
        {
          id: 'textiles',
          name: 'জিএমএম টেক্সটাইলস অ্যান্ড অ্যাপারেলস লিমিটেড',
          sector: 'বস্ত্র ও পোশাক শিল্প',
          description:
            'আন্তর্জাতিক বাজারের জন্য সুতা কাটা, কাপড় বোনা ও তৈরি পোশাক প্রস্তুতির পূর্ণাঙ্গ ব্যবস্থা। কারখানায় আন্তর্জাতিক মানের তরল বর্জ্য শোধনাগার এবং সুতার মান নিয়ন্ত্রণ ব্যবস্থা কার্যকর রয়েছে।',
          meta: '১৯৮৮ থেকে, নারায়ণগঞ্জ',
          url: 'https://textiles.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'steel',
          name: 'জিএমএম স্টিল অ্যান্ড ইঞ্জিনিয়ারিং লিমিটেড',
          sector: 'স্টিল ও মেটালার্জি',
          description:
            'ইলেকট্রিক আর্ক ফার্নেস বিলেট কাস্টিং এবং উচ্চ শক্তির স্ট্রাকচারাল রিবার ও স্টিল কাঠামোর স্বয়ংক্রিয় রোলিং মিল। জাতীয় সেতু, মহাসড়ক ও বৃহৎ অবকাঠামো প্রকল্পে নির্মাণ সামগ্রী সরবরাহ করে থাকে।',
          meta: '১৯৯৬ থেকে, গাজীপুর',
          url: 'https://steel.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'agro',
          name: 'জিএমএম এগ্রো অ্যান্ড ফুডস লিমিটেড',
          sector: 'কৃষি ও খাদ্য প্রক্রিয়াজাতকরণ',
          description:
            'খাদ্যশস্য প্রক্রিয়াজাতকরণ, স্বয়ংক্রিয় টার্মিনাল সাইলো এবং ভোজ্যতেল পরিশোধন। প্রতিষ্ঠানটি নিজস্ব মান নিয়ন্ত্রণ গবেষণাগারে পরীক্ষার মাধ্যমে বিশুদ্ধ খাদ্যপণ্য সরবরাহ নিশ্চিত করে।',
          meta: '২০০১ থেকে, মোংলা',
          url: 'https://agro.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'packaging',
          name: 'জিএমএম ইন্ডাস্ট্রিয়াল প্যাকেজিং লিমিটেড',
          sector: 'শিল্প প্যাকেজিং',
          description:
            'ভারী শিল্প ও রপ্তানি পণ্য পরিবহনের উপযোগী করুগেটেড কার্টন, পেপার বস্তা ও পলিমার ব্যাগের বাণিজ্যিক উৎপাদন। কারখানায় ফ্লেক্সোগ্রাফিক প্রিন্টিং ও স্বয়ংক্রিয় কাটিং প্রযুক্তি রয়েছে।',
          meta: '২০০৮ থেকে, ময়মনসিংহ',
          url: 'https://packaging.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'energy',
          name: 'জিএমএম পাওয়ার অ্যান্ড এনার্জি ইনফ্রাস্ট্রাকচার লিমিটেড',
          sector: 'বিদ্যুৎ ও অবকাঠামো',
          description:
            'উচ্চ ভোল্টেজ সাবস্টেশন নির্মাণ, শিল্প ট্রান্সফরমার তৈরি এবং বাণিজ্যিক বিদ্যুৎ সরবরাহ অবকাঠামো স্থাপন। জাতীয় বিদ্যুৎ খাতের স্বীকৃত প্রকৌশল মানদণ্ডে পরিচালিত।',
          meta: '২০১৪ থেকে, নারায়ণগঞ্জ',
          url: 'https://energy.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
        {
          id: 'logistics',
          name: 'জিএমএম ইন্টিগ্রেটেড লজিস্টিকস অ্যান্ড টার্মিনালস লিমিটেড',
          sector: 'লজিস্টিকস ও টার্মিনাল',
          description:
            'কাস্টমস বন্ডেড কনটেইনার ইয়ার্ড, মাল্টি-মোডাল পণ্য পরিবহন এবং অভ্যন্তরীণ নৌপরিবহন সেবা। ভারী কনটেইনার হ্যান্ডলিং যন্ত্রপাতি, কোল্ড রুম ও নিজস্ব সড়ক পরিবহন বহর রয়েছে।',
          meta: '২০১৮ থেকে, চট্টগ্রাম',
          url: 'https://logistics.gmmgroup.com.bd', // TODO(content): Replace with official subsidiary URL
        },
      ],
    },
    howWeWork: {
      title: 'আমাদের কার্যপদ্ধতি',
      statements: [
        'আমরা দীর্ঘমেয়াদি দূরদৃষ্টি নিয়ে দেশের মূল উৎপাদন খাতে মূলধন বিনিয়োগ করি, যেখানে সাময়িক লাভের চেয়ে শিল্প টেকসই হওয়াকে প্রাধান্য দেওয়া হয়।',
        'আমরা অংশীদার, কর্মী, সরবরাহকারী ও সংশ্লিষ্ট কর্তৃপক্ষের সাথে সরাসরি, স্পষ্ট ও সম্পূর্ণ স্বচ্ছতার সাথে কাজ পরিচালনা করি।',
        'যেসব অঞ্চলে আমাদের কারখানা প্রতিষ্ঠিত, সেখানকার মানুষের নিরাপত্তা এবং পরিবেশ সুরক্ষায় আমরা শতভাগ দায়বদ্ধ থাকি।',
      ],
    },
    leadership: {
      title: 'নেতৃত্ব',
      chairmanMessage:
        'একটি অভিভাবক প্রতিষ্ঠান তখনই স্থায়ী রূপ পায় যখন এর অধীনস্থ প্রতিটি ব্যবসা নিজ ক্ষেত্রে দক্ষ ও দায়িত্বশীল থাকে এবং সম্মিলিতভাবে আর্থিক শৃঙ্খলা রক্ষা করে। মূল গ্রুপের দায়িত্ব হলো প্রতিটি প্রতিষ্ঠান যাতে দেশের দীর্ঘমেয়াদি অর্থনীতিতে অবদান রাখতে পারে তার জন্য প্রয়োজনীয় পুঁজি ও প্রাতিষ্ঠানিক দিকনির্দেশনা নিশ্চিত করা।',
      chairmanName: 'এম. এ. রহমান', // TODO(content): Replace with confirmed Chairman name
      chairmanTitle: 'চেয়ারম্যান ও প্রতিষ্ঠাতা, জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ',
      directors: [
        {
          name: 'তারিক এ. রহমান', // TODO(content): Replace with confirmed Director name
          role: 'ব্যবস্থাপনা পরিচালক, জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ',
        },
        {
          name: 'শাহিদুল ইসলাম, এফসিএ', // TODO(content): Replace with confirmed CFO name
          role: 'গ্রুপ পরিচালক, অর্থ ও হিসাব',
        },
        {
          name: 'প্রকৌ. মাহবুবুল আলম', // TODO(content): Replace with confirmed Chief Operations name
          role: 'গ্রুপ পরিচালক, শিল্প পরিচালনা',
        },
        {
          name: 'নাজমুল এইচ. চৌধুরী', // TODO(content): Replace with confirmed Legal Counsel name
          role: 'প্রধান, বিধিবদ্ধ নিরীক্ষা ও করপোরেট সচিবালয়',
        },
      ],
    },
    contact: {
      title: 'যোগাযোগ',
      primaryEmail: 'info@gmmgroup.com.bd', // TODO(content): Replace with primary contact email
      businessEmail: 'commercial@gmmgroup.com.bd', // TODO(content): Replace with commercial email
      careersEmail: 'careers@gmmgroup.com.bd', // TODO(content): Replace with careers email
      mediaEmail: 'secretariat@gmmgroup.com.bd', // TODO(content): Replace with secretariat email
      businessLabel: 'ব্যবসায়িক অনুসন্ধান',
      careersLabel: 'ক্যারিয়ার',
      mediaLabel: 'সচিবালয় ও গণমাধ্যম',
      addressLabel: 'প্রধান কার্যালয়',
      address: 'জিএমএম করপোরেট টাওয়ার, ৪২ কামাল আতাতুর্ক এভিনিউ, গুলশান-২, ঢাকা ১২১২, বাংলাদেশ', // TODO(content): Replace with confirmed head office address
      phoneLabel: 'টেলিফোন',
      phone: '+৮৮০ ২ ৯৮৮ ৫৬০১', // TODO(content): Replace with confirmed phone number
    },
    footer: {
      copyright: '© ১৯৮৮–২০২৬ জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ লিমিটেড। ঢাকায় নিবন্ধিত, বাংলাদেশ।',
    },
  },
};

