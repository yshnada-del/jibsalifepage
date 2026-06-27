import fs from 'node:fs';
import { PNG } from 'pngjs';

const input = 'C:/tmp/jibsalife-figma-page-full.png';
const output = 'public/sections/wireframe.png';
const crop = { x: 0, y: 18845, width: 1920, height: 1080 };

fs.createReadStream(input)
  .pipe(new PNG())
  .on('parsed', function () {
    const out = new PNG({ width: crop.width, height: crop.height });

    for (let y = 0; y < crop.height; y += 1) {
      for (let x = 0; x < crop.width; x += 1) {
        const srcIdx = ((crop.y + y) * this.width + (crop.x + x)) * 4;
        const dstIdx = (y * crop.width + x) * 4;
        const r = this.data[srcIdx];
        const g = this.data[srcIdx + 1];
        const b = this.data[srcIdx + 2];
        const a = this.data[srcIdx + 3];

        out.data[dstIdx] = r;
        out.data[dstIdx + 1] = g;
        out.data[dstIdx + 2] = b;
        out.data[dstIdx + 3] = r <= 30 && g <= 30 && b <= 30 ? 0 : a;
      }
    }

    out.pack().pipe(fs.createWriteStream(output));
  });
