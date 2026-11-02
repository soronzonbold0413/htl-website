// All website text lives here. Edit this file to change content without touching the layout.

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#partners', label: 'Partners' },
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
    title: 'Supply of Fabrication Welding Service of Khanbogd Soum',
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
