import * as flubber from 'flubber';

export function doMorph(frames, steps=1) {
  const morphed = [];
  for (let i=0; i<frames.length-1; i++) {
    const a = new DOMParser().parseFromString(frames[i],'image/svg+xml');
    const b = new DOMParser().parseFromString(frames[i+1],'image/svg+xml');
    const pathA = a.querySelector('path')?.getAttribute('d');
    const pathB = b.querySelector('path')?.getAttribute('d');
    morphed.push(frames[i]);
    if (pathA && pathB) {
      const interp = flubber.interpolate(pathA,pathB,{maxSegmentLength:0.1});
      for (let s=1; s<=steps; s++) {
        const d = interp(s/(steps+1));
        const doc = a.cloneNode(true);
        doc.querySelector('path').setAttribute('d',d);
        morphed.push(new XMLSerializer().serializeToString(doc));
      }
    }
  }
  morphed.push(frames[frames.length-1]);
  return morphed;
}
