var toggle = document.getElementById('menu-toggle');
var nav = document.getElementById('mobile-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}
