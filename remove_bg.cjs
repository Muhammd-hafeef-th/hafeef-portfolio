const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('./public/hero_3d_avatar.png')
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
      const tolerance = 35; // increased tolerance since AI backgrounds have noise
      
      // We will sample the top-left pixel as the background color
      const bgR = this.data[0];
      const bgG = this.data[1];
      const bgB = this.data[2];
      
      const width = this.width;
      const height = this.height;
      const visited = new Uint8Array(width * height);
      
      const stack = [[0, 0], [width-1, 0], [0, height-1], [width-1, height-1]];
      
      while(stack.length > 0) {
          const [x, y] = stack.pop();
          if (x < 0 || x >= width || y < 0 || y >= height) continue;
          
          const i = y * width + x;
          if (visited[i]) continue;
          
          const idx = i << 2;
          const r = this.data[idx];
          const g = this.data[idx+1];
          const b = this.data[idx+2];
          
          if (Math.abs(r - bgR) <= tolerance &&
              Math.abs(g - bgG) <= tolerance &&
              Math.abs(b - bgB) <= tolerance) {
              
              visited[i] = 1;
              this.data[idx+3] = 0; // Make transparent
              
              stack.push([x+1, y]);
              stack.push([x-1, y]);
              stack.push([x, y+1]);
              stack.push([x, y-1]);
          } else {
              // Not background, mark as visited so we don't check again
              visited[i] = 1;
          }
      }
      
      this.pack().pipe(fs.createWriteStream('./public/hero_3d_avatar_transparent.png'))
          .on('finish', () => console.log('Successfully created hero_3d_avatar_transparent.png'));
  });
