const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function processImage() {
  console.log('Starting AI background removal... This may take a moment as it downloads the model on the first run.');
  try {
    const imagePath = './public/hero_avatar_dark.png'; // The original image with the correct face
    
    // removeBackground returns a Blob
    const blob = await removeBackground(imagePath);
    
    // Convert Blob to Buffer
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Save the perfect transparent PNG
    fs.writeFileSync('./public/hero_3d_avatar_transparent.png', buffer);
    console.log('Successfully created flawless hero_3d_avatar_transparent.png');
  } catch (error) {
    console.error('Error during background removal:', error);
  }
}

processImage();
