export function setupRenderer(frames) {
  const draw = SVG().addTo('#svg-canvas').size('100%','100%');
  let current = 0;

  function render(idx) {
    current = idx;
    draw.clear();
    draw.svg(frames[current]);
    document.querySelectorAll('.thumb').forEach((el,i) => {
      el.style.borderColor = i===current ? 'blue':'#999';
    });
  }

  return { render, getCurrent: () => current };
}

export function populateTimeline(frames) {
  const tl = document.getElementById('timeline');
  tl.innerHTML = '';
  frames.forEach(svgStr => {
    const div = document.createElement('div');
    div.className='thumb';
    div.innerHTML = svgStr;
    tl.appendChild(div);
  });
}
