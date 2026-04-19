function loadMap(wrapper) {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86191.23!2d11.97456!3d57.70716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8ce1a6b0b0a3%3A0x8bc6de7d3e7ca2c!2sG%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1700000000000';
  iframe.width = '100%';
  iframe.height = '340';
  iframe.style.cssText = 'border:0;display:block;';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.title = 'Serviceområde Göteborg';
  wrapper.style.cursor = 'default';
  wrapper.onclick = null;
  wrapper.innerHTML = '';
  wrapper.appendChild(iframe);
}
