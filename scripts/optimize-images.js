import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const INPUT_DIR = './public/assets';
const OUTPUT_DIR = './public/assets';

async function optimizeImages() {
  try {
    // Ensure output directory exists
    if (!existsSync(OUTPUT_DIR)) {
      await mkdir(OUTPUT_DIR, { recursive: true });
    }

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp|svg)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    for (const file of imageFiles) {
      const inputPath = join(INPUT_DIR, file);
      const ext = extname(file).toLowerCase();
      const baseName = file.replace(ext, '');
      const outputPath = join(OUTPUT_DIR, `${baseName}.webp`);

      // Skip if already WebP
      if (ext === '.webp') {
        console.log(`✓ ${file} (already optimized)`);
        continue;
      }

      const stats = await stat(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      // Optimize based on image type
      if (ext === '.svg') {
        // SVGs don't need conversion, just copy
        console.log(`✓ ${file} (SVG, no optimization needed)`);
        continue;
      }

      await sharp(inputPath)
        .webp({
          quality: 80,
          effort: 6, // Maximum compression effort
          nearLossless: false,
          smartSubsample: true,
          mixed: true,
        })
        .toFile(outputPath);

      const optimizedStats = await stat(outputPath);
      const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
      const savings = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file} → ${baseName}.webp`);
      console.log(`  Original: ${originalSize} KB → Optimized: ${optimizedSize} KB (${savings}% smaller)`);
    }

    console.log('\n✨ Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();