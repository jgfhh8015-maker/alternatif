const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(process.cwd(), 'public/optimized-realisations');

if (!fs.existsSync(targetDir)) {
    console.log('Directory not found');
    process.exit(1);
}

const files = fs.readdirSync(targetDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Found ${files.length} images to optimize...`);

files.forEach(file => {
    const filePath = path.join(targetDir, file);

    try {
        // Convert to standardized JPEG first
        // Resize to max 1200px width/height and set initial quality to 70% // medium
        // sips is available on macOS

        execSync(`sips -Z 1200 -s format jpeg -s formatOptions 70 "${filePath}" --out "${filePath}"`);

        let stats = fs.statSync(filePath);
        let quality = 70;
        let width = 1200;

        // Loop to reduce size if > 100KB (102400 bytes)
        while (stats.size > 102400 && quality > 20) {
            quality -= 10;
            if (quality < 50) width = 800; // Resize smaller if quality gets too low

            // console.log(`  > ${file} is ${Math.round(stats.size/1024)}KB. Retrying with Q=${quality}, W=${width}...`);

            execSync(`sips -Z ${width} -s format jpeg -s formatOptions ${quality} "${filePath}" --out "${filePath}"`);
            stats = fs.statSync(filePath);
        }

        console.log(`✓ ${file}: ${Math.round(stats.size / 1024)}KB`);
    } catch (err) {
        console.error(`Error optimizing ${file}:`, err.message);
    }
});

console.log('Optimization complete.');
