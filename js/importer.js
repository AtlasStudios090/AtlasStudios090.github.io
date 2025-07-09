export function setupImporter(onLoad) {
  const input = document.getElementById('import-svg');
  input.addEventListener('change', async e => {
    const files = Array.from(e.target.files).slice(0,10);
    const frames = [];
    for (let f of files) {
      const text = await f.text();
      frames.push(text);
    }
    onLoad(frames);
  });
}
