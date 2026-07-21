export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  tag: string;
  link: string;
}

export interface DirectoryListing {
  id: string;
  name: string;
  slug: string;
  category: 'Real Estate & Developers' | 'Life Sciences / Biotech Employers' | 'Education' | 'Healthcare' | 'Hospitality & Food' | 'Retail & Services';
  villageArea: 'ORR Exit 7' | 'Lake Circle' | 'Genome Valley Zone' | 'Majeedpur' | 'Ponnal';
  rating: number;
  reviewsCount: number;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  googleMapsUrl: string;
  hours: string;
  description: string;
  isFeatured?: boolean;
  isSponsored?: boolean;
  verifiedStatus: 'Verified Business' | 'Verified Institutional' | 'Community Entry';
  badgeText?: string;
  lat: number;
  lng: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Real Estate' | 'Civic' | 'Education' | 'Industry & Economy';
  targetKeyword: string;
  dek: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  toc: { id: string; title: string }[];
  contentHtml: string;
  keyTakeaways: string[];
  dandoraLink?: {
    text: string;
    url: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Civic' | 'Traffic' | 'Environment' | 'Economy';
  summary: string;
  submittedBy: string;
  date: string;
  upvotes: number;
  verified: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'Cultural' | 'Environment' | 'Industry';
  description: string;
  organizer: string;
}

export const STATS = {
  businessesListed: 48,
  villagesCovered: 12,
  monthlyResidents: '18,500+',
  orrExit: 'Exit 7'
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'shamirpet-lake',
    title: 'Shamirpet Lake (Pelle Cheruvu)',
    subtitle: 'Nizam-era Sunset Haven',
    description: 'A Nizam-era artificial lake dating to the 19th century, popularised by the Sixth Nizam, Mehboob Ali Pasha, as the finest spot around Hyderabad to watch the sunset.',
    image: '/images/shamirpet_lake.png',
    category: 'Heritage & Nature',
    tag: '19th Century Reservoir',
    link: '/journal/shamirpet-lake-and-jawahar-deer-park-visitor-guide'
  },
  {
    id: 'jawahar-deer-park',
    title: 'Jawahar Deer Park',
    subtitle: '54-acre Semi-Natural Reserve',
    description: 'Inaugurated in 1980 by Chief Minister Marri Chenna Reddy. Home to blackbuck, spotted chital, peacocks, and migratory birds — minutes from ORR Exit 7.',
    image: '/images/deer_park.png',
    category: 'Eco-Tourism',
    tag: 'Wildlife Habitat',
    link: '/journal/shamirpet-lake-and-jawahar-deer-park-visitor-guide'
  },
  {
    id: 'genome-valley',
    title: 'Genome Valley Cluster',
    subtitle: 'Telangana Bio-Pharma Engine',
    description: 'Hyderabad flagship life-sciences cluster sitting right at Shamirpet doorstep, pulling in pharma R&D campuses and high-skilled workforce demand.',
    image: '/images/genome_valley.png',
    category: 'Biotech & Economy',
    tag: '200+ Biotech Companies',
    link: '/journal/why-shamirpet-is-becoming-hyderabads-bio-pharma-and-lifestyle-corridor'
  },
  {
    id: 'orr-exit-7',
    title: 'ORR Exit 7 Corridor',
    subtitle: 'Signal-Free Airport & IT Highway',
    description: 'Direct high-speed connection linking Shamirpet to RGIA Airport and Hitec City/Gachibowli, turning the area into a premier residential address.',
    image: '/images/orr_exit7.png',
    category: 'Infrastructure',
    tag: 'ORR Exit 7',
    link: '/journal/why-shamirpet-is-becoming-hyderabads-bio-pharma-and-lifestyle-corridor'
  }
];

export const DIRECTORY_LISTINGS: DirectoryListing[] = [
  {
    id: 'd-1',
    name: 'Lakeview Realty Group — ORR Exit 7 Plots',
    slug: 'lakeview-realty-group-shamirpet',
    category: 'Real Estate & Developers',
    villageArea: 'ORR Exit 7',
    rating: 4.8,
    reviewsCount: 34,
    address: 'Plot 14, Main ORR Exit 7 Service Road, Shamirpet',
    phone: '+91 98490 12345',
    email: 'sales@lakeviewrealty.in',
    website: 'https://lakeviewrealty.in',
    googleMapsUrl: 'https://maps.google.com/?q=Shamirpet+ORR+Exit+7',
    hours: ' Mon - Sat: 9:00 AM - 7:00 PM',
    description: 'HMDA-approved gated plot layout situated 3 minutes from ORR Exit 7. Underground utilities, wide blacktop roads, and 24/7 security.',
    isFeatured: true,
    isSponsored: true,
    badgeText: 'Sponsored Plot Layout',
    verifiedStatus: 'Verified Business',
    lat: 17.604,
    lng: 78.568
  },
  {
    id: 'd-2',
    name: 'Genome Valley Bio Campus',
    slug: 'genome-valley-bio-campus-employer',
    category: 'Life Sciences / Biotech Employers',
    villageArea: 'Genome Valley Zone',
    rating: 4.9,
    reviewsCount: 120,
    address: 'Genome Valley Biotech Park, Phase I, Shamirpet, 500078',
    phone: '+91 40 2345 6789',
    email: 'info@genomevalley.in',
    website: 'https://genomevalley.telangana.gov.in',
    googleMapsUrl: 'https://maps.google.com/?q=Genome+Valley+Shamirpet',
    hours: 'Mon - Fri: 8:30 AM - 6:00 PM',
    description: 'Anchor life-sciences and biopharmaceutical innovation hub hosting global R&D centers, vaccine manufacturers, and lab facilities.',
    isFeatured: true,
    badgeText: 'Anchor Employer',
    verifiedStatus: 'Verified Institutional',
    lat: 17.618,
    lng: 78.582
  },
  {
    id: 'd-3',
    name: 'NALSAR University of Law',
    slug: 'nalsar-university-of-law-shamirpet',
    category: 'Education',
    villageArea: 'Lake Circle',
    rating: 4.9,
    reviewsCount: 88,
    address: 'Justice City, Shamirpet, Medchal District, Hyderabad, Telangana 500101',
    phone: '+91 40 2349 8105',
    email: 'admissions@nalsar.ac.in',
    website: 'https://nalsar.ac.in',
    googleMapsUrl: 'https://maps.google.com/?q=NALSAR+University+of+Law',
    hours: 'Mon - Sat: 9:00 AM - 5:00 PM',
    description: 'Premier national law university in India located on a scenic 55-acre lakefront campus near Shamirpet Lake.',
    isFeatured: true,
    badgeText: 'National University',
    verifiedStatus: 'Verified Institutional',
    lat: 17.609,
    lng: 78.563
  },
  {
    id: 'd-4',
    name: 'BITS Pilani Hyderabad Campus',
    slug: 'bits-pilani-hyderabad-campus',
    category: 'Education',
    villageArea: 'ORR Exit 7',
    rating: 4.9,
    reviewsCount: 156,
    address: 'Jawahar Nagar, Kapra Mandal, Shamirpet Road, Hyderabad 500078',
    phone: '+91 40 6630 3999',
    website: 'https://bits-pilani.ac.in/hyderabad',
    googleMapsUrl: 'https://maps.google.com/?q=BITS+Pilani+Hyderabad',
    hours: 'Mon - Sat: 8:00 AM - 6:00 PM',
    description: 'Sprawling 200-acre institute of technology and science, anchoring Shamirpet academic reputation and innovation talent.',
    isFeatured: true,
    badgeText: 'Tier-1 Engineering Institute',
    verifiedStatus: 'Verified Institutional',
    lat: 17.545,
    lng: 78.572
  },
  {
    id: 'd-5',
    name: 'Shamirpet Family & Occupational Clinic',
    slug: 'shamirpet-family-clinic',
    category: 'Healthcare',
    villageArea: 'Majeedpur',
    rating: 4.6,
    reviewsCount: 29,
    address: 'Main Road, near Katta Maisamma Temple, Shamirpet 500078',
    phone: '+91 94400 56789',
    googleMapsUrl: 'https://maps.google.com/?q=Shamirpet+Main+Road',
    hours: 'Open 24/7 (Emergency & Pharmacy)',
    description: 'Comprehensive outpatient clinic providing general medicine, pediatrics, diagnostic lab tests, and industrial occupational health checks.',
    verifiedStatus: 'Verified Business',
    lat: 17.598,
    lng: 78.561
  },
  {
    id: 'd-6',
    name: 'Pelle Lakeview Resort & Pavilion',
    slug: 'pelle-lakeview-resort-shamirpet',
    category: 'Hospitality & Food',
    villageArea: 'Lake Circle',
    rating: 4.7,
    reviewsCount: 64,
    address: 'Shamirpet Lake Shore Road, Medchal District, 500078',
    phone: '+91 97000 88990',
    website: 'https://pellelakeview.in',
    googleMapsUrl: 'https://maps.google.com/?q=Shamirpet+Lake+Resort',
    hours: 'Daily: 11:00 AM - 10:30 PM',
    description: 'Authentic Telangana cuisine, garden seating, lakeside sunset views, and outdoor event spaces overlooking Pelle Cheruvu.',
    isFeatured: true,
    badgeText: 'Sunset Dining Spot',
    verifiedStatus: 'Verified Business',
    lat: 17.601,
    lng: 78.566
  },
  {
    id: 'd-7',
    name: 'Institute of Public Enterprise (IPE)',
    slug: 'institute-of-public-enterprise-shamirpet',
    category: 'Education',
    villageArea: 'ORR Exit 7',
    rating: 4.6,
    reviewsCount: 42,
    address: 'Survey No. 1266, Shamirpet, Medchal-Malkajgiri, Telangana 500101',
    phone: '+91 40 2349 0900',
    website: 'https://ipeindia.org',
    googleMapsUrl: 'https://maps.google.com/?q=IPE+Shamirpet',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
    description: 'Autonomous management institute offering AICTE approved PGDM programs with state-of-the-art residential facilities.',
    verifiedStatus: 'Verified Institutional',
    lat: 17.592,
    lng: 78.574
  },
  {
    id: 'd-8',
    name: 'Syngene International R&D Center',
    slug: 'syngene-international-genome-valley',
    category: 'Life Sciences / Biotech Employers',
    villageArea: 'Genome Valley Zone',
    rating: 4.8,
    reviewsCount: 52,
    address: 'Phase III, Genome Valley, Shamirpet 500078',
    phone: '+91 40 4455 6677',
    website: 'https://syngeneintl.com',
    googleMapsUrl: 'https://maps.google.com/?q=Syngene+Genome+Valley',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    description: 'Leading contract research and manufacturing organization (CRMO) supporting global pharmaceutical innovation.',
    verifiedStatus: 'Verified Business',
    lat: 17.622,
    lng: 78.589
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j-1',
    title: "Why Shamirpet is becoming Hyderabad's bio-pharma-and-lifestyle corridor",
    slug: 'why-shamirpet-is-becoming-hyderabads-bio-pharma-and-lifestyle-corridor',
    category: 'Real Estate',
    targetKeyword: 'Shamirpet real estate',
    dek: 'Genome Valley is turning a lakeside town on ORR Exit 7 into one of the north corridor\'s most closely watched addresses.',
    readTime: '6 min read',
    publishDate: 'July 18, 2026',
    author: {
      name: 'Venkatesh Rao',
      role: 'Senior Real Estate & Urban Growth Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: '/images/genome_valley.png',
    toc: [
      { id: 'genome-valley-engine', title: 'Genome Valley as the Economic Anchor' },
      { id: 'pricing-and-market-dynamics', title: '2026 Land Pricing & Inventory Shift' },
      { id: 'orr-counter-magnet', title: 'The ORR Exit 7 Counter-Magnet Effect' },
      { id: 'dandora-growth-partner', title: 'Developer Strategy & Investment Outlook' }
    ],
    keyTakeaways: [
      'Land pricing in Shamirpet sits at ₹35,000–45,000/sq yd as of mid-2026, offering significant value compared to Western ORR segments.',
      'Inventory is transitioning from standalone gated plots to integrated mid-market apartments for the 20,000+ Genome Valley workforce.',
      'ORR Exit 7 enables a 35-minute signal-free commute to Gachibowli and Hitec City without city gridlock.',
      'Real estate developers partnering with growth agencies like Dandora are positioning Shamirpet as Hyderabad premier bio-pharma and lifestyle hub.'
    ],
    dandoraLink: {
      text: 'Explore Developer Marketing & Execution via Dandora Real Estate Advisory',
      url: 'https://dandora.online/sectors/real-estate'
    },
    contentHtml: `
      <p class="lead">For decades, Shamirpet was known primarily to Hyderabadis as a weekend getaway — home to a historic Nizam-era lake, peaceful deer park, and law campus. Today, that narrative has fundamentally shifted. Fueled by the exponential expansion of <strong>Genome Valley</strong> and seamless signal-free transit via <strong>Outer Ring Road (ORR) Exit 7</strong>, Shamirpet is emerging as Hyderabad's premier <em>bio-pharma and lifestyle corridor</em>.</p>
      
      <h2 id="genome-valley-engine">Genome Valley as the Primary Economic Engine</h2>
      <p>Unlike speculative suburban expansions driven purely by land banking, Shamirpet's growth is rooted in concrete employment fundamentals. Genome Valley, India's pioneer organized life-sciences cluster, hosts over 200 biopharmaceutical firms, contract research organizations (CROs), and vaccine manufacturing powerhouses including Bharat Biotech, Biological E, and Syngene International.</p>
      <p>This industrial density has created a resilient, highly skilled workforce of scientists, researchers, executive directors, and lab technicians. These professionals seek modern residential addresses within a 10-to-15 minute radius of their campuses, creating sustained organic demand for housing.</p>

      <h2 id="pricing-and-market-dynamics">2026 Land Pricing & Inventory Shift</h2>
      <p>As of mid-2026, baseline residential land pricing in HMDA-approved layouts near ORR Exit 7 ranges between <strong>₹35,000 and ₹45,000 per square yard</strong>. In comparison to Western ORR nodes like Kollur or Tellapur (where land prices exceed ₹75,000/sq yd), Shamirpet offers an attractive entry point with strong capital appreciation upside.</p>
      <div class="bg-card p-4 rounded-lg border border-border my-6">
        <h4 class="font-bold mb-2 text-teal-600 dark:text-teal-400">Market Inventory Snapshot (2026)</h4>
        <ul class="space-y-2 text-sm text-secondary">
          <li>• <strong>Gated Plot Layouts:</strong> ₹35,000 – ₹45,000 / sq yd</li>
          <li>• <strong>Independent Luxury Villas:</strong> ₹2.2 Cr – ₹4.5 Cr</li>
          <li>• <strong>Mid-Rise Apartments (2 & 3 BHK):</strong> ₹4,800 – ₹5,800 / sq ft</li>
          <li>• <strong>Rental Yield:</strong> 4.2% – 4.8% (driven by corporate bio-tech leases)</li>
        </ul>
      </div>

      <h2 id="orr-counter-magnet">The ORR Exit 7 Counter-Magnet Effect</h2>
      <p>Accessibility is the spine of Shamirpet's rebranding. Sitting directly at Exit 7 of the 158 km Outer Ring Road, residents enjoy a signal-free commute to Rajiv Gandhi International Airport (45 mins) and the Hitec City / Gachibowli financial district (35 mins).</p>
      <p>This connectivity creates a powerful "counter-magnet" pull: families get twice the physical space, cleaner air near the lake and forest reserves, and top-tier educational institutions like NALSAR and BITS Pilani without sacrificing access to commercial city centers.</p>

      <h2 id="dandora-growth-partner">Developer Strategy & Investment Outlook</h2>
      <p>Forward-looking real estate developers are leveraging structured marketing and growth execution to capture buyer intent. Agencies such as <a href="https://dandora.online/sectors/real-estate" target="_blank" rel="noopener noreferrer" class="font-semibold text-teal-600 dark:text-teal-400 underline decoration-teal-500 underline-offset-4">Dandora Real Estate Advisory</a> are actively driving digital campaigns and lead funnel infrastructure for major developments along the ORR Exit 7 axis.</p>
      <p>As Phase II and Phase III of Genome Valley continue to onboard global multi-nationals, land values around Shamirpet Lake and Majeedpur are projected to maintain steady compound growth through 2030.</p>
    `
  },
  {
    id: 'j-2',
    title: 'Shamirpet Lake and Jawahar Deer Park: conservation status and a visitor\'s guide',
    slug: 'shamirpet-lake-and-jawahar-deer-park-visitor-guide',
    category: 'Civic',
    targetKeyword: 'Shamirpet Lake',
    dek: 'A Nizam-era lake, a 54-acre deer park, and a folk-deity shrine — what\'s worth protecting, and what\'s worth visiting.',
    readTime: '5 min read',
    publishDate: 'July 14, 2026',
    author: {
      name: 'Ananya Sharma',
      role: 'Civic & Environmental Correspondent',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: '/images/shamirpet_lake.png',
    toc: [
      { id: 'lake-heritage', title: 'History of Pelle Cheruvu (Shamirpet Lake)' },
      { id: 'deer-park-ecology', title: 'Jawahar Deer Park Conservation' },
      { id: 'katta-maisamma', title: 'Katta Maisamma Folk Shrine' },
      { id: 'visitor-info', title: 'Practical Visitor Guide & Timings' }
    ],
    keyTakeaways: [
      'Shamirpet Lake (Pelle Cheruvu) was engineered in the 19th century under the Nizam rule as an artificial reservoir and royal sunset retreat.',
      'Jawahar Deer Park spans 54 acres of semi-natural dry deciduous forest housing blackbuck, spotted deer, and over 60 bird species.',
      'Recent lake rejuvenation efforts focus on protecting catchment areas from urban runoff while preserving public promenade spaces.',
      'Best visitor hours are early morning (6:00 AM - 9:00 AM) for bird watching and late afternoon (4:30 PM - 6:30 PM) for sunset views.'
    ],
    contentHtml: `
      <p class="lead">Long before Shamirpet was framed by high-speed expressways and biopharmaceutical campuses, it was defined by its water and wildlife. <strong>Shamirpet Lake</strong> (historically known as <em>Pelle Cheruvu</em>) and the adjacent <strong>Jawahar Deer Park</strong> form an ecological oasis just 24 km north of Secunderabad.</p>

      <h2 id="lake-heritage">History of Pelle Cheruvu (Shamirpet Lake)</h2>
      <p>Built in the 19th century during the Asaf Jahi Nizam era, Shamirpet Lake was commissioned to harvest rain runoff from northern hills. It quickly became a favored retreat of the Sixth Nizam, Mir Mahboob Ali Khan, who frequented the lake pavilion to watch the setting sun over the calm waters.</p>

      <h2 id="deer-park-ecology">Jawahar Deer Park Conservation</h2>
      <p>In 1975, a 54-acre stretch of natural forest land on the southern shore was transferred to the Forest Department and formally inaugurated in 1980 by Chief Minister Marri Chenna Reddy, dedicated in memory of Jawaharlal Nehru.</p>
      <p>The park is a crucial sanctuary for the Endangered <em>Blackbuck (Antilope cervicapra)</em> and <em>Spotted Deer (Chital)</em>, along with free-roaming peacocks and seasonal migratory birds such as flamingos and pelicans during winter months.</p>

      <h2 id="katta-maisamma">Katta Maisamma Folk Shrine</h2>
      <p>Perched on the lake bund embankment is the Katta Maisamma Temple, a cherished folk deity shrine where local farmers and commuters offer prayers for water abundance and safe transit across the Telangana countryside.</p>

      <h2 id="visitor-info">Practical Visitor Guide & Timings</h2>
      <div class="bg-card p-4 rounded-lg border border-border my-6">
        <h4 class="font-bold mb-2 text-teal-600 dark:text-teal-400">Visitor Quick Guide</h4>
        <ul class="space-y-1 text-sm text-secondary">
          <li>• <strong>Deer Park Timings:</strong> 9:00 AM – 5:00 PM (Closed Mondays)</li>
          <li>• <strong>Entry Fee:</strong> ₹20 per Adult, ₹10 per Child</li>
          <li>• <strong>Best Sunset Vantage:</strong> Lake Bund Promenade near Exit 7 Link Road</li>
          <li>• <strong>Nearest ORR Access:</strong> Exit 7 (2 mins drive)</li>
        </ul>
      </div>
    `
  },
  {
    id: 'j-3',
    title: 'Guide: universities and institutes near Shamirpet',
    slug: 'guide-universities-and-institutes-near-shamirpet',
    category: 'Education',
    targetKeyword: 'schools near Shamirpet',
    dek: 'NALSAR, IPE, BITS Pilani — every reputed institution near the lake, mapped and compared.',
    readTime: '6 min read',
    publishDate: 'July 10, 2026',
    author: {
      name: 'Dr. K. Srinivas',
      role: 'Higher Education Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featuredImage: '/images/orr_exit7.png',
    toc: [
      { id: 'academic-hub', title: 'Shamirpet as an Education Capital' },
      { id: 'nalsar-law', title: 'NALSAR University of Law' },
      { id: 'bits-hyderabad', title: 'BITS Pilani Hyderabad Campus' },
      { id: 'ipe-institute', title: 'Institute of Public Enterprise (IPE)' },
      { id: 'comparison-matrix', title: 'Institutional Comparison Matrix' }
    ],
    keyTakeaways: [
      'Shamirpet hosts three premier higher-education institutes: NALSAR (Law), BITS Pilani (Engineering/Science), and IPE (Management).',
      'The student and faculty population of over 12,000 creates vibrant local retail, dining, and rental housing demand.',
      'Proximity to ORR Exit 7 provides seamless access for faculty commuters traveling from central Hyderabad.'
    ],
    contentHtml: `
      <p class="lead">Beyond its bio-pharma credentials, Shamirpet holds a distinguished status as one of Telangana's major academic hubs. Nestled around the lake and forest land are tier-one institutions of national repute.</p>

      <h2 id="academic-hub">Shamirpet as an Education Capital</h2>
      <p>The concentration of higher education campuses around Shamirpet Lake has attracted a vibrant demographic of over 12,000 undergraduate, postgraduate, and doctoral scholars along with senior academic faculty.</p>

      <h2 id="nalsar-law">1. NALSAR University of Law</h2>
      <p>Established in 1998, NALSAR is consistently ranked among the top 2 law universities in India. Its 55-acre green campus on the lake shore provides an ideal environment for legal research and governance studies.</p>

      <h2 id="bits-hyderabad">2. BITS Pilani Hyderabad Campus</h2>
      <p>Spanning 200 acres at Jawahar Nagar near Shamirpet Road, BITS Pilani Hyderabad Campus is a premier institute of technology offering top-tier B.E., M.E., and Ph.D. programs with state-of-the-art incubation facilities.</p>

      <h2 id="ipe-institute">3. Institute of Public Enterprise (IPE)</h2>
      <p>Situated on a modern 21-acre campus, IPE is a leading management research institute specializing in public sector enterprise management, finance, and marketing.</p>

      <h2 id="comparison-matrix">Institutional Comparison Matrix</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left text-sm border-collapse border border-border">
          <thead>
            <tr class="bg-card font-bold text-primary border-b border-border">
              <th class="p-3 border-r border-border">Institution</th>
              <th class="p-3 border-r border-border">Distance from Exit 7</th>
              <th class="p-3 border-r border-border">Domain Specialization</th>
              <th class="p-3 border-r border-border">Campus Size</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border text-secondary">
              <td class="p-3 border-r border-border font-semibold text-primary">NALSAR Law University</td>
              <td class="p-3 border-r border-border">2.5 km (5 mins)</td>
              <td class="p-3 border-r border-border">Legal Studies, LL.B, LL.M</td>
              <td class="p-3 border-r border-border">55 Acres</td>
            </tr>
            <tr class="border-b border-border text-secondary">
              <td class="p-3 border-r border-border font-semibold text-primary">BITS Pilani Hyderabad</td>
              <td class="p-3 border-r border-border">6.0 km (9 mins)</td>
              <td class="p-3 border-r border-border">Engineering, Tech, Sciences</td>
              <td class="p-3 border-r border-border">200 Acres</td>
            </tr>
            <tr class="border-b border-border text-secondary">
              <td class="p-3 border-r border-border font-semibold text-primary">Institute of Public Enterprise</td>
              <td class="p-3 border-r border-border">3.2 km (6 mins)</td>
              <td class="p-3 border-r border-border">PGDM, Management & Research</td>
              <td class="p-3 border-r border-border">21 Acres</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
];

export const COMMUNITY_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'ORR Exit 7 Service Road Streetlight & Landscaping Enhancement Begins',
    category: 'Civic',
    summary: 'HMDA launches 4 km illumination and beautification drive along the Shamirpet ORR Exit 7 service lane.',
    submittedBy: 'K. Reddy (Local Resident)',
    date: 'July 19, 2026',
    upvotes: 42,
    verified: true
  },
  {
    id: 'news-2',
    title: 'Genome Valley Phase III Bus Connectivity Frequency Increased',
    category: 'Traffic',
    summary: 'TSRTC introduces 6 new non-stop electric shuttle buses connecting Secunderabad Station to Genome Valley campuses.',
    submittedBy: 'S. Verma (Biotech Worker)',
    date: 'July 17, 2026',
    upvotes: 68,
    verified: true
  },
  {
    id: 'news-3',
    title: 'Community Tree Plantation Drive at Jawahar Deer Park Perimeter',
    category: 'Environment',
    summary: 'Over 500 native saplings planted by local school volunteers and Forest Department officials near lake bund.',
    submittedBy: 'Green Shamirpet Initiative',
    date: 'July 12, 2026',
    upvotes: 35,
    verified: true
  }
];

export const EVENTS_CALENDAR: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Maha Shivaratri Special Pooja & Heritage Darshan',
    date: 'February 26, 2027',
    location: 'Katta Maisamma Shrine & Heritage Ghats',
    category: 'Cultural',
    description: 'Annual festive congregation, devotional music, and night vigil along the Shamirpet lake bund.',
    organizer: 'Shamirpet Heritage & Cultural Trust'
  },
  {
    id: 'evt-2',
    title: 'Genome Valley Life Sciences & Bio-Tech Summit 2026',
    date: 'September 15, 2026',
    location: 'Genome Valley Auditorium, Shamirpet',
    category: 'Industry',
    description: 'Networking expo and keynote panels on biomanufacturing trends featuring international life-sciences leaders.',
    organizer: 'Telangana Life Sciences Council'
  },
  {
    id: 'evt-3',
    title: 'Shamirpet Lake Bird Watching & Nature Walk',
    date: 'October 11, 2026',
    location: 'Jawahar Deer Park Main Gate',
    category: 'Environment',
    description: 'Guided morning photography walk exploring migratory avian species around Pelle Cheruvu.',
    organizer: 'Hyderabad Wildlife Photographers'
  }
];

export const NETWORK_SITES = [
  { name: 'Keesara.city', tagline: 'Keesara Gutta & ORR Corridor', url: 'https://keesara.city' },
  { name: 'Medchal.city', tagline: 'District HQ & Industrial Gateway', url: 'https://medchal.city' },
  { name: 'Thukkuguda.city', tagline: 'Aerospace & ORR Exit 14 Hub', url: 'https://thukkuguda.city' },
  { name: 'Futurecity.city', tagline: 'Fourth City & Skill University Zone', url: 'https://futurecity.city' },
  { name: 'Dandora.online', tagline: 'Growth & Execution Partner for Real Estate', url: 'https://dandora.online/sectors/real-estate' }
];
