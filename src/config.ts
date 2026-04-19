// ─── Site-wide configuration ───────────────────────────────────────────────
// Replace all placeholder values before going live.

export const COMPANY = {
  name:        'JM EL',
  tagline:     'Licensierad, Försäkrad & Lokal',
  phone:       '073-310 55 45',
  phoneTel:    'tel:+46733105545',
  email:       'info@johan.martinsson.se',
  city:        'Göteborg',
  region:      'Västra Götaland',
  address:     'Stampgatan 14',
  zip:         '411 01',
  license:     '[LICENS #]',
  insurance:   'Fullt försäkrad',
  years:       '20',
  jobs:        '3 200',
  rating:      '4.9',
  reviewCount: '148',
  hours:       'Mån–Fre 07:00–18:00 · Lör–Sön Stängt',
  emergency:   'Jour dygnet runt',
  googleMaps:  'https://maps.google.com/?q=Göteborg+elektriker',
};

export const SERVICES = [
  { slug: 'residential-wiring',     title: 'Elinstallation & Ominstallation',       icon: 'home',     short: 'Säker, regelsäker elinstallation för gamla och nya hus.' },
  { slug: 'panel-upgrades',         title: 'Centralbyten & Elreparationer',          icon: 'zap',      short: 'Uppgradera din central innan den blir en fara.' },
  { slug: 'ev-charger-installation',title: 'EV-laddare Installation',                icon: 'car',      short: 'Level 2-laddare installerade snabbt och korrekt hemma.' },
  { slug: 'lighting-installation',  title: 'Belysningsinstallation',                 icon: 'sun',      short: 'Inomhus- och utomhusbelysning som imponerar och håller.' },
  { slug: 'emergency-electrical',   title: 'Akut Eljour',                            icon: 'alert',    short: 'Jour dygnet runt — vi svarar när andra inte gör det.' },
  { slug: 'commercial-electrical',  title: 'Kommersiella Eltjänster',                icon: 'building', short: 'Pålitlig el för kontor, butiker och lager.' },
];

export const AREAS = [
  'Göteborg', 'Mölndal', 'Partille', 'Kungsbacka',
  'Kungälv', 'Lerum', 'Härryda', 'Stenungsund',
  'Öckerö', 'Alingsås',
];
