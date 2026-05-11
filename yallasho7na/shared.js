// ─── SHARED UTILITIES ────────────────────────────────────────────────────────

function buildSidebar(nav) {
  let html = '';
  nav.forEach(item => {
    html += `<div class="nav-item" data-view="${item.view}" onclick="loadView('${item.view}')">
      <span class="nav-icon">${item.icon}</span>
      ${item.label}
      ${item.badge ? `<span class="nav-badge ${item.badgeY ? 'y' : ''}">${item.badge}</span>` : ''}
    </div>`;
  });
  document.getElementById('sidebar').innerHTML = html;
}

function setActiveNav(view, nav) {
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.view === view);
  });
  const navItem = nav.find(n => n.view === view);
  if (navItem) document.getElementById('page-title').textContent = navItem.label;
}

function attachChecks() {
  document.querySelectorAll('.check-box').forEach(box => {
    box.onclick = () => box.classList.toggle('checked');
  });
}

function doLogout() {
  window.location.href = '../index.html';
}
