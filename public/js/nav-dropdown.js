(function () {
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var closeTimer = null;

    function open()  { clearTimeout(closeTimer); dd.classList.add('is-open'); }
    function close() { closeTimer = setTimeout(function () { dd.classList.remove('is-open'); }, 120); }

    dd.addEventListener('mouseenter', open);
    dd.addEventListener('mouseleave', close);
    dd.addEventListener('focusin',  open);
    dd.addEventListener('focusout', function (e) {
      if (!dd.contains(e.relatedTarget)) close();
    });
  });
})();
