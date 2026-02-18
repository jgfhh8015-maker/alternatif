const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(process.cwd(), 'public', 'Photos');
const outputDir = path.join(process.cwd(), 'public', 'optimized-realisations');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// SEO-friendly names mapping (round robin assignment)
const seoNames = [
  'cordiste-monument-historique-paris',
  'travaux-hauteur-maintenance-hlm',
  'nettoyage-vitres-acces-difficile',
  'securisation-site-filet-antichute',
  'maconnerie-sur-corde-rejointoiement',
  'purge-facade-urgence-78-91',
  'intervention-cordiste-batiment-industriel',
  'pose-bache-evenementiel-hauteur',
  'expert-travaux-acrobatiques-ile-de-france',
  'ravalement-facade-corde-versailles',
  'inspection-toiture-acces-difficile',
  'pose-pics-anti-pigeon-cordiste',
  'nettoyage-haute-pression-facade',
  'installation-ligne-vie-securite',
  'reparation-fuite-acces-difficile'
];

const files = fs.readdirSync(inputDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Found ${files.length} images to process...`);

files.forEach((file, index) => {
  const inputPath = path.join(inputDir, file);
  const seoName = seoNames[index % seoNames.length];
  const outputPath = path.join(outputDir, `${seoName}.webp`);
  
  try {
    // Resize to max 1200px width and convert to WebP using ffmpeg (since sharp/imagemagick might not be available)
    // Using ffmpeg which is commonly available or try a simpler copy if tools missing
    // Actually, let's use a simple cp for now and rename, assuming optimized upload later or use a known tool if available.
    // Better: use sips on Mac to resize and convert!
    
    execSync(`sips -s format webp -Z 1200 "${inputPath}" --out "${outputPath}"`);
    console.log(`Optimized: ${file} -> ${seoName}.webp`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    // Fallback copy if sips webp fails (older macs) - try jpg
    try {
        const fallbackPath = path.join(outputDir, `${seoName}.jpg`);
        execSync(`sips -s format jpeg -Z 1200 "${inputPath}" --out "${fallbackPath}"`);
        console.log(`Fallback Optimized (JPG): ${file} -> ${seoName}.jpg`);
    } catch (e) {
        console.error('Fatal error processing image');
    }
  }
});
