// ─── CUSTOMER NAV ─────────────────────────────────────────────────────────────
const nav = [
  { icon: '📦', label: 'Track Order', view: 'track-order' },
  { icon: '📋', label: 'My Orders',   view: 'my-orders' },
  { icon: '⭐', label: 'Rate Delivery',view: 'rate' },
];

// ─── VIEWS ──────────────────────────────────────────────────────────────────
const views = {

'track-order': () => `
<div class="section-title">Track Your Order</div>
<div class="card" style="max-width:600px;margin:0 auto">
  <div class="card-head">📦 ORD-2853 — Heliopolis Ave</div>
  <div class="card-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px">
      <div class="kpi" style="padding:10px"><div class="kpi-label">Order</div><div class="kpi-val" style="font-size:14px;font-family:monospace">ORD-2853</div></div>
      <div class="kpi" style="padding:10px"><div class="kpi-label">ETA</div><div class="kpi-val" style="font-size:14px;color:var(--warn)">~14:48</div></div>
    </div>

    <div class="alert-item alert-y" style="margin-bottom:16px"><div class="alert-dot ad-y"></div>Your driver is 500m away — get ready! 🚐</div>

    <div class="track-bar">
      <div class="track-step done"><div class="track-dot"></div><div class="track-label">Order Placed</div></div>
      <div class="track-step done"><div class="track-dot"></div><div class="track-label">Dispatched</div></div>
      <div class="track-step cur"><div class="track-dot"></div><div class="track-label">On the Way</div></div>
      <div class="track-step"><div class="track-dot"></div><div class="track-label">Delivered</div></div>
    </div>

    <div class="map-mock" style="height:140px;border-radius:8px;margin:14px 0">
      <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 520 140">
        <path d="M0,70 L520,70" stroke="rgba(245,196,0,0.07)" stroke-width="6" fill="none"/>
        <path d="M260,0 L260,140" stroke="rgba(245,196,0,0.07)" stroke-width="6" fill="none"/>
        <path d="M100,60 Q180,55 240,70 Q300,85 360,75" stroke="rgba(245,196,0,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
        <g>
          <circle cx="240" cy="70" r="12" fill="rgba(245,196,0,0.8)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
          <circle cx="240" cy="70" r="12" fill="none" stroke="rgba(245,196,0,0.4)">
            <animate attributeName="r" from="12" to="20" dur="1.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <text x="240" y="74" text-anchor="middle" fill="#0e0e0e" font-size="8" font-family="Cairo,sans-serif" font-weight="700">🚐</text>
        </g>
        <rect x="346" y="60" width="40" height="18" rx="4" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.5)" stroke-width="0.5"/>
        <text x="366" y="73" text-anchor="middle" fill="#22c55e" font-size="8" font-family="Cairo,sans-serif">YOU 📍</text>
        <text x="240" y="50" text-anchor="middle" fill="rgba(245,196,0,0.6)" font-size="9" font-family="Cairo,sans-serif">Sami · V-01 · 500m</text>
      </svg>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;font-size:12px">
      <span style="color:var(--muted)">Driver: <strong style="color:var(--txt)">Sami Hassan</strong></span>
      <span style="color:var(--muted)">Vehicle: <strong style="color:var(--txt)">V-01 · Toyota Van</strong></span>
      <button class="btn btn-ghost" style="font-size:11px;padding:5px 10px">📞 Call Driver</button>
    </div>
  </div>
</div>`,

'my-orders': () => `
<div class="section-title">My Orders</div>
<div class="card">
  <div class="card-body" style="padding:0">
    ${[
      {id:'ORD-2853',item:'Meat box (perishable)',date:'Today',status:'on-the-way',amount:'ج.م 320'},
      {id:'ORD-2839',item:'Electronics package',date:'Today',status:'delivered',amount:'ج.م 480'},
      {id:'ORD-2820',item:'Grocery bundle',date:'Today',status:'delivered',amount:'ج.م 240'},
      {id:'ORD-2780',item:'Books order',date:'Yesterday',status:'delivered',amount:'ج.م 180'},
      {id:'ORD-2760',item:'Household items',date:'May 6',status:'delivered',amount:'ج.م 350'},
    ].map(o => `
    <div class="row-item" style="padding:12px 16px">
      <span style="font-size:18px">${o.status==='delivered'?'📦':'🚐'}</span>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600">${o.id} — ${o.item}</div>
        <div style="font-size:11px;color:var(--muted)">${o.date} · ${o.amount}</div>
      </div>
      <span class="pill ${o.status==='delivered'?'pill-active':'pill-blue'}">${o.status==='delivered'?'Delivered':'On the way'}</span>
    </div>`).join('')}
  </div>
</div>`,

'rate': () => `
<div class="section-title">Rate Your Delivery</div>
<div class="card" style="max-width:500px">
  <div class="card-head">⭐ Rate ORD-2839</div>
  <div class="card-body" style="text-align:center">
    <div style="font-size:36px;margin:16px 0">⭐⭐⭐⭐⭐</div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:14px">Tap to rate your delivery experience</div>
    <textarea style="width:100%;height:70px;padding:10px;background:var(--blk3);border:1px solid var(--border);border-radius:7px;color:var(--txt);font-family:var(--body);resize:none;margin-bottom:12px" placeholder="Leave a comment (optional)..."></textarea>
    <button class="btn btn-y" style="width:100%">Submit Rating</button>
    <div style="font-size:11px;color:var(--muted);margin-top:10px">Your feedback helps improve driver performance scoring</div>
  </div>
</div>`,

};

// ─── INIT ────────────────────────────────────────────────────────────────────
function loadView(view) {
  setActiveNav(view, nav);
  document.getElementById('content').innerHTML = views[view] ? views[view]() : '<p style="color:var(--muted)">Coming soon.</p>';
  attachChecks();
}

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar(nav);
  loadView('track-order');
});
