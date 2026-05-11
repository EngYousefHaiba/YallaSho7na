// ─── MECHANIC NAV ─────────────────────────────────────────────────────────────
const nav = [
  { icon: '🔔', label: 'Service Alerts', view: 'service-alerts' },
  { icon: '🚗', label: 'Fleet Status',   view: 'fleet-status' },
  { icon: '🛢️', label: 'Fuel & Parts',  view: 'fuel-parts' },
  { icon: '📝', label: 'Work Orders',    view: 'work-orders' },
];

// ─── VIEWS ──────────────────────────────────────────────────────────────────
const views = {

'service-alerts': () => `
<div class="section-title">Service Alerts</div>
<div class="kpi-row" style="grid-template-columns:repeat(3,1fr)">
  <div class="kpi"><div class="kpi-label">Critical</div><div class="kpi-val" style="color:var(--danger)">1</div><div class="kpi-sub">Immediate action needed</div></div>
  <div class="kpi"><div class="kpi-label">Due Soon</div><div class="kpi-val" style="color:var(--warn)">3</div><div class="kpi-sub">Within 1000 km</div></div>
  <div class="kpi"><div class="kpi-label">All Good</div><div class="kpi-val" style="color:var(--success)">13</div><div class="kpi-sub">No immediate action</div></div>
</div>
<div class="card">
  <div class="card-head">🔔 All Maintenance Alerts</div>
  <div class="card-body">
    <div class="alert-item alert-r"><div class="alert-dot ad-r"></div><div style="flex:1"><strong>V-02 — Transmission Failure</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Vehicle out of service. Assign technician or external workshop. Tow has been dispatched.</div></div><span style="font-size:10px;color:var(--danger)">CRITICAL</span></div>
    <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div style="flex:1"><strong>V-05 — Oil Change Due</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Odometer: 55,000 km. Service threshold: 55,000 km. Schedule today.</div></div><span style="font-size:10px;color:var(--warn)">TODAY</span></div>
    <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div style="flex:1"><strong>V-03 — Brake Pads</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">28,000 / 30,000 km life used. Replacement needed within 2,000 km.</div></div><span style="font-size:10px;color:var(--warn)">SOON</span></div>
    <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div style="flex:1"><strong>V-07 — Insurance Expiry</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Insurance expires April 30. 9 days remaining. Contact insurance provider.</div></div><span style="font-size:10px;color:var(--warn)">9 DAYS</span></div>
  </div>
</div>`,

'fleet-status': () => `
<div class="section-title">Fleet Health Overview</div>
<div class="two-col">
  ${[
    {id:'V-01',model:'Toyota Van',km:48200,oil:48200,oilNext:50000,insurance:'Nov 2026',status:'ok'},
    {id:'V-02',model:'Isuzu Truck',km:61000,oil:58000,oilNext:60000,insurance:'Mar 2027',status:'repair'},
    {id:'V-03',model:'Ford Van',km:33500,oil:30000,oilNext:35000,insurance:'Dec 2026',status:'warn'},
    {id:'V-05',model:'Isuzu Truck',km:55000,oil:55000,oilNext:55000,insurance:'Jun 2026',status:'warn'},
  ].map(v => `
  <div class="card">
    <div class="card-head">${v.id} — ${v.model} <span class="pill ${v.status==='ok'?'pill-active':v.status==='warn'?'pill-warn':'pill-danger'}">${v.status}</span></div>
    <div class="card-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        <div class="kpi" style="padding:10px"><div class="kpi-label">Odometer</div><div class="kpi-val" style="font-size:14px">${v.km.toLocaleString()}</div></div>
        <div class="kpi" style="padding:10px"><div class="kpi-label">Insurance</div><div class="kpi-val" style="font-size:14px">${v.insurance}</div></div>
      </div>
      <div style="font-size:11px;color:var(--muted);margin-bottom:4px">Oil change progress</div>
      <div class="prog-bar" style="height:6px;margin-bottom:4px"><div class="prog-fill ${v.km>=v.oilNext?'r':''}" style="width:${Math.min(100,Math.round((v.km-v.oil+5000)/5000*100))}%"></div></div>
      <div style="font-size:10px;color:var(--muted)">${v.km.toLocaleString()} / ${v.oilNext.toLocaleString()} km — next service</div>
    </div>
  </div>`).join('')}
</div>`,

'fuel-parts': () => `
<div class="section-title">Fuel & Spare Parts</div>
<div class="two-col">
  <div>
    <div class="card">
      <div class="card-head">🛢️ Fuel Expense Audit</div>
      <div class="card-body">
        ${[
          {v:'V-01',declared:200,actual:198,match:true},
          {v:'V-03',declared:150,actual:148,match:true},
          {v:'V-05',declared:200,actual:152,match:false},
        ].map(f => `
        <div class="row-item">
          <span style="font-family:monospace;font-size:12px;color:var(--y)">${f.v}</span>
          <div style="flex:1;font-size:12px;padding:0 10px">Declared: ${f.declared}km · Actual GPS: ${f.actual}km</div>
          <span class="pill ${f.match?'pill-active':'pill-danger'}">${f.match?'✓ Match':'⚠ Gap'}</span>
        </div>`).join('')}
        <div class="alert-item alert-r" style="margin-top:10px"><div class="alert-dot ad-r"></div>V-05 declared 200km but GPS shows 152km — review receipt</div>
      </div>
    </div>
    <div class="card">
      <div class="card-head">📊 Fuel Efficiency Comparison</div>
      <div class="card-body">
        ${[
          {m:'Toyota Van',mpk:12},{m:'Ford Van',mpk:11.5},{m:'Isuzu Truck',mpk:7.8}
        ].map(f => `
        <div style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>${f.m}</span><span style="color:var(--y)">${f.mpk} km/L</span></div>
          <div class="prog-bar" style="height:5px"><div class="prog-fill" style="width:${Math.round(f.mpk/14*100)}%"></div></div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <div>
    <div class="card">
      <div class="card-head">🔩 Spare Parts Inventory</div>
      <div class="card-body">
        ${[
          {item:'Engine Oil 5W-30',stock:5,min:10,unit:'L'},
          {item:'Air Filter',stock:2,min:3,unit:'pcs'},
          {item:'Brake Pads',stock:4,min:4,unit:'sets'},
          {item:'Tires (Van size)',stock:6,min:4,unit:'pcs'},
          {item:'Battery',stock:1,min:2,unit:'pcs'},
        ].map(p => `
        <div class="row-item">
          <div style="flex:1;font-size:12px">${p.item}</div>
          <div style="font-size:12px;font-weight:600;color:${p.stock<p.min?'var(--danger)':'var(--success)'}">
            ${p.stock} ${p.unit}
          </div>
          ${p.stock<p.min?'<span class="pill pill-danger" style="font-size:10px;margin-left:6px">Reorder</span>':''}
        </div>`).join('')}
      </div>
    </div>
  </div>
</div>`,

'work-orders': () => `
<div class="section-title">Work Orders</div>
<div class="card">
  <div class="card-head">🔧 Active Work Orders <button class="btn btn-y" style="font-size:11px;padding:5px 12px">+ New</button></div>
  <div class="card-body" style="padding:0">
    ${[
      {id:'WO-041',vehicle:'V-02',task:'Transmission replacement',tech:'Internal — Ali Fathy',status:'in-progress',eta:'May 10'},
      {id:'WO-042',vehicle:'V-05',task:'Oil change',tech:'Internal — Ali Fathy',status:'scheduled',eta:'Today 17:00'},
      {id:'WO-043',vehicle:'V-03',task:'Brake pad replacement',tech:'External workshop',status:'scheduled',eta:'May 9'},
    ].map(w => `
    <div class="row-item" style="padding:12px 16px">
      <div style="font-family:monospace;font-size:11px;color:var(--muted);width:52px">${w.id}</div>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600">${w.vehicle} — ${w.task}</div>
        <div style="font-size:11px;color:var(--muted)">${w.tech} · ETA: ${w.eta}</div>
      </div>
      <span class="pill ${w.status==='in-progress'?'pill-warn':'pill-blue'}">${w.status}</span>
    </div>`).join('')}
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
  loadView('service-alerts');
});
