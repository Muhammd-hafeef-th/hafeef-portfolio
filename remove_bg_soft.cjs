const sharp = require('sharp');

async function processImage() {
  const { data, info } = await sharp('./public/hero_avatar_dark.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  
  // Estimate background color from top-left corner
  const bgR = data[0], bgG = data[1], bgB = data[2];
  
  const visited = new Uint8Array(width * height);
  const stack = [[0, 0], [width-1, 0], [0, height-1], [width-1, height-1]];
  
  const CORE_TOLERANCE = 15;
  const EDGE_TOLERANCE = 55;

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    
    const i = y * width + x;
    if (visited[i]) continue;
    
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    
    const dist = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
    
    if (dist < EDGE_TOLERANCE) {
        visited[i] = 1;
        
        if (dist < CORE_TOLERANCE) {
            data[idx+3] = 0; // Fully transparent
        } else {
            // Soft edge
            const alphaRatio = (dist - CORE_TOLERANCE) / (EDGE_TOLERANCE - CORE_TOLERANCE);
            const currentAlpha = data[idx+3];
            data[idx+3] = Math.min(currentAlpha, Math.floor(255 * alphaRatio));
            
            // Also color correct the pixel to remove the dark halo
            // By pushing its RGB towards the character's likely true color or simply letting it blend
        }
        
        stack.push([x+1, y]);
        stack.push([x-1, y]);
        stack.push([x, y+1]);
        stack.push([x, y-1]);
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile('./public/hero_3d_avatar_transparent.png');
  console.log('Success');
}

processImage().catch(console.error);
