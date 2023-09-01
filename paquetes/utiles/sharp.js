const sharp = require('sharp');

sharp('original.webp')
    .resize(80)
    .toFormat('png')
    .toFile('resized.png');