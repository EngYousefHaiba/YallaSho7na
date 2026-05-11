// ─── DRIVER NAV ──────────────────────────────────────────────────────────────
const nav = [
  { icon: '📋', label: 'My Route',      view: 'my-route' },
  { icon: '✅', label: 'Deliver',       view: 'deliver' },
  { icon: '🔍', label: 'Pre-Trip Check',view: 'pretrip' },
  { icon: '💰', label: 'COD Ledger',    view: 'cod' },
  { icon: '🆘', label: 'Incident',      view: 'incident' },
];

// ─── VIEWS ──────────────────────────────────────────────────────────────────
const views = {

'my-route': () => `
<div class="section-title">My Route Today — V-01 Toyota Van</div>
<div class="two-col">
  <div>
    <div class="kpi-row" style="grid-template-columns:repeat(3,1fr)">
      <div class="kpi"><div class="kpi-label">Stops</div><div class="kpi-val">12</div><div class="kpi-sub">5 done · 7 left</div></div>
      <div class="kpi"><div class="kpi-label">Distance</div><div class="kpi-val">38km</div><div class="kpi-sub">22km remaining</div></div>
      <div class="kpi"><div class="kpi-label">ETA End</div><div class="kpi-val">16:30</div><div class="kpi-sub">On schedule</div></div>
    </div>
    <div class="card">
      <div class="card-head">📍 Stop Sequence</div>
      <div class="card-body" style="padding-top:8px">
        <div class="stop-line">
          ${[
            {n:'Depot Load',d:'QR verified · 640kg · 08:15',s:'done'},
            {n:'Stop 1 — Al-Azhar St',d:'Delivered · Signed · COD ج.م 240',s:'done'},
            {n:'Stop 2 — Nasr City Mall',d:'Delivered · Photo proof · VIP',s:'done'},
            {n:'Stop 3 — Abbassiya',d:'Delivered · Standard parcel',s:'done'},
            {n:'Stop 4 — Heliopolis Ave',d:'Perishable · VIP · ⚠ ETA late',s:'cur'},
            {n:'Stop 5 — Rehab City',d:'Standard · ETA ~15:30',s:'next'},
            {n:'Stop 6 — Heliopolis Mall',d:'2 parcels · ETA ~16:00',s:'next'},
          ].map(s => `
          <div class="stop-row">
            <div class="stop-dot ${s.s}">${s.s==='done'?'✓':s.s==='cur'?'●':'○'}</div>
            <div class="stop-connector"></div>
            <div class="stop-info">
              <div class="stop-name">${s.n}</div>
              <div class="stop-detail">${s.d}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-head">⚡ Dynamic Rerouting</div>
      <div class="card-body">
        <div class="alert-item alert-r" style="margin-bottom:10px"><div class="alert-dot ad-r"></div>V-02 breakdown — 5 stops added to your route</div>
        <div style="font-size:12px;color:var(--muted);margin-bottom:12px">New stops inserted after current position. ETAs recalculated.</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-y" style="flex:1">Accept Reroute</button>
          <button class="btn btn-ghost" style="flex:1">Call Dispatcher</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">🕐 Break Manager</div>
      <div class="card-body">
        <div class="kpi" style="margin-bottom:10px"><div class="kpi-label">Driving Time</div><div class="kpi-val">3h 20m</div><div class="kpi-sub">Break required after 40 min</div></div>
        <div class="prog-bar" style="height:8px;margin-bottom:8px"><div class="prog-fill r" style="width:83%"></div></div>
        <div style="font-size:11px;color:var(--warn)">⚠ Mandatory 30-min break due at 4h mark (Labour Law)</div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">💨 Speed Advisor</div>
      <div class="card-body">
        <div class="kpi"><div class="kpi-label">Recommended Speed</div><div class="kpi-val">80 km/h</div><div class="kpi-sub">V-01 at 64% load — optimal for fuel economy</div></div>
      </div>
    </div>
  </div>
</div>`,

'deliver': () => `
<div class="section-title">Deliver — Stop 4: Heliopolis Ave</div>
<div class="two-col">
  <div>
    <div class="card">
      <div class="card-head">📦 Order Details</div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
          <div class="kpi" style="padding:10px"><div class="kpi-label">Order ID</div><div class="kpi-val" style="font-size:14px;font-family:monospace">ORD-2853</div></div>
          <div class="kpi" style="padding:10px"><div class="kpi-label">Type</div><div class="kpi-val" style="font-size:14px">🥩 Perishable</div></div>
          <div class="kpi" style="padding:10px"><div class="kpi-label">Customer</div><div class="kpi-val" style="font-size:14px">Sara M.</div></div>
          <div class="kpi" style="padding:10px"><div class="kpi-label">COD Amount</div><div class="kpi-val" style="font-size:14px;color:var(--success)">ج.م 320</div></div>
        </div>
        <div class="alert-item alert-y"><div class="alert-dot ad-y"></div>VIP + Perishable — handle with care, deliver immediately</div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">🔍 QR Code Verification</div>
      <div class="card-body" style="text-align:center">
        <div style="width:80px;height:80px;background:var(--blk3);border:2px dashed var(--border2);border-radius:8px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:28px">📷</div>
        <div style="font-size:12px;color:var(--muted);margin-bottom:12px">Scan parcel QR code to verify before confirming delivery</div>
        <button class="btn btn-y" style="width:100%">📷 Scan QR Code</button>
        <div style="margin-top:8px;font-size:11px;color:var(--success)">✅ QR Match: ORD-2853 verified</div>
      </div>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-head">✍️ Digital Signature</div>
      <div class="card-body">
        <div style="width:100%;height:100px;background:var(--blk3);border:1px dashed var(--border2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--muted);margin-bottom:10px">Customer signs here</div>
        <button class="btn btn-ghost" style="width:100%;margin-bottom:8px">Clear Signature</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head">📸 Photo Evidence</div>
      <div class="card-body">
        <div style="width:100%;height:90px;background:var(--blk3);border:1px dashed var(--border2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:10px;cursor:pointer">📷</div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:10px">Photo will be GPS-tagged and timestamped automatically</div>
        <button class="btn btn-y" style="width:100%">✅ Confirm Delivery</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head">📡 Offline Queue</div>
      <div class="card-body">
        <div style="font-size:12px;color:var(--muted);margin-bottom:6px">Poor signal? Deliveries saved locally and synced when back online.</div>
        <div style="display:flex;align-items:center;gap:8px"><div class="live-dot" style="background:var(--success)"></div><span style="font-size:12px">Signal OK — 0 pending sync</span></div>
      </div>
    </div>
  </div>
</div>`,

'pretrip': () => `
<div class="section-title">Pre-Trip Safety Inspection — V-01</div>
<div class="two-col">
  <div class="card">
    <div class="card-head">✅ Safety Checklist</div>
    <div class="card-body" style="padding-top:8px">
      ${[
        'Tires — pressure and condition',
        'Brakes — test in depot yard',
        'Headlights and indicators',
        'Engine oil level',
        'Coolant level',
        'Windshield — clean, no cracks',
        'Seatbelt functional',
        'Fire extinguisher on board',
        'Load secured — no shift',
        'QR scanner charged',
      ].map((item,i) => `
      <div class="check-row">
        <div class="check-box ${i<7?'checked':''}" onclick="this.classList.toggle('checked')">${i<7?'✓':''}</div>
        <span>${item}</span>
      </div>`).join('')}
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-head">📊 Inspection Status</div>
      <div class="card-body">
        <div class="kpi" style="margin-bottom:10px"><div class="kpi-label">Items Checked</div><div class="kpi-val">7 / 10</div><div class="kpi-sub">Complete all to unlock route start</div></div>
        <div class="prog-bar" style="height:8px;margin-bottom:14px"><div class="prog-fill" style="width:70%"></div></div>
        <button class="btn btn-ghost" style="width:100%;margin-bottom:8px;cursor:not-allowed;opacity:0.5">🔒 Start Route (Complete checklist first)</button>
        <div style="font-size:11px;color:var(--muted)">Checklist submitted and timestamped to your shift record.</div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">🆘 Report Incident</div>
      <div class="card-body">
        <select style="width:100%;padding:9px;background:var(--blk3);border:1px solid var(--border);border-radius:7px;color:var(--txt);margin-bottom:10px;font-family:var(--body)">
          <option>Select incident type</option>
          <option>Minor accident</option>
          <option>Vehicle breakdown</option>
          <option>Flat tire</option>
          <option>Other</option>
        </select>
        <button class="btn btn-y" style="width:100%">🆘 Submit Incident Report</button>
      </div>
    </div>
  </div>
</div>`,

'cod': () => `
<div class="section-title">Cash on Delivery Ledger</div>
<div class="kpi-row" style="grid-template-columns:repeat(3,1fr)">
  <div class="kpi"><div class="kpi-label">Total Collected</div><div class="kpi-val">ج.م 1,280</div><div class="kpi-sub">From 5 stops today</div></div>
  <div class="kpi"><div class="kpi-label">Pending Stops</div><div class="kpi-val" style="color:var(--warn)">7</div><div class="kpi-sub">Estimated ج.م 890 remaining</div></div>
  <div class="kpi"><div class="kpi-label">Shift Handover</div><div class="kpi-val">18:00</div><div class="kpi-sub">Return to depot with receipts</div></div>
</div>
<div class="card">
  <div class="card-head">💰 COD Log</div>
  <div class="card-body" style="padding:0">
    ${[
      {ord:'ORD-2820',addr:'Al-Rehab',amt:240,status:'collected'},
      {ord:'ORD-2831',addr:'Giza District',amt:180,status:'failed-rtb'},
      {ord:'ORD-2839',addr:'Nasr City Mall',amt:480,status:'collected'},
      {ord:'ORD-2847',addr:'Maadi',amt:320,status:'collected'},
      {ord:'ORD-2853',addr:'Heliopolis',amt:320,status:'pending'},
    ].map(c => `
    <div class="row-item" style="padding:10px 16px">
      <div style="font-family:monospace;font-size:11px;color:var(--muted)">${c.ord}</div>
      <div style="flex:1;font-size:12px;padding:0 12px">${c.addr}</div>
      <div style="font-weight:600;font-size:13px;color:${c.status==='collected'?'var(--success)':c.status==='pending'?'var(--y)':'var(--danger)'}">ج.م ${c.amt}</div>
      <span class="pill ${c.status==='collected'?'pill-active':c.status==='pending'?'pill-idle':'pill-danger'}" style="margin-left:8px">${c.status}</span>
    </div>`).join('')}
  </div>
</div>`,

'incident': () => `
<div class="section-title">Incident Reporting</div>
<div class="two-col">
  <div class="card">
    <div class="card-head">🆘 New Incident Report</div>
    <div class="card-body">
      <label class="login-label" style="font-size:11px">Incident Type</label>
      <select style="width:100%;padding:10px;background:var(--blk3);border:1px solid var(--border);border-radius:7px;color:var(--txt);margin-bottom:14px;font-family:var(--body)">
        <option>Minor accident</option>
        <option>Vehicle breakdown</option>
        <option>Flat tire</option>
        <option>Load damage</option>
        <option>Customer complaint</option>
      </select>
      <label class="login-label" style="font-size:11px">Description</label>
      <textarea style="width:100%;height:80px;padding:10px;background:var(--blk3);border:1px solid var(--border);border-radius:7px;color:var(--txt);margin-bottom:14px;font-family:var(--body);resize:none" placeholder="Describe what happened..."></textarea>
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <button class="btn btn-ghost" style="flex:1">📷 Add Photo</button>
        <button class="btn btn-ghost" style="flex:1">📍 Use GPS Location</button>
      </div>
      <button class="btn btn-y" style="width:100%">Submit Incident & Request Help</button>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-head">📋 Past Incidents</div>
      <div class="card-body">
        <div class="alert-item alert-g"><div class="alert-dot ad-g"></div><div><strong>Flat tire — Apr 12</strong><div style="font-size:11px;color:var(--muted)">Resolved in 45 min · Tow dispatched</div></div></div>
        <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div><strong>Minor scratch — Mar 28</strong><div style="font-size:11px;color:var(--muted)">Customer parking · Photo documented</div></div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">🆘 Emergency Contacts</div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn btn-y" style="width:100%">📞 Call Dispatcher</button>
          <button class="btn btn-ghost" style="width:100%">🔧 Request Roadside Help</button>
          <button class="btn btn-ghost" style="width:100%;border-color:var(--danger);color:var(--danger)">🚨 Emergency Services</button>
        </div>
      </div>
    </div>
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
  loadView('my-route');
});
