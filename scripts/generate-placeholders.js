const fs = require('fs');
const path = require('path');

const dir = path.join('public', 'gallery');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const labels = [
  'Sedan — Ceramic Film',
  'SUV — 20% VLT',
  'Commercial Storefront',
  'Sports Car — 35% VLT',
  'Residential — Sunroom',
  'Truck — Full Package',
  'Luxury SUV — Nano-Ceramic',
  'Commercial Office',
  'Custom — Decorative Film',
];

labels.forEach((label, i) => {
  const num = String(i + 1).padStart(2, '0');
  const svgContent = [
    "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>",
    "  <defs>",
    "    <radialGradient id='g" + num + "' cx='50%' cy='50%' r='60%'>",
    "      <stop offset='0%' stop-color='#1A1A1A'/>",
    "      <stop offset='100%' stop-color='#0A0A0A'/>",
    "    </radialGradient>",
    "  </defs>",
    "  <rect width='1200' height='800' fill='url(#g" + num + ")'/>",
    "  <rect x='540' y='340' width='120' height='1' fill='rgba(255,255,255,0.12)'/>",
    "  <text x='600' y='380' font-family='system-ui,sans-serif' font-size='14' fill='rgba(255,255,255,0.25)' text-anchor='middle' letter-spacing='3'>" + label.toUpperCase() + "</text>",
    "  <text x='600' y='420' font-family='system-ui,sans-serif' font-size='11' fill='rgba(255,255,255,0.1)' text-anchor='middle' letter-spacing='2'>PLACEHOLDER - REPLACE WITH REAL PHOTO</text>",
    "  <rect x='540' y='440' width='120' height='1' fill='rgba(255,255,255,0.06)'/>",
    "</svg>"
  ].join('\n');

  fs.writeFileSync(path.join(dir, 'work-' + num + '.svg'), svgContent);
  console.log('Created work-' + num + '.svg');
});
