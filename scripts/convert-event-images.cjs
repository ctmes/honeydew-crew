const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const EVENTS_DIR = path.join(__dirname, '../public/events');
const MANIFEST_PATH = path.join(EVENTS_DIR, 'manifest.json');

// Configuration
const MAX_WIDTH_FULL = 1920;
const THUMB_HEIGHT = 400;

async function processImages() {
    if (!fs.existsSync(EVENTS_DIR)) {
        console.log('Events directory not found.');
        return;
    }

    const eventFolders = fs.readdirSync(EVENTS_DIR).filter(file => {
        return fs.statSync(path.join(EVENTS_DIR, file)).isDirectory();
    });

    const manifest = {};

    for (const folder of eventFolders) {
        console.log(`\nProcessing folder: ${folder}`);
        const folderPath = path.join(EVENTS_DIR, folder);
        const files = fs.readdirSync(folderPath);

        const images = new Set();

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const ext = path.extname(file).toLowerCase();

            // Skip non-image files
            if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

            // Skip existing thumbnails from processing list
            if (file.endsWith('_thumb.webp')) continue;

            const basename = path.basename(file, ext);
            const outputFilename = `${basename}.webp`;
            const outputThumbFilename = `${basename}_thumb.webp`;
            const outputPath = path.join(folderPath, outputFilename);
            const outputThumbPath = path.join(folderPath, outputThumbFilename);

            try {
                // 1. Process Main Image (Full Size)
                // If it's a JPG/PNG, convert it. If it's a WebP, only resize if it's the original large one.
                // To keep it simple: we always ensure the target webp exists and is optimized.

                // However, if input is already the target webp (outputPath === filePath), we need to be careful not to read/write same file simultaneously if resizing in place.
                // Sharp handles buffers so it is often fine, but temp file is safer.

                console.log(`  Processing: ${file}`);

                // Create Optimized Full Version
                await sharp(filePath)
                    .resize({ width: MAX_WIDTH_FULL, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath + '.tmp');

                fs.renameSync(outputPath + '.tmp', outputPath);

                // Create Thumbnail Version
                await sharp(filePath)
                    .resize({ height: THUMB_HEIGHT })
                    .webp({ quality: 70 })
                    .toFile(outputThumbPath);

                // Add to manifest
                images.add(outputFilename);

                // If input was jpg/png, delete it
                if (ext !== '.webp' && fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log(`  Deleted original: ${file}`);
                }

            } catch (error) {
                console.error(`  Error processing ${file}:`, error);
            }
        }

        if (images.size > 0) {
            manifest[folder] = Array.from(images);
        }
    }

    // Write manifest
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log('\nManifest generated at:', MANIFEST_PATH);
}

processImages();
