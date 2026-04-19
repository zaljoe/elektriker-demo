function switchTab(tab) {
  var tabService = document.getElementById('tab-service');
  var tabQuote = document.getElementById('tab-quote');
  if (!tabService || !tabQuote) return;
  if (tab === 'service') {
    tabService.style.background = 'var(--brand)';
    tabService.style.color = '#fff';
    tabQuote.style.background = '#fff';
    tabQuote.style.color = '';
  } else {
    tabQuote.style.background = 'var(--brand)';
    tabQuote.style.color = '#fff';
    tabService.style.background = '#fff';
    tabService.style.color = '';
  }
}
