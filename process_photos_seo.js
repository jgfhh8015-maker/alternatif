const fs = require('fs');
const path = require('path');

const departments = ['78', '02', '60', '95', '91', '75'];
const activities = [
    'cordiste', 'travaux-hauteur', 'acces-difficile',
    'maconnerie-corde', 'securisation-site', 'nettoyage-haute-pression',
    'renovation-patrimoine', 'pose-filets', 'ligne-de-vie', 'toiture-zinc'
];

const sourceDir = path.join(process.cwd(), 'public/Photos 2');
const targetDir = path.join(process.cwd(), 'public/optimized-realisations');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

const newFileNames = [];

files.forEach((file, index) => {
    const dept = departments[index % departments.length];
    const activity = activities[index % activities.length];
    const extra = Math.floor(Math.random() * 1000);

    const ext = path.extname(file);
    const newName = `${activity}-departement-${dept}-${extra}${ext}`;

    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, newName));
    console.log(`Copied ${file} -> ${newName}`);
    newFileNames.push(`/optimized-realisations/${newName}`);
});

const outputContent = `
export const newGalleryImages = ${JSON.stringify(newFileNames, null, 2)};
`;

fs.writeFileSync('new_images_list.js', outputContent);
console.log('List saved to new_images_list.js');
