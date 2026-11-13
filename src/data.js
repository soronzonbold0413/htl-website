// All website text lives here. Edit this file to change content without touching the layout.

// `page: 'about'` links to the About us page; `section` links to a part of the home page
export const nav = [
  { page: 'about', label: 'About us' },
  { section: '#services', label: 'Services', menu: 'services' }, // `menu` shows a dropdown list on hover
  { section: '#projects', label: 'Projects', menu: 'projects' },
  { section: '#partners', label: 'Partners' },
]

export const hero = {
  eyebrow: 'Hi Tech Lab LLC · Ulaanbaatar · Since 2011',
  // Each item is one line of the headline; wrap a word in `highlight` to color it red.
  lines: [{ text: 'A trusted leader' }, { text: 'in ', highlight: 'accessibility' }],
  sub: 'HTL designs, builds and automates infrastructure: mobile network sites, smart water kiosks, solar and wind systems, and the buildings that house them.',
  video: { desktop: '/video/intro-1080.mp4', mobile: '/video/intro-720.mp4', poster: '/img/intro-poster-1080.jpg' },
  bar: [
    { num: '01', label: 'Telecom', href: '#services' },
    { num: '02', label: 'Construction', href: '#services' },
    { num: '03', label: 'Renewables', href: '#services' },
    { num: '04', label: 'Automation', href: '#services' },
    { num: '→', label: 'Smart water kiosks', href: '#projects' },
  ],
}

export const about = {
  title: 'Fifteen years of building what cities and towns depend on.',
  paragraphs: [
    'Founded in 2011, HTL works in telecommunications infrastructure, smart water distribution kiosks, renewable energy, and construction.',
    'Our experienced team delivers every project with modern, innovative solutions and a high standard of quality, from the first site survey to long-term maintenance.',
  ],
  founded: '2011',
  stats: [
    { value: 500, suffix: '~', label: 'water distribution kiosks built across Mongolia' },
    { value: 250, suffix: '~', label: 'urban and rural sites with telecom infrastructure work' },
    { value: 30, suffix: '+', label: 'renewable energy contracts completed' },
    { value: 60, suffix: '~', label: 'private residential houses built' },
  ],
}

// Services. `group` puts each one in a row on the home page: 'build' (we build and install) or 'engineer' (we design and manage).
// `detailTitle` / `detail` are the longer description on the service page; `photos` are shown on the home card (first one) and service page.
export const services = [
  {
    code: 'TELECOM',
    group: 'build',
    slug: 'telecom-infrastructure',
    short: 'Telecom', // label in the bar under the home video // web address: /services/telecom-infrastructure
    projects: ['p-teca'], // related projects (by id)
    licenses: [7], // related licenses (L-01 = 1)
    icon: 'tower',
    title: 'Telecom Infrastructure',
    text: 'We install, repair and maintain mobile network infrastructure and equipment for operators across the city and countryside.',
    tags: ['Tower sites', 'Fiber & network', 'Maintenance'],
    detailTitle: 'Telecommunications & Information Infrastructure',
    detail:
      'Construction of specialized communication center buildings, installation of communication towers, outdoor duct channeling, manhole assemblies, and extensive fiber-optic network routing, both overhead and in underground ducts.',
    photos: [
      ['/svc/telecom-2.jpg', 'Telecom tower site with solar panels and a wind turbine'],
      ['/svc/telecom-3.jpg', 'Lattice telecom tower in a forest clearing'],
      ['/svc/telecom-1.jpg', 'Telecom tower and equipment shelter among trees'],
    ],
  },
  {
    code: 'BUILD',
    group: 'build',
    slug: 'construction-maintenance',
    short: 'Construction', // label in the bar under the home video // web address: /services/construction-maintenance
    projects: ['p-ot', 'p-teca'],
    licenses: [5, 8, 9],
    icon: 'building',
    title: 'Construction & Maintenance',
    text: 'Licensed to build and maintain low- and medium-complexity buildings and structures, including interior lighting, power supply and grounding.',
    tags: ['Licensed builder', 'Electrical', 'Grounding'],
    detailTitle: 'Civil & Residential Construction',
    detail:
      'General contracting, site management, structural engineering and architectural execution for urban residential developments, commercial facilities and municipal utility upgrades.',
    photos: [
      ['/svc/build-2.jpg', 'Aerial view of single-family houses built by HTL'],
      ['/svc/build-1.jpg', 'Aerial view of a residential development built by HTL on a hillside'],
      ['/svc/build-4.jpg', 'Completed house with terrace in winter'],
      ['/svc/build-3.jpg', 'Visualization of a single-storey house with veranda'],
    ],
  },
  {
    code: 'ENERGY',
    group: 'build',
    slug: 'renewable-energy',
    short: 'Renewable energy', // label in the bar under the home video // web address: /services/renewable-energy
    projects: [],
    licenses: [1, 2, 3, 4],
    icon: 'energy',
    title: 'Renewable Energy',
    text: 'Off-grid solar and wind power systems: solution design, equipment supply, and installation by our professional engineering team.',
    tags: ['Solar', 'Wind', 'Off-grid'],
    detailTitle: 'Renewable Energy & Decentralized Utilities',
    detail:
      'Engineering, procurement and construction of off-grid and grid-tied solar photovoltaic (PV) systems, smart microgrids, low-capacity household heating solutions and automated smart metering networks.',
    photos: [
      ['/svc/energy-3.jpg', 'Solar array and wind turbine powering a remote telecom site'],
      ['/svc/energy-4.jpg', 'Ground-mounted solar panel array'],
      ['/svc/energy-1.jpg', 'Fenced solar installation beside a telecom tower'],
      ['/svc/energy-5b.jpg', 'Solar inverters and lithium battery storage installed by HTL'],
      ['/svc/energy-2.jpg', 'Stacked lithium battery modules being wired'],
    ],
  },
  {
    code: 'CONTROL',
    group: 'build',
    slug: 'automation',
    short: 'Automation', // label in the bar under the home video // web address: /services/automation
    projects: ['p-water', 'p-erdenet'],
    licenses: [6],
    icon: 'control',
    title: 'Automation',
    text: 'Complete monitoring, control and integration solutions built on SCADA, PLC and custom software, delivered to a professional standard.',
    tags: ['SCADA', 'PLC', 'Software'],
    photos: [
      ['/svc/auto-3.jpg', 'HTL smart water kiosk, stand version'],
      ['/svc/auto-4.jpg', 'Engineer programming a water kiosk automation system'],
      ['/svc/auto-5.jpg', 'Water kiosk user panel with card reader'],
      ['/svc/auto-2.jpg', 'Automation control cabinet'],
      ['/svc/auto-1.jpg', 'Reverse osmosis drinking water treatment unit'],
    ],
  },
  {
    code: 'STUDY',
    group: 'engineer',
    slug: 'feasibility-studies',
    short: 'Feasibility studies', // label in the bar under the home video // web address: /services/feasibility-studies
    projects: [],
    licenses: [],
    icon: 'study',
    title: 'Feasibility Studies & Technical Engineering',
    text: 'Comprehensive feasibility studies, optimal engineering concepts and cost-effective design solutions for infrastructure, mining and municipal projects.',
    tags: ['Feasibility study (ТЭЗҮ)', 'Engineering concepts', 'Cost-effective design'],
    detail:
      'We develop comprehensive feasibility studies (Feasibility Study / ТЭЗҮ), optimal engineering concepts and cost-effective design solutions for infrastructure, mining and municipal projects.',
    photos: [],
  },
  {
    code: 'PMC',
    group: 'engineer',
    slug: 'project-management-consultancy',
    short: 'Project management', // label in the bar under the home video // web address: /services/project-management-consultancy
    projects: [],
    licenses: [],
    icon: 'pmc',
    title: 'Project Management Consultancy (PMC)',
    text: 'Full-cycle project management consulting, from contract administration and schedules to risk, quality and budget, to international standards.',
    tags: ['Contract administration', 'Risk management', 'UNDP · ADB · EBRD · MCA'],
    detail:
      'Full-cycle project management consulting, from contract administration, timeline tracking and risk management to quality assurance and budget reconciliation, in compliance with international standards such as UNDP, ADB, EBRD, MCA and other infrastructure project frameworks.',
    photos: [],
  },
  {
    code: 'DESIGN',
    group: 'engineer',
    slug: 'design-engineering-drawings',
    short: 'Design & drawings', // label in the bar under the home video // web address: /services/design-engineering-drawings
    projects: ['p-ot'],
    licenses: [3, 9],
    icon: 'design',
    title: 'Design & Detailed Engineering Drawings',
    text: 'Working and as-built drawings, 3D digital models and detailed engineering blueprints for structures, metal fabrication and utility networks.',
    tags: ['Working drawings', 'As-built', '3D models'],
    detail:
      'We develop comprehensive working and as-built design drawings, 3D digital models and detailed engineering blueprints for structures, metal fabrications and utility networks (telecommunications, electrical power, heating and water supply), in strict compliance with national and international standards.',
    photos: [],
  },
]

// Projects. Each one appears on the home page and has its own page at /projects/<slug>.
// Optional `details` adds content to the project page:
//   details: {
//     overview: ['Paragraph…', 'Paragraph…'],
//     facts: [['Year', '2024'], ['Duration', '8 months']],
//     highlights: ['Short point…', 'Short point…'],
//     stats: [['180', 'label…']],          // large figures
//     scope: [['Work item', '/img/photo.jpg']], // work delivered, each with a photo
//   },
// `images`: up to 4 photos for the home page (first one large). `photos`: extra photos for the project page only.
export const projects = [
  {
    id: 'p-water',
    slug: 'smart-water-kiosks', // web address: /projects/smart-water-kiosks
    short: 'Smart water',
    eyebrow: 'Smart water · Automation',
    title: 'Supply and Installation of Ger Area Smart Water Kiosk Upgrade',
    meta: [
      ['Client', 'MCA-Mongolia'],
      ['Partner', 'Water Supply and Sewerage Authority of Ulaanbaatar (USUG)'],
      ['Location', 'Ger districts, Ulaanbaatar'],
      ['Scope', 'Equipment supply, installation, automation'],
    ],
    text: 'Under the MCC Mongolia Water Compact, HTL fully automated 180 water kiosks connected to the ger area water network and handed them over to USUG. Across the MCA projects, HTL has automated 300 kiosks in total.',
    layout: 'four',
    // home page: up to 4 photos (first one large)
    images: [
      ['/img/mca-1.jpg', 'HTL engineers wiring the kiosk control cabinet'],
      ['/img/mca-6.jpg', 'Upgraded smart water kiosk building in a ger district'],
      ['/img/mca-3.jpg', 'Kiosk monitoring dashboard on a tablet'],
      ['/img/mca-4.jpg', 'Engineer explaining the kiosk control panel'],
    ],
    // extra photos shown only on the project page
    photos: [
      ['/img/mca-2.jpg', 'Engineers commissioning the control cabinet'],
      ['/img/mca-8.jpg', 'HTL engineer in front of a water kiosk'],
      ['/img/mca-5.jpg', 'Kiosk operator inside the upgraded pump room'],
      ['/img/mca-7b.jpg', "Smart Water kiosk water cards featuring children's drawings", 'contain'],
    ],
    details: {
      overview: [
        'The Water Sector Sustainability Project is one of the three main projects of the Second Compact, the Water Compact, between the Government of Mongolia and the United States Millennium Challenge Corporation (MCC).',
        "Implemented from January 2023 to improve access to water in the ger areas and to reduce the operating costs of USUG, the project fully renovated the electrical systems, pipework units, equipment, interior finishing and safety systems of 180 water kiosks in 61 khoroos across six districts of the capital, and automated them with smart devices. The 151 kiosks automated earlier were brought together with them under a unified monitoring and control system that now covers 331 water kiosks.",
        'HTL completed the work and formally handed the kiosks over to the Water Supply and Sewerage Authority of Ulaanbaatar (USUG). Across the MCA projects, HTL has automated a total of 300 water kiosks.',
      ],
      stats: [
        ['180', 'water kiosks renovated and automated'],
        ['331', 'kiosks in one unified monitoring and control system'],
        ['61', 'khoroos in six districts of Ulaanbaatar'],
        ['21', 'truck-loading kiosks now open around the clock'],
      ],
      facts: [
        ['Program', 'MCC Mongolia Water Compact (Compact II)'],
        ['Start', 'January 2023'],
        ['Handed over to', 'USUG'],
      ],
      // results section, shown with a photo
      results: {
        text: [
          'Thousands of residents in the ger areas of the capital can now use the water kiosks without time restrictions. Through the smart devices they can collect water with a water card or a range of electronic payment methods, and keep track of their own water use.',
          "21 of the 180 renovated kiosks are truck-loading stations. With them automated, around 60 USUG water trucks, which supply more than 370 mobile water kiosks, as well as the fire and rescue vehicles of the National Emergency Management Agency, can draw water at any time without delay.",
        ],
        photo: ['/img/mca-7b.jpg', "Smart Water kiosk water cards featuring children's drawings", 'contain'],
      },
      // work HTL delivered, each shown with a photo
      scope: [
        ['Construction and interior finishing', '/img/mca-6.jpg'],
        ['Plumbing works', '/img/mca-5.jpg'],
        ['Automation', '/img/mca-1.jpg'],
        ['Smart Water mobile app', '/img/mca-app.jpg'],
        ['Remote management system for the kiosks', '/img/mca-3.jpg'],
      ],
    },
  },
  {
    id: 'p-teca',
    slug: 'tec-a-tolgoit', // web address: /projects/tec-a-tolgoit
    short: 'TEC-A Tolgoit',
    eyebrow: 'Telecom · Network',
    title: 'TEC-A Tolgoit Subcenter: Communication Line and Network Work',
    meta: [
      ['Client', "Governor's Office of the Capital City (Ulaanbaatar)"],
      ['Employer', 'Ulaanbaatar City Integrated Project Implementation Unit'],
      ['Location', 'Tolgoit subcenter, Ulaanbaatar'],
      ['Scope', 'ICT Center building, telecom tower, fiber optic network'],
    ],
    text: "Under ADB's Ulaanbaatar Urban Services and Ger Areas Development Investment Program (Tranche 3), HTL's work at the Tolgoit sub-center covers the integrated ICT Center building, a 25 m telecommunication tower and the fiber optic network.",
    layout: 'four',
    flip: true,
    images: [
      ['/img/tec-1.jpg', 'Aerial rendering of the TEC-A building at Tolgoit subcenter'],
      ['/img/tec-4.jpg', 'TEC-A building under construction'],
      ['/img/tec-2.jpg', 'Rendering of the TEC-A building entrance'],
      ['/img/tec-3.jpg', 'Rendering of the TEC-A building side view'],
    ],
    photos: [
      ['/img/tec-d1.jpg', 'Completed ICT Center at the Tolgoit sub-center at sunset'],
      ['/img/tec-d2.jpg', 'ICT Center entrance and facade'],
      ['/img/tec-d3.jpg', 'ICT Center with paved parking area'],
      ['/img/tec-d4.jpg', 'Fenced telecommunication equipment shelter on site'],
    ],
    details: {
      overview: [
        'Ulaanbaatar has a population of over 1.7 million. Most of the central city consists of apartment buildings connected to comprehensive centralized services, including central heating, water supply and wastewater management. Around this urban core lies a vast peri-urban area with low population density and underdeveloped infrastructure, commonly called the ger areas. With continuing rural-to-urban migration, these ger areas keep expanding.',
        'To meet the growing demand for municipal services and the increasing density of these areas, the Asian Development Bank (ADB) approved the **Ulaanbaatar Urban Services and Ger Areas Development Investment Program** on 12 December 2013, using a multi-tranche financing facility (MFF) designed to catalyze urban development and establish urban sub-centers. The program\'s Financing Framework Agreement was signed on 9 December 2013 and ratified by the State Great Khural (Parliament) of Mongolia on 23 May 2014.',
        "The program spans nine years (from December 2013 to December 2012 / December 2022) and comprises three multi-sector tranches supporting the Ulaanbaatar Master Plan by upgrading infrastructure services in the ger areas and developing economic nodes (sub-centers). These investments improve living standards in the ger areas by (i) making basic municipal services, public spaces and socio-economic facilities more accessible; (ii) creating better housing options; and (iii) fostering regional economic development, so that residents and businesses share in the benefits of the urban economy.",
        'The first two tranches cover more than 600 hectares across four sub-centers: Bayankhoshuu, Selbe, Denjiin 1000 and Dambadarjaa. Tranche 3, the final phase, aims to increase access to peri-urban development, establish sustainable infrastructure and promote the socio-economic development of sub-centers in the Tolgoit and Sharkhad areas in the west and east of Ulaanbaatar.',
      ],
      stats: [
        ['925.25 m²', 'integrated ICT Center, two storeys and a basement'],
        ['25 m', 'telecommunication tower'],
        ['52', 'telecommunication manholes'],
        ['4,300 m', 'cable ducts'],
      ],
      facts: [
        ['Program', 'ADB Ulaanbaatar Urban Services and Ger Areas Development Investment Program, Tranche 3'],
        ['Financed by', 'Asian Development Bank (ADB)'],
        ['Project period', '1 October 2025 – 11 December 2026'],
      ],
      // project team: [role, name]. People who are also in the Engineering team (About us) are shown with their photo.
      team: [
        ['Project Manager', 'Maibayar G.'],
        ['Project Coordinator', 'Otgonbayar S.'],
        ['Chief Engineer', 'Barsbold D.'],
        ['Resident Engineer', 'Dalaitseren G.'],
        ['Electrical Engineer', 'Ganzorig M.'],
        ['Communication Engineer', 'Ulambayar N.'],
        ['Communication Junior Engineer', 'Oyuntamir G.'],
        ['Construction Engineer', 'Batmunkh B.'],
        ['Mechanical Engineer', 'Erdenebat T.'],
        ['Environmental Engineer', 'Tuvshinjargal M.'],
        ['Health and Safety', 'Togoontumur B.'],
        ['Quality Controller', 'Undral P.'],
        ['Document Controller', 'Undram Kh.'],
      ],
      // main works, each with an optional photo and list of quantities
      // health and safety statement shown on the project page
      safety: {
        title: 'Health and Safety Assurance',
        text: [
          "Throughout this project, in strict compliance with the Employer's requirements, HTL LLC is committed to the highest standards of Occupational Health and Safety (OHS), environmental protection and corporate social responsibility. Operating under our management systems as well as national legislation, MNS 4969:2000, Construction Norms and Rules (BNbD 12-03-04) and the Employer's nine safety regulations, we keep the public safe and local traffic moving by building approved temporary roads and bridges at our own expense where necessary.",
          'Before work begins, our safety officers, who have full authority to enforce compliance, carry out three-tier inspections and provide all workers with daily task-specific briefings, medical check-ups, full PPE and certified first-aid support. Hazardous materials are strictly managed with valid certificates of origin and engineering approvals, while fire safety and clearly marked hazard zones are maintained across all temporary and permanent sites.',
          'All employees regularly complete the required health and safety training, including certified first-aid training and other specialized courses.',
        ],
        tags: ['MNS 4969:2000', 'BNbD 12-03-04', "Employer's 9 safety regulations", 'Certified first aid', 'Full PPE'],
      },
      // social responsibility statement shown on the project page
      commitment: {
        title: 'Inclusive employment on this project',
        text: [
          "During this project, in line with the Employer's requirements, HTL LLC is committed to social responsibility and inclusive economic growth. We prioritize equal employment opportunities by providing stable jobs, professional training and a supportive working environment for vulnerable groups, people with special needs and single mothers.",
          'By building diversity into our workforce, we aim to empower local communities, reduce poverty and foster an equitable workplace culture across our operations, a standard we will continue to uphold in every future project.',
        ],
      },
      // site map shown on the project page
      map: {
        src: '/img/tec-d5.jpg',
        alt: 'Map of the 736.9-hectare Tolgoit sub-center with the NDT (National Data Centre) building marked',
        caption:
          'The yellow NDT marker (National Data Centre) shows the ICT Center building HTL is constructing, within the 736.9-hectare Tolgoit sub-center in western Ulaanbaatar.',
      },
      works: [
        {
          title: 'Integrated ICT Center building and facilities',
          text: 'Construction of the new integrated Information and Communication Technology (ICT) Center planned for the Tolgoit sub-center: a two-storey building with a basement and a total area of 925.25 m². The works cover the complete building, external landscaping, roads and paved areas, with the facility handed over for permanent operation.',
          photo: ['/img/tec-d1.jpg', 'Completed ICT Center at the Tolgoit sub-center'],
        },
        {
          title: '25 m telecommunication tower',
          text: 'Construction of the complete 25 m telecommunication tower with external landscaping, roads and paved areas and the associated electrical structures, handed over for permanent operation.',
        },
        {
          title: 'Telecommunication manholes, ducts and fiber optic cable',
          text: 'Supply and installation for the Tolgoit sub-center, with all required connections:',
          items: [
            '4,300 m of cable ducts',
            '52 telecommunication manholes',
            '4,450 m of fiber optic cable in total',
            '2,174 m of aerial fiber optic cable',
            '5,360 m of fiber optic cable pulled through existing ducts to the source point',
          ],
        },
      ],
    },
  },
  {
    id: 'p-ot',
    slug: 'oyu-tolgoi-khanbogd', // web address: /projects/oyu-tolgoi-khanbogd
    short: 'Oyu Tolgoi',
    eyebrow: 'Construction · Fabrication',
    title: 'Supply and Fabrication of Welding Service in Khanbogd Soum',
    meta: [
      ['Client', 'Oyu Tolgoi LLC'],
      ['Location', 'Khanbogd soum, Umnugovi province'],
      ['Scope', 'Steelwork design and metal fabrication'],
    ],
    text: 'HTL provides miscellaneous steelwork design and metal fabrication for the Concentrator and other areas of Oyu Tolgoi, from concept design and shop drawings to fabrication, welding and installation.',
    layout: 'four',
    images: [
      ['/img/ot-1b.jpg', 'Unloading fabricated steel at the Oyu Tolgoi site'],
      ['/img/ot-2.jpg', 'Steel sections delivered by telehandler on site'],
      ['/img/ot-3.jpg', 'Welding a steel frame inside the processing plant'],
      ['/img/ot-4.jpg', 'HTL welders working on a steel structure'],
    ],
    photos: [
      ['/img/ot-d1.jpg', 'HTL crew inspecting work inside the plant'],
      ['/img/ot-d2.jpg', 'Fitting fabricated steel panels'],
      ['/img/ot-d3.jpg', 'Cleaning the work area after installation'],
      ['/img/ot-d4.jpg', 'Completed equipment in operation at the plant'],
    ],
    details: {
      overview: [
        'Miscellaneous steelwork design and metal fabrication services for the Concentrator and other areas of Oyu Tolgoi.',
        'Light and medium steelwork and metal fabrication, outside the major steelwork packages, is prepared to approved engineering designs, then constructed, erected, installed, coated and transported in line with all specified standards and planned schedules.',
        'All data, records and documentation are retained, maintained and provided to Oyu Tolgoi stakeholders when required, and progress is reported to them every week.',
      ],
      facts: [
        ['Contract period', '1 January 2025 – 31 December 2027'],
        ['Status', 'Ongoing'],
        ['Welding standards', 'AWS D1.1, AWS D14.1'],
        ['Reporting', 'Weekly progress updates to Oyu Tolgoi'],
      ],
      // project team: [role, name]. People who are also in the Engineering team (About us) are shown with their photo.
      team: [
        ['Project Manager', 'Erdenesaikhan B.'],
        ['Mechanical Engineer', 'Enkh-Amgalan G.'],
        ['Draft Engineer', 'Shagjaa G.'],
        ['Supervisor', 'Badral M.'],
        ['Welder', 'Enkhsaikhan G.'],
        ['Welder', 'Enkhbayar T.'],
        ['Welder', 'Samdanmunkh M.'],
        ['Mechanic', 'Orgil M.'],
        ['Mechanic', 'Odbayar E.'],
        ['Painter', 'Gantulga S.'],
      ],
      scopeIntro:
        'Facilities, design and engineering services, labour, supervision, project management, PPE, tools and consumables needed to schedule and complete the following services and works, including but not limited to:',
      // items without a photo are shown as a numbered list
      scope: [
        ['Drafting and engineering, taking concept designs to "Issued for Fabrication" status in collaboration with the Concentrator maintenance engineering team'],
        ['Fabrication shop drawings'],
        ['Bills of materials (BOMs)'],
        ['Structural engineering design and certification to Oyu Tolgoi internal standards'],
        ['Supply of steel and metal materials'],
        ['Fabrication of miscellaneous light and medium steelwork'],
        ['Welding to AWS D1.1 (standard steelwork) and AWS D14.1 (lifting devices and equipment)'],
        ['Non-destructive testing when required by Oyu Tolgoi'],
      ],
    },
  },
  {
    id: 'p-erdenet',
    slug: 'erdenet-climate-resilience', // web address: /projects/erdenet-climate-resilience
    short: 'Erdenet',
    eyebrow: 'Smart water · Metering',
    title: 'Erdenet Climate Resilience Project',
    meta: [
      ['Client', "Governor's Office of Orkhon Province"],
      ['Location', 'Erdenet, Orkhon Province'],
      ['Scope', 'Supply and installation of 11,721 smart water meters'],
    ],
    text: 'In a consortium with Unitel Group and Nexmind LLC, HTL is supplying and installing 11,721 LoRaWAN smart water meters in Erdenet under the EBRD-financed Erdenet Climate Resilience Project.',
    layout: 'three',
    flip: true,
    images: [
      ['/img/et-banner.jpg', 'Erdenet Climate Resilience Project banner', 'contain'],
      ['/img/et-city.jpg', 'View of Erdenet city'],
      ['/img/et-sign.jpg', 'Project information board on site in Erdenet'],
    ],
    details: {
      overview: [
        'Erdenet Climate Resilience Project – ECRP 2.5: Provision of Domestic Water Meters and Smart Water Meters for Heat Distribution Centres (Procurement Process No. 39342808).',
        "The project upgrades and expands Erdenet's flood protection infrastructure and improves the clean water supply in the city's ger areas.",
        "Together with Unitel Group and Nexmind LLC, HTL won the tender announced by the Governor's Office of Orkhon Province and signed contract No. 39342808, \"ECRP 2.5: Supply and installation of domestic water meters and smart water meters for heat distribution centres\", financed by the European Bank for Reconstruction and Development (EBRD).",
        'Under the project, HTL is importing 11,721 LoRaWAN water meters, model LXSY, made by Kaifeng Shengda Water Meter Co., Ltd. of China, under its special license, and is responsible for installing them.',
      ],
      stats: [['11,721', 'LoRaWAN smart water meters supplied and installed by HTL']],
      facts: [
        ['Contract no.', '39342808 (ECRP 2.5)'],
        ['Financed by', 'European Bank for Reconstruction and Development (EBRD)'],
        ['Consortium', 'HTL, Unitel Group, Nexmind LLC'],
        ['Meters', 'Kaifeng Shengda LXSY, LoRaWAN'],
        ['Project period', 'June 2026 – December 2026'],
        ['Status', 'In progress'],
      ],
      results: {
        title: 'What the project aims to achieve',
        eyebrow: 'Expected results',
        text: [
          'Expected results of the Erdenet Climate Resilience Project as a whole:',
        ],
        stats: [
          ['40–50%', 'lower risk of flood damage'],
          ['~11,000', 'ger area residents connected to a safe drinking water network'],
          ['15%', 'less water lost from the network'],
        ],
        photo: ['/img/et-city.jpg', 'View of Erdenet city'],
      },
    },
  },
]

// Partner logos in priority order. The first 6 are shown large; the rest scroll in a strip.
export const partnerLogos = Array.from({ length: 21 }, (_, i) => `/partners/partner-${String(i + 1).padStart(2, '0')}.png`)
export const featuredPartnerCount = 6

export const contact = {
  phone: '+976 7711-8880',
  phoneHref: 'tel:+97677118880',
  email: 'contact@htl.mn',
  address:
    'Office 604, Building 41/3, Architect B. Chimed Street, 8th khoroo, Sukhbaatar district, Ulaanbaatar 14191, Mongolia',
  mapUrl:
    'https://www.google.com/maps/place/HTL+LLC/@47.9215633,106.9298606,490m/data=!3m1!1e3!4m6!3m5!1s0x5d969378f565c2d1:0x3baad9ffb2922fd2!8m2!3d47.9215655!4d106.9307566!16s%2Fg%2F11svwmn1yh!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D',
  facebook: 'https://www.facebook.com/HiTechLabLLC',
  facebookLabel: 'facebook.com/HiTechLabLLC',
}

// ---------- About us page ----------
export const aboutPage = {
  title: 'About us',
  intro:
    'Hi Tech Lab LLC was founded in 2011 in Ulaanbaatar. Today our engineers build and maintain telecom infrastructure, smart water kiosks, renewable energy systems and buildings in the capital and across the countryside.',
}

// Licenses and permits held by HTL, shown at the top of the About us page.
// `spec` is the large figure on the card; `codes` (optional) are clickable tags, each with its own description in `text`;
// `original` is the official Mongolian wording.
export const licenses = [
  {
    category: 'Energy',
    icon: 'bolt',
    spec: '100+ MW',
    title: 'Power generation sources above 100 MW',
    scope:
      'Construction, installation and repair of power generation sources with a capacity above 100 MW, including testing, commissioning and related works and services.',
    original:
      '100 МВт-аас дээш эрчим хүчний эх үүсвэр барих, угсрах, засварлах, түүний туршилт тохируулга, дагалдах ажил, үйлчилгээ эрхлэх',
  },
  {
    category: 'Energy',
    icon: 'grid',
    spec: '220 kV+',
    title: 'Transmission lines and substations of 220 kV and above',
    scope:
      'Repair and installation of power transmission lines and substations rated 220 kV and above, including testing, commissioning and related works and services.',
    original:
      '220 кВ болон түүнээс дээш хүчдэлтэй цахилгаан дамжуулах шугам, дэд станцын засвар, угсралт, түүний туршилт тохируулга, дагалдах ажил, үйлчилгээ эрхлэх',
  },
  {
    category: 'Energy',
    icon: 'design',
    spec: 'Design',
    title: 'Design of energy buildings and structures',
    scope: 'Preparation of design documentation for energy sector buildings and structures.',
    original: 'Эрчим хүчний барилга, байгууламжийн зураг төсөл боловсруулах',
  },
  {
    category: 'Heating',
    icon: 'pipe',
    spec: '0.07–4.0 MPa',
    title: 'Heat pipelines and heat distribution substations',
    scope:
      'Installation and repair of heat pipelines operating at 0.07–4.0 MPa and of heat distribution substations, including testing, commissioning and related works and services.',
    original:
      '0.07-4.0 МПа даралттай дулааны шугам хоолой, дулаан дамжуулах төвийн угсралт, засвар, түүний туршилт тохируулга, дагалдах ажил, үйлчилгээ эрхлэх',
  },
  {
    category: 'Industry',
    icon: 'metal',
    spec: 'Metal',
    title: 'Metal processing and fabrication',
    scope: 'Operation of metal processing and fabrication production.',
    original: 'Төмөрлөг боловсруулах үйлдвэрлэл эрхлэх',
  },
  {
    category: 'Water',
    icon: 'drop',
    spec: 'Meters',
    title: 'Hot and cold water meters',
    scope: 'Sale and installation of hot and cold water meters of models approved for use in Mongolia.',
    original: 'Монгол Улсад ашиглахыг зөвшөөрсөн загварын халуун, хүйтэн усны тоолуур худалдах, суурилуулах',
  },
  {
    category: 'Telecom',
    icon: 'tower',
    spec: 'Networks',
    title: 'Telecommunications networks and infrastructure',
    scope: 'Installation and maintenance of telecommunications service networks and infrastructure.',
    original: 'Харилцаа холбооны үйлчилгээний сүлжээ, дэд бүтцийн суурилуулалт, засвар үйлчилгээ эрхлэх',
  },
  {
    category: 'Construction',
    icon: 'building',
    spec: '10 codes',
    title: 'Construction works and services',
    scope:
      'Construction works and services under the following codes of the Ministry of Urban Development, Construction and Housing.',
    codes: [
      {
        code: 'BA-2.1',
        text: 'Construction, extension, repair, renovation and landscaping of buildings with cast-in-place and precast reinforced concrete, timber and masonry structures.',
        mn: 'Цутгамал болон угсармал төмөр бетон, мод ба өрөгт бүтээц барилгын угсралт, өргөтгөл, засвар шинэчлэлт, тохижилтын ажил',
      },
      { code: 'BA-2.2', text: '' },
      {
        code: 'BA-3.1',
        text: 'Construction, extension, repair, renovation and landscaping of buildings with cast-in-place and precast reinforced concrete frame structures and fully cast-in-place structures.',
        mn: 'Цутгамал болон угсармал төмөр бетон арагт бүтээц болон иж бүрэн цутгамал бүтээц барилгын угсралт, өргөтгөл, засвар шинэчлэлт, тохижилтын ажил',
      },
      {
        code: 'BA-4.1',
        text: 'Construction, extension, repair, renovation and landscaping of buildings with cast-in-place and precast reinforced concrete frame structures and fully cast-in-place structures.',
        mn: 'Цутгамал болон угсармал төмөр бетон арагт бүтээц болон иж бүрэн цутгамал бүтээц барилгын угсралт, өргөтгөл, засвар шинэчлэлт, тохижилтын ажил',
      },
      { code: 'BA-4.3', text: '' },
      { code: 'BA-6.1', text: '' },
      { code: 'BA-6.2', text: '' },
      {
        code: 'BA-6.3',
        text: 'Installation of interior lighting and power supply systems and their equipment in buildings and structures, and of the building\'s external branch lines and networks.',
        mn: 'Барилга байгууламжийн дотор гэрэлтүүлэг, цахилгаан хангамжийн угсралт, тэдгээрийн тоног төхөөрөмж, тухайн барилгын гадна салбар шугам сүлжээний угсралт',
      },
      {
        code: 'BA-6.4',
        text: 'Installation of interior communication, signalling, internet, fire-extinguishing and fire alarm systems and their equipment in buildings and structures, and of the building\'s external branch lines and networks.',
        mn: 'Барилга байгууламжийн дотор холбоо дохиолол, интернэт сүлжээ, гал унтраах болон галын аюулын дохиоллын системийн угсралт, тэдгээрийн тоног төхөөрөмж, тухайн барилгын гадна салбар шугам сүлжээний угсралт',
      },
      {
        code: 'BA-7.1',
        text: 'Repair, finishing, interior and landscaping works for buildings and structures.',
        mn: 'Барилга байгууламжийн засвар, засал чимэглэл, интерьер, орчны тохижилтын ажил',
      },
    ],
    original:
      'Хот байгуулалт, барилга, орон сууцжуулалтын яамны БА-2.1, БА-3.1, БА-4.1, БА-6.3, БА-6.4, БА-7.1 болон БА-2.2, БА-4.3, БА-6.1, БА-6.2 заалтын дагуу ажил үйлчилгээ эрхлэх',
  },
  {
    category: 'Construction',
    icon: 'design',
    spec: '9 codes',
    title: 'Design works and services',
    scope:
      'Design works and services under the following codes of the Ministry of Urban Development, Construction and Housing.',
    codes: [
      {
        code: 'ZT-2.1',
        text: 'Architectural and landscape design of buildings and structures.',
        mn: 'Барилга байгууламжийн архитектур орчны тохижилтын зураг төсөл',
      },
      {
        code: 'ZT-2.1*',
        text: 'Structural design of buildings.',
        mn: 'Барилга бүтээцийн зураг төсөл',
      },
      {
        code: 'ZT-4.4',
        text: 'Working drawings for main water supply and sewerage networks and for the technology of related buildings and structures.',
        mn: 'Ус хангамж, ариутгах татуургын гол шугам сүлжээ, түүнтэй холбогдох барилга, байгууламжийн технологийн ажлын зураг',
      },
      {
        code: 'ZT-6.1',
        text: 'Design of interior water supply and sewerage systems, external branch networks, and the technology of related buildings and structures.',
        mn: 'Барилга байгууламжийн дотор ус хангамж, ариутгах татуургын систем, гадна салбар шугам сүлжээ, түүнтэй холбогдох барилга байгууламжийн технологийн зураг төсөл',
      },
      {
        code: 'ZT-6.2',
        text: 'Design of interior heating, ventilation and cooling systems, external heating branch networks, and the technology of related buildings and structures.',
        mn: 'Барилга байгууламжийн дотор халаалт, салхивч, хөргөлтийн систем, гадна дулааны салбар шугам сүлжээ, түүнтэй холбогдох барилга байгууламжийн технологийн зураг төсөл',
      },
      {
        code: 'ZT-6.3',
        text: 'Design of interior lighting and power supply systems, external branch networks up to 35 kV and the technology of related buildings and structures; and design of control, measurement, instrumentation and automation for residential, public and industrial buildings and equipment.',
        mn: 'Барилга байгууламжийн дотор гэрэлтүүлэг, цахилгаан хангамжийн систем, 35кВ хүртэлх гадна салбар шугам сүлжээ, түүнтэй холбогдох барилга байгууламжийн технологийн зураг төсөл, Орон сууц, олон нийт, үйлдвэрийн барилгын болон тоног төхөөрөмжийн хянах, хэмжих, хэрэгсэл автоматикийн зураг төсөл',
      },
      {
        code: 'ZT-6.4',
        text: 'Design of interior information and communication, fire and other alarm systems in buildings and structures, the technology of related buildings and structures, and external branch networks.',
        mn: 'Барилга байгууламжийн дотор мэдээлэл холбоо, галын болон бусад дохиоллын системийн зураг төсөл, түүнтэй холбогдох барилга байгууламжийн технологи, гадна салбар шугам сүлжээний зураг төсөл',
      },
      {
        code: 'ZT-7.1',
        text: 'Design of main water supply and sewerage networks and the technology of related buildings and structures.',
        mn: 'Ус хангамж, ариутгах татуургын гол шугам сүлжээ, түүнтэй холбогдох барилга байгууламжийн технологийн зураг төсөл',
      },
      {
        code: 'ZT-10.2',
        text: 'Cost estimates for building and construction works.',
        mn: 'Барилга байгууламжийн ажлын төсөв',
      },
    ],
    original:
      'Хот байгуулалт, барилга, орон сууцжуулалтын яамны ЗТ-10.2, ЗТ-2.1, ЗТ-2.1*, ЗТ-4.4, ЗТ-6.1, ЗТ-6.2, ЗТ-6.3, ЗТ-6.4, ЗТ-7.1 заалтын дагуу ажил үйлчилгээ эрхлэх',
  },
]

// Engineering team, in display order.
// `title`: job title shown under the name (\n starts a new line).
// `bio`: career summary shown in the side panel, as a list of paragraphs, e.g.
//   bio: ['First paragraph…', 'Second paragraph…'],
// Leave it out to show sample text.
export const team = [
  // row 1
  { name: 'Batzaya Z.', title: 'CEO\nTelecommunications Engineer', photo: '/team/z-batzaya.webp' },
  { name: 'Ulambayar N.', title: 'Project Manager\nTelecommunications Engineer', photo: '/team/n-ulambayar.webp' },
  { name: 'Otgonbayar S.', title: 'Project Manager', photo: '/team/s-otgonbayar.webp' },
  { name: 'Maibayar G.', title: 'Project Manager\nSoftware Engineer', photo: '/team/g-maibayar.webp' },
  { name: 'Enkh-Orgil M.', title: 'Project Manager\nTelecommunications Engineer', photo: '/team/m-enkh-orgil.webp' },
  // row 2
  { name: 'Erdenesaikhan B.', title: 'Manager\nElectrical Engineer', photo: '/team/b-erdenesaikhan.webp' },
  { name: 'Barsbold D.', title: 'Chief Engineer', photo: '/team/d-barsbold.webp' },
  { name: 'Dalaitseren G.', title: 'Technician Engineer', photo: '/team/g-dalaitseren.webp' },
  { name: 'Soronzonbold M.', title: 'Automation Engineer', photo: '/team/m-soronzonbold.webp' },
  { name: 'Batmunkh B.', title: 'Civil Engineer', photo: '/team/b-batmunkh.webp' },
  // row 3
  { name: 'Enkh-Amgalan G.', title: 'Mechanical Engineer', photo: '/team/g-enkh-amgalan.webp' },
  { name: 'Shagjaa G.', title: 'Mechanical Engineer', photo: '/team/g-shagjaa.webp' },
  { name: 'Enkhbaysgalan E.', title: 'Mechanical Engineer', photo: '/team/e-enkhbaysgalan.webp' },
  { name: 'Oyuntamir G.', title: 'QA/QC Engineer', photo: '/team/g-oyuntamir.webp' },
]
