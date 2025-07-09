export function setupControls({ renderer, frames, onInterp, onPreview }) {
  document.getElementById('prev-btn').addEventListener('click', ()=>{
    const idx = renderer.getCurrent();
    renderer.render((idx-1+frames.length)%frames.length);
  });
  document.getElementById('next-btn').addEventListener('click', ()=>{
    const idx = renderer.getCurrent();
    renderer.render((idx+1)%frames.length);
  });
  document.getElementById('interp-btn').addEventListener('click', ()=> onInterp());
  document.getElementById('preview-btn').addEventListener('click', ()=> onPreview());
}
