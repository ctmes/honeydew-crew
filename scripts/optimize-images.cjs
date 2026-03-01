#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * Recursively walks a folder (and its subfolders) and replaces images
 * with web-optimized versions using sharp.
 *
 * Usage:
 *   node scripts/optimize-images.cjs <folder> [options]
 *
 * Options:
 *   --max-width <px>    Max width for images (default: 1920)
 *   --quality <1-100>   WebP quality (default: 75)
 *   --format <fmt>      Output format: webp, avif, jpeg (default: webp)
 *   --dry-run           Show what would be done without modifying files
 *   --skip-already      Skip files that are already in the target format
 *
 * Examples:
 *   node scripts/optimize-images.cjs public
 *   node scripts/optimize-images.cjs public --max-width 1200 --quality 80
 *   node scripts/optimize-images.cjs public/events --dry-run
 *   node scripts/optimize-images.cjs public --format avif --quality 60
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// ── CLI Parsing ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

function getArg(name, defaultValue) {
    const idx = args.indexOf(`--${name}`);
    if (idx === -1 || idx + 1 >= args.length) return defaultValue;
    return args[idx + 1];
}

function hasFlag(name) {
    return args.includes(`--${name}`);
}

const inputDir = args.find(a => !a.startsWith('--'));
if (!inputDir) {
    console.error('Usage: node scripts/optimize-images.cjs <folder> [options]');
    console.error('Run with --help for more info.');
    process.exit(1);
}

if (hasFlag('help')) {
    console.log(`
Image Optimization Script
─────────────────────────
Recursively optimizes images in a folder, replacing originals with
compressed web-ready versions.

Usage:
  node scripts/optimize-images.cjs <folder> [options]

Options:
  --max-width <px>    Max width (default: 1920). Images narrower are untouched.
  --quality <1-100>   Compression quality (default: 75 for webp, 60 for avif).
  --format <fmt>      Output format: webp | avif | jpeg (default: webp).
  --dry-run           Preview changes without writing files.
  --skip-already      Skip files already in the target format.

Examples:
  node scripts/optimize-images.cjs public
  node scripts/optimize-images.cjs public --max-width 1200 --quality 80
  node scripts/optimize-images.cjs public/events --format avif
  node scripts/optimize-images.cjs public --dry-run
`);
    process.exit(0);
}

const MAX_WIDTH = parseInt(getArg('max-width', '1920'), 10);
const FORMAT = getArg('format', 'webp');
const DRY_RUN = hasFlag('dry-run');
const SKIP_ALREADY = hasFlag('skip-already');

const QUALITY_DEFAULTS = { webp: 75, avif: 60, jpeg: 80 };
const QUALITY = parseInt(getArg('quality', String(QUALITY_DEFAULTS[FORMAT] || 75)), 10);

const SUPPORTED_INPUTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp', '.gif', '.avif']);
const FORMAT_EXT = { webp: '.webp', avif: '.avif', jpeg: '.jpg' };

const targetExt = FORMAT_EXT[FORMAT];
if (!targetExt) {
    console.error(`Unsupported output format: ${FORMAT}. Use webp, avif, or jpeg.`);
    process.exit(1);
}

const resolvedDir = path.resolve(inputDir);
if (!fs.existsSync(resolvedDir)) {
    console.error(`Directory not found: ${resolvedDir}`);
    process.exit(1);
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getAllImages(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...getAllImages(fullPath));
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (SUPPORTED_INPUTS.has(ext)) {
                // Skip thumbnail files (ending in _thumb)
                const basename = path.basename(entry.name, ext);
                if (basename.endsWith('_thumb')) continue;

                results.push(fullPath);
            }
        }
    }

    return results;
}

function applyFormat(pipeline) {
    switch (FORMAT) {
        case 'webp':
            return pipeline.webp({ quality: QUALITY, effort: 4 });
        case 'avif':
            return pipeline.avif({ quality: QUALITY, effort: 4 });
        case 'jpeg':
            return pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
        default:
            return pipeline.webp({ quality: QUALITY });
    }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
    console.log(`\n🖼  Image Optimization Script`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  Directory:  ${resolvedDir}`);
    console.log(`  Format:     ${FORMAT}`);
    console.log(`  Quality:    ${QUALITY}`);
    console.log(`  Max width:  ${MAX_WIDTH}px`);
    if (DRY_RUN) console.log(`  ⚠️  DRY RUN — no files will be modified`);
    console.log();

    const images = getAllImages(resolvedDir);

    if (images.length === 0) {
        console.log('No images found.');
        return;
    }

    console.log(`Found ${images.length} image(s) to process.\n`);

    let totalOriginal = 0;
    let totalOptimized = 0;
    let processed = 0;
    let skipped = 0;
    let errors = 0;

    for (const filePath of images) {
        const ext = path.extname(filePath).toLowerCase();
        const actualExt = path.extname(filePath); // preserve original case for basename stripping
        const relativePath = path.relative(resolvedDir, filePath);

        // Skip if already in target format and flag is set
        if (SKIP_ALREADY && ext === targetExt) {
            console.log(`  ⏭  ${relativePath} (already ${FORMAT})`);
            skipped++;
            continue;
        }

        const originalSize = fs.statSync(filePath).size;
        totalOriginal += originalSize;

        // Determine output path — use actualExt so basename is stripped correctly
        // (e.g. path.basename('DSCF7811.JPG', '.JPG') → 'DSCF7811')
        const dir = path.dirname(filePath);
        const basename = path.basename(filePath, actualExt);
        const outputPath = path.join(dir, `${basename}${targetExt}`);
        const tempPath = outputPath + '.tmp';

        try {
            if (DRY_RUN) {
                // In dry-run, just report the metadata
                const metadata = await sharp(filePath).metadata();
                const wouldResize = metadata.width > MAX_WIDTH;
                console.log(
                    `  📋 ${relativePath}  ${metadata.width}x${metadata.height}  ${formatBytes(originalSize)}` +
                    (wouldResize ? `  → resize to ${MAX_WIDTH}px wide` : '') +
                    (ext !== targetExt ? `  → convert to ${FORMAT}` : `  → re-compress`)
                );
                processed++;
                continue;
            }

            // Process: resize + convert
            let pipeline = sharp(filePath)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true });

            pipeline = applyFormat(pipeline);

            await pipeline.toFile(tempPath);

            const newSize = fs.statSync(tempPath).size;
            totalOptimized += newSize;

            // If the output format differs from the input, delete the original
            // and rename the temp file to the output name
            if (ext !== targetExt) {
                fs.unlinkSync(filePath); // remove original (e.g. .jpg)
            }
            // Move temp to final (handles same-format in-place replacement too)
            if (fs.existsSync(outputPath) && outputPath !== filePath) {
                fs.unlinkSync(outputPath); // remove old target if it exists
            }
            fs.renameSync(tempPath, outputPath);

            const savings = ((1 - newSize / originalSize) * 100).toFixed(0);
            const arrow = newSize < originalSize ? '↓' : '↑';
            console.log(
                `  ✅ ${relativePath}  ${formatBytes(originalSize)} → ${formatBytes(newSize)}  (${arrow}${Math.abs(savings)}%)`
            );

            processed++;
        } catch (err) {
            console.error(`  ❌ ${relativePath}: ${err.message}`);
            // Clean up temp file on error
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            errors++;
        }
    }

    // ── Summary ─────────────────────────────────────────────────────────────

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📊 Summary`);
    console.log(`  Processed: ${processed}`);
    console.log(`  Skipped:   ${skipped}`);
    console.log(`  Errors:    ${errors}`);
    if (!DRY_RUN && totalOriginal > 0) {
        const saved = totalOriginal - totalOptimized;
        const pct = ((saved / totalOriginal) * 100).toFixed(1);
        console.log(`  Original:  ${formatBytes(totalOriginal)}`);
        console.log(`  Optimized: ${formatBytes(totalOptimized)}`);
        console.log(`  Saved:     ${formatBytes(saved)} (${pct}%)`);
    }
    console.log();
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
