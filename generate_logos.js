const fs = require('fs');
const path = require('path');

const partners = [
    { name: 'VINCI', color: '#183883' },
    { name: 'BOUYGUES', color: '#e65300' },
    { name: 'ADP', color: '#004c99' },
    { name: 'PARIS_HABITAT', color: '#e2001a' },
    { name: 'VERSAILLES', color: '#bfa05d' },
    { name: 'EIFFAGE', color: '#cc0033' },
    { name: 'SNCF', color: '#82be00' },
    { name: 'RATP', color: '#00a39c' },
    { name: 'ENGIE', color: '#00aaff' },
    { name: 'TOTAL', color: '#ed0000' }
];

const dir = path.join(process.cwd(), 'public', 'partners');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

partners.forEach(partner => {
    const svg = `
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="transparent"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" dominant-baseline="middle" text-anchor="middle">
    ${partner.name.replace('_', ' ')}
  </text>
</svg>`;

    fs.writeFileSync(path.join(dir, `${partner.name.toLowerCase().replace('_', '-')}.svg`), svg.trim());
    console.log(`Created logo for ${partner.name}`);
});
