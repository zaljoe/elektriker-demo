(function () {
  const slider = document.querySelector('.services-slider');
  if (!slider) return;
  const track = slider.querySelector('.services-track');
  const prev  = slider.querySelector('.services-arrow-left');
  const next  = slider.querySelector('.services-arrow-right');
  if (!track || !prev || !next) return;

  function step(dir) {
    track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
  }
  prev.addEventListener('click', function () { step(-1); });
  next.addEventListener('click', function () { step(1); });
})();
