const sharp = require('sharp');

async function processImage() {
  const { data, info } = await sharp('./public/hero_3d_avatar.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // should be 4
  
  // The background is around #232323 (35,35,35). We use tolerance to catch variations.
  const targetR = 35, targetG = 35, targetB = 35;
  const tolerance = 45; // Increased tolerance slightly to catch soft edges
  
  const visited = new Uint8Array(width * height);
  const stack = [
      [0, 0], [width-1, 0], [0, height-1], [width-1, height-1],
      [Math.floor(width/2), 0], [0, Math.floor(height/2)],
      [width-1, Math.floor(height/2)], [Math.floor(width/2), height-1]
  ];
  
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    
    const i = y * width + x;
    if (visited[i]) continue;
    visited[i] = 1;
    
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    
    if (Math.abs(r - targetR) <= tolerance &&
        Math.abs(g - targetG) <= tolerance &&
        Math.abs(b - targetB) <= tolerance) {
        
        data[idx+3] = 0; // Transparent
        // Optionally soften the RGB to prevent dark fringing
        // data[idx] = 0; data[idx+1] = 0; data[idx+2] = 0;
        
        stack.push([x+1, y]);
        stack.push([x-1, y]);
        stack.push([x, y+1]);
        stack.push([x, y-1]);
    }
  }
  
  // A second pass to soften edges (anti-aliasing fringing removal)
  // Not strictly necessary but helps. We will just save it.

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile('./public/hero_3d_avatar_transparent.png');
  console.log('Success');
}

processImage().catch(console.error);
