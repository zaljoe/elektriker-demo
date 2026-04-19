document.addEventListener('click', function (e) {
  const summary = e.target.closest('summary.faq-summary');
  if (!summary) return;
  const clicked = summary.closest('details');
  if (!clicked) return;
  document.querySelectorAll('details[open]').forEach(function (d) {
    if (d !== clicked) d.removeAttribute('open');
  });
});
