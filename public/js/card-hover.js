(function () {
  var ns = 'http://www.w3.org/2000/svg';

  document.querySelectorAll('.service-card').forEach(function (card) {
    var svg  = document.createElementNS(ns, 'svg');
    var rect = document.createElementNS(ns, 'rect');

    svg.style.cssText = 'position:absolute;inset:-1px;width:calc(100% + 2px);height:calc(100% + 2px);pointer-events:none;overflow:visible;z-index:2;';

    rect.setAttribute('x', '1');
    rect.setAttribute('y', '1');
    rect.setAttribute('rx', '6');
    rect.setAttribute('ry', '6');
    rect.setAttribute('fill', 'none');
    rect.setAttribute('stroke', '#77A9ED');
    rect.setAttribute('stroke-width', '2');
    rect.setAttribute('stroke-linecap', 'round');

    svg.appendChild(rect);
    card.appendChild(svg);

    var perimeter = 0;

    function setSize() {
      var w = card.offsetWidth;
      var h = card.offsetHeight;
      rect.setAttribute('width',  w - 2);
      rect.setAttribute('height', h - 2);
      perimeter = 2 * (w + h);
      return perimeter;
    }

    setSize();
    rect.style.strokeDasharray  = perimeter;
    rect.style.strokeDashoffset = perimeter;
    rect.style.opacity = '0';
    rect.style.transition = 'none';

    card.addEventListener('mouseenter', function () {
      setSize();
      rect.style.transition       = 'none';
      rect.style.strokeDasharray  = perimeter;
      rect.style.strokeDashoffset = perimeter;
      rect.style.opacity          = '1';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          rect.style.transition       = 'stroke-dashoffset 0.65s cubic-bezier(0.22,1,0.36,1)';
          rect.style.strokeDashoffset = '0';
        });
      });
    });

    card.addEventListener('mouseleave', function () {
      rect.style.transition       = 'stroke-dashoffset 0.4s ease-in, opacity 0.4s ease-in';
      rect.style.strokeDashoffset = perimeter;
      rect.style.opacity          = '0';
    });
  });
})();
