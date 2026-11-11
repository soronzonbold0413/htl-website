// All website text lives here. Edit this file to change content without touching the layout.

// `page: 'about'` links to the About us page; `section` links to a part of the home page
export const nav = [
  { page: 'about', label: 'About us' },
  { section: '#services', label: 'Services' },
  { section: '#projects', label: 'Projects' },
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
    { value: 500, suffix: '~', label: 'water distribution kiosks automated' },
    { value: 250, suffix: '~', label: 'urban and rural sites with telecom infrastructure work' },
    { value: 30, suffix: '+', label: 'renewable energy contracts completed' },
    { value: 60, suffix: '~', label: 'private residential houses built' },
  ],
}

export const services = [
  {
    code: 'TELECOM',
    icon: 'tower',
    title: 'Telecom Infrastructure',
    text: 'We install, repair and maintain mobile network infrastructure and equipment for operators across the city and countryside.',
    tags: ['Tower sites', 'Fiber & network', 'Maintenance'],
  },
  {
    code: 'BUILD',
    icon: 'building',
    title: 'Construction & Maintenance',
    text: 'Licensed to build and maintain low- and medium-complexity buildings and structures, including interior lighting, power supply and grounding.',
    tags: ['Licensed builder', 'Electrical', 'Grounding'],
  },
  {
    code: 'ENERGY',
    icon: 'energy',
    title: 'Renewable Energy',
    text: 'Off-grid solar and wind power systems: solution design, equipment supply, and installation by our professional engineering team.',
    tags: ['Solar', 'Wind', 'Off-grid'],
  },
  {
    code: 'CONTROL',
    icon: 'control',
    title: 'Automation',
    text: 'Complete monitoring, control and integration solutions built on SCADA, PLC and custom software, delivered to a professional standard.',
    tags: ['SCADA', 'PLC', 'Software'],
  },
]

export const projects = [
  {
    id: 'p-water',
    short: 'Smart water',
    eyebrow: 'Smart water · Automation',
    title: 'Supply and Installation of Ger Area Smart Water Kiosk Upgrade',
    meta: [
      ['Client', 'MCA-Mongolia'],
      ['Partner', 'Water Supply and Sewerage Authority of Ulaanbaatar (USUG)'],
      ['Location', 'Ger districts, Ulaanbaatar'],
      ['Scope', 'Equipment supply, installation, automation'],
    ],
    text: 'We supplied and installed the equipment that turned manually operated water kiosks into smart, automated distribution points. Residents can now buy water any time, with remote monitoring and control for the operator.',
    layout: 'grid',
    images: [
      ['/img/mca-6.jpg', 'Upgraded smart water kiosk building in a ger district'],
      ['/img/mca-1.jpg', 'HTL engineers wiring the kiosk control cabinet'],
      ['/img/mca-4.jpg', 'Engineer explaining the kiosk control panel'],
      ['/img/mca-3.jpg', 'Kiosk monitoring dashboard on a tablet'],
      ['/img/mca-7.jpg', 'Residents filling water containers at the kiosk'],
      ['/img/mca-5.jpg', 'Kiosk operator inside the upgraded pump room'],
      ['/img/mca-8.jpg', 'HTL engineer in front of a water kiosk'],
      ['/img/mca-2.jpg', 'Engineers commissioning the control cabinet'],
      ['/img/_x9a0503.jpg', 'Technician checking a pressure gauge on the water line'],
    ],
  },
  {
    id: 'p-teca',
    short: 'TEC-A Tolgoit',
    eyebrow: 'Telecom · Network',
    title: 'TEC-A Tolgoit Subcenter: Communication Line and Network Work',
    meta: [
      ['Client', "Governor's Office of the Capital City (Ulaanbaatar)"],
      ['Location', 'Tolgoit subcenter, Ulaanbaatar'],
      ['Scope', 'Communication lines and network'],
    ],
    text: "HTL carried out the communication line and network installation for the TEC-A building at the new Tolgoit subcenter, part of the capital's program to develop satellite city centers.",
    layout: 'four',
    flip: true,
    images: [
      ['/img/tec-1.jpg', 'Aerial rendering of the TEC-A building at Tolgoit subcenter'],
      ['/img/tec-4.jpg', 'TEC-A building under construction'],
      ['/img/tec-2.jpg', 'Rendering of the TEC-A building entrance'],
      ['/img/tec-3.jpg', 'Rendering of the TEC-A building side view'],
    ],
  },
  {
    id: 'p-ot',
    short: 'Khanbogd',
    eyebrow: 'Construction · Fabrication',
    title: 'Supply and Fabrication of Welding Service in Khanbogd Soum',
    meta: [
      ['Client', 'Oyu Tolgoi LLC'],
      ['Location', 'Khanbogd soum, Umnugovi province'],
      ['Scope', 'Fabrication and welding services'],
    ],
    text: 'HTL supplied fabrication and welding services in Khanbogd soum for Oyu Tolgoi, one of the largest copper mines in the world.',
    layout: 'one',
    images: [['/img/ot-1.jpg', 'Oyu Tolgoi industrial site in Khanbogd soum']],
  },
]

// Partner logos in priority order. The first 5 are shown large; the rest scroll in a strip.
export const partnerLogos = Array.from({ length: 21 }, (_, i) => `/logos/${i + 1}.png`)
export const featuredPartnerCount = 5

export const contact = {
  phone: '+976 7711-8880',
  phoneHref: 'tel:+97677118880',
  email: 'contact@htl.mn',
  address:
    'Office 604, Building 41/3, Architect B. Chimed Street, 8th khoroo, Sukhbaatar district, Ulaanbaatar 14191, Mongolia',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Architecture+B.Chimed+street+41%2F3+Sukhbaatar+district+Ulaanbaatar',
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
