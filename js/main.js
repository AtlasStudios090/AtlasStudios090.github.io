import { setupImporter } from './importer.js';
import { setupRenderer, populateTimeline } from './renderer.js';
import { setupControls } from './controls.js';
import { doMorph } from './interpolator.js';

let frames = [];
let renderer;

setupImporter(loaded => {
  frames = loaded;
  populateTimeline(frames);
  renderer = setupRenderer(frames);
  renderer.render(0);

  setupControls({ 
    renderer, frames, 
    onInterp: () => {
      frames = doMorph(frames, parseInt(prompt('¿Cuántos pasos?'),10)||1);
      populateTimeline(frames);
      renderer = setupRenderer(frames);
      renderer.render(0);
    },
    onPreview: () => {
      let i=0;
      const iv = setInterval(()=>{
        renderer.render(i++%frames.length);
      },500);
      setTimeout(()=> clearInterval(iv), frames.length*500);
    }
  });
});
