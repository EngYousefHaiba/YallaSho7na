// ─── DISPATCHER NAV ─────────────────────────────────────────────────────────
const nav = [
  { icon: '🗺️', label: 'Live Map',  view: 'map' },
  { icon: '🛣️', label: 'Routes',   view: 'routes',      badge: '3', badgeY: true },
  { icon: '🚐', label: 'Vehicles', view: 'vehicles' },
  { icon: '👤', label: 'Drivers',  view: 'drivers' },
  { icon: '⚠️', label: 'Alerts',   view: 'disp-alerts', badge: '2' },
];

// ─── VIEWS ──────────────────────────────────────────────────────────────────
const views = {

'map': () => `
<div class="kpi-row" style="grid-template-columns:repeat(4,1fr)">
  <div class="kpi"><div class="kpi-label">Active Vehicles</div><div class="kpi-val">14</div><div class="kpi-sub">3 idle · 1 repair</div></div>
  <div class="kpi"><div class="kpi-label">Deliveries Today</div><div class="kpi-val">127</div><div class="kpi-sub">94% completion</div></div>
  <div class="kpi"><div class="kpi-label">ETA Variance</div><div class="kpi-val" style="color:var(--warn)">+4.2m</div><div class="kpi-sub">3 windows breached</div></div>
  <div class="kpi"><div class="kpi-label">COD Collected</div><div class="kpi-val">ج.م 3,840</div><div class="kpi-sub">ج.م 1,240 pending</div></div>
</div>

<div class="two-col">
  <div>
    <div class="card">
      <div class="card-head">🗺️ Live Fleet Map — Cairo Metro <span style="color:var(--success);font-size:11px"><span class="live-dot"></span> Live</span></div>
      <div class="map-mock">
        <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 560 200">
          <path d="M0,100 L560,100" stroke="rgba(245,196,0,0.08)" stroke-width="8" fill="none"/>
          <path d="M280,0 L280,200" stroke="rgba(245,196,0,0.08)" stroke-width="8" fill="none"/>
          <path d="M0,60 Q140,50 280,100 Q420,150 560,140" stroke="rgba(245,196,0,0.05)" stroke-width="5" fill="none"/>
          <path d="M100,0 L170,200" stroke="rgba(245,196,0,0.04)" stroke-width="4" fill="none"/>
          <path d="M160,80 Q210,95 250,100 Q310,108 370,100" stroke="rgba(245,196,0,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
          <g>
            <circle cx="250" cy="100" r="13" fill="rgba(245,196,0,0.8)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
            <circle cx="250" cy="100" r="13" fill="none" stroke="rgba(245,196,0,0.4)" stroke-width="1">
              <animate attributeName="r" from="13" to="22" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="250" y="104" text-anchor="middle" fill="#0e0e0e" font-size="8" font-family="Cairo,sans-serif" font-weight="700">V01</text>
          </g>
          <g><circle cx="370" cy="100" r="11" fill="rgba(245,196,0,0.7)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="370" y="104" text-anchor="middle" fill="#0e0e0e" font-size="8" font-family="Cairo,sans-serif" font-weight="700">V03</text></g>
          <g><circle cx="130" cy="145" r="11" fill="rgba(245,196,0,0.7)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="130" y="149" text-anchor="middle" fill="#0e0e0e" font-size="8" font-family="Cairo,sans-serif" font-weight="700">V05</text></g>
          <g><circle cx="440" cy="70" r="11" fill="rgba(245,158,11,0.6)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="440" y="74" text-anchor="middle" fill="#fff" font-size="8" font-family="Cairo,sans-serif">V07</text></g>
          <g><circle cx="80" cy="55" r="11" fill="rgba(239,68,68,0.7)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="80" y="59" text-anchor="middle" fill="#fff" font-size="8" font-family="Cairo,sans-serif">V02</text></g>
          <text x="275" y="40" fill="rgba(245,196,0,0.2)" font-size="9" font-family="Cairo,sans-serif" text-anchor="middle">MAADI</text>
          <text x="440" y="40" fill="rgba(245,196,0,0.2)" font-size="9" font-family="Cairo,sans-serif" text-anchor="middle">NASR CITY</text>
          <text x="90" y="175" fill="rgba(245,196,0,0.2)" font-size="9" font-family="Cairo,sans-serif" text-anchor="middle">GIZA</text>
          <circle cx="10" cy="185" r="5" fill="rgba(245,196,0,0.8)"/><text x="20" y="189" fill="rgba(255,255,255,0.4)" font-size="8" font-family="Cairo,sans-serif">Active</text>
          <circle cx="65" cy="185" r="5" fill="rgba(245,158,11,0.6)"/><text x="75" y="189" fill="rgba(255,255,255,0.4)" font-size="8" font-family="Cairo,sans-serif">Idle</text>
          <circle cx="110" cy="185" r="5" fill="rgba(239,68,68,0.7)"/><text x="120" y="189" fill="rgba(255,255,255,0.4)" font-size="8" font-family="Cairo,sans-serif">Repair</text>
        </svg>
      </div>
    </div>
    <div class="card">
      <div class="card-head">🚨 Recent Events</div>
      <div class="card-body">
        <div class="alert-item alert-r"><div class="alert-dot ad-r"></div><span>V-02 breakdown — Sami's 5 stops redistributed to Khaled & Mohamed</span></div>
        <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><span>ORD-2853 ETA breached — customer at Heliopolis notified automatically</span></div>
        <div class="alert-item alert-g"><div class="alert-dot ad-g"></div><span>Emergency insertion ORD-2867 completed — ETAs recalculated downstream</span></div>
      </div>
    </div>
  </div>

  <div>
    <div class="card">
      <div class="card-head">🚐 Fleet Status</div>
      <div class="card-body" style="padding:0">
        ${[
          {id:'V-01',model:'Toyota Van',driver:'Sami · Maadi · 7 stops left',load:64,status:'active',label:'On Route'},
          {id:'V-03',model:'Ford Van',driver:'Khaled · Nasr City · 3 stops',load:45,status:'active',label:'On Route'},
          {id:'V-05',model:'Isuzu Truck',driver:'Mohamed · Giza · 11 stops',load:82,status:'active',label:'On Route',loadClass:'r'},
          {id:'V-07',model:'Toyota Van',driver:'Depot — awaiting dispatch',load:0,status:'idle',label:'Idle'},
          {id:'V-02',model:'Isuzu Truck',driver:'Transmission failure · Workshop',load:100,status:'repair',label:'Repair',loadClass:'r'},
        ].map(v => `
        <div class="row-item" style="padding:10px 16px">
          <span style="font-size:16px">🚐</span>
          <div style="flex:1"><div style="font-size:12px;font-weight:600">${v.id} · ${v.model}</div><div style="font-size:11px;color:var(--muted)">${v.driver}</div></div>
          <div class="prog-wrap"><div class="prog-bar"><div class="prog-fill ${v.loadClass||''}" style="width:${v.load}%"></div></div><div class="prog-text">${v.load}% load</div></div>
          <span class="pill ${v.status==='active'?'pill-active':v.status==='idle'?'pill-idle':'pill-danger'}">${v.label}</span>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-head">📊 Driver Scores</div>
      <div class="card-body">
        ${[['Khaled Omar',94],['Mohamed Ali',88],['Sami Hassan',76],['Tarek Mansour',71]].map(([n,s]) => {
          const col = s>=85?'g':s>=75?'':'r';
          return `<div style="display:flex;align-items:center;gap:10px;padding:6px 0">
            <div style="width:26px;height:26px;border-radius:50%;background:rgba(245,196,0,0.12);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--y);font-weight:700">${n.split(' ').map(x=>x[0]).join('')}</div>
            <div style="flex:1">
              <div style="font-size:12px;font-weight:500">${n}</div>
              <div class="prog-bar" style="margin-top:4px;height:4px"><div class="prog-fill ${col}" style="width:${s}%"></div></div>
            </div>
            <div style="font-family:monospace;font-size:12px;color:var(--y)">${s}/100</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>
</div>`,

'routes': () => `
<div class="section-title">Active Routes — Route Priority Balancer</div>
<div class="three-col">
  ${[
    {id:'V-01',driver:'Sami Hassan',stops:12,done:5,km:38,eta:'16:30',priority:'🔴 HIGH'},
    {id:'V-03',driver:'Khaled Omar',stops:8,done:5,km:22,eta:'15:45',priority:'🟡 MED'},
    {id:'V-05',driver:'Mohamed Ali',stops:15,done:4,km:51,eta:'17:10',priority:'🟢 STD'},
  ].map(r => `
  <div class="card">
    <div class="card-head">${r.id} · ${r.driver} <span class="pill pill-active">Active</span></div>
    <div class="card-body">
      <div style="font-size:11px;color:var(--muted);margin-bottom:10px">Priority: <strong style="color:var(--txt)">${r.priority}</strong></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        <div class="kpi" style="padding:10px"><div class="kpi-label">Stops Done</div><div class="kpi-val" style="font-size:18px">${r.done}/${r.stops}</div></div>
        <div class="kpi" style="padding:10px"><div class="kpi-label">Distance</div><div class="kpi-val" style="font-size:18px">${r.km}km</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
        <span style="color:var(--muted)">ETA completion</span>
        <span style="color:var(--y);font-weight:600">${r.eta}</span>
      </div>
      <div class="prog-bar" style="height:6px"><div class="prog-fill g" style="width:${Math.round(r.done/r.stops*100)}%"></div></div>
      <div style="font-size:10px;color:var(--muted);margin-top:4px">${Math.round(r.done/r.stops*100)}% complete</div>
    </div>
  </div>`).join('')}
</div>
<div class="card" style="margin-top:14px">
  <div class="card-head">🛣️ Geospatial Clustering — Cairo Zones</div>
  <div class="card-body" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
    ${[['Maadi','15','V-01 Toyota Van'],['Nasr City','12','V-03 Ford Van'],['Giza','18','V-05 Isuzu Truck']].map(([z,s,v]) => `
    <div style="padding:14px;background:var(--blk3);border-radius:8px;border:1px solid var(--border)">
      <div style="font-size:11px;color:var(--muted);margin-bottom:4px">Zone: ${z}</div>
      <div style="font-size:18px;font-weight:700;color:var(--y)">${s} stops</div>
      <div style="font-size:11px;color:var(--muted)">Assigned → ${v}</div>
    </div>`).join('')}
  </div>
</div>`,

'vehicles': () => `
<div class="section-title">Vehicle Management</div>
<div class="card">
  <div class="card-head">All Vehicles <button class="btn btn-y" style="font-size:11px;padding:5px 12px">+ Add Vehicle</button></div>
  <div class="card-body" style="padding:0">
    ${[
      {id:'V-01',model:'Toyota Van',driver:'Sami Hassan',km:48200,cap:1000,load:640,status:'active',ins:'Nov 2026'},
      {id:'V-02',model:'Isuzu Truck',driver:'Unassigned',km:61000,cap:3000,load:0,status:'repair',ins:'Mar 2026'},
      {id:'V-03',model:'Ford Van',driver:'Khaled Omar',km:33500,cap:1000,load:450,status:'active',ins:'Dec 2026'},
      {id:'V-05',model:'Isuzu Truck',driver:'Mohamed Ali',km:55000,cap:3000,load:2460,status:'active',ins:'Jun 2026'},
      {id:'V-07',model:'Toyota Van',driver:'Unassigned',km:22100,cap:1000,load:0,status:'idle',ins:'Apr 2026'},
    ].map(v => `
    <div class="row-item" style="padding:12px 16px">
      <div style="font-family:monospace;font-size:12px;color:var(--y);width:40px">${v.id}</div>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600">${v.model}</div>
        <div style="font-size:11px;color:var(--muted)">Driver: ${v.driver} · ${v.km.toLocaleString()} km · Insurance: ${v.ins}</div>
      </div>
      <div style="text-align:right;margin-right:12px">
        <div style="font-size:11px;color:var(--muted)">Load</div>
        <div style="font-size:12px;font-weight:600">${v.load}/${v.cap} kg</div>
      </div>
      <span class="pill ${v.status==='active'?'pill-active':v.status==='idle'?'pill-idle':'pill-danger'}">${v.status}</span>
    </div>`).join('')}
  </div>
</div>`,

'drivers': () => `
<div class="section-title">Driver Management</div>
<div class="two-col">
  ${[
    {n:'Sami Hassan',init:'SH',role:'Van driver',score:76,trips:1240,rating:4.2,shift:'Morning',lic:'Van · Small Truck'},
    {n:'Khaled Omar',init:'KO',role:'Van driver',score:94,trips:1890,rating:4.8,shift:'Morning',lic:'Van'},
    {n:'Mohamed Ali',init:'MA',role:'Truck driver',score:88,trips:2100,rating:4.6,shift:'Morning',lic:'Van · Heavy Truck'},
    {n:'Tarek Mansour',init:'TM',role:'Van driver',score:71,trips:760,rating:3.9,shift:'Evening',lic:'Van'},
  ].map(d => `
  <div class="card">
    <div class="card-head" style="gap:10px">
      <div style="width:34px;height:34px;border-radius:50%;background:rgba(245,196,0,0.15);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--y)">${d.init}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${d.n}</div><div style="font-size:11px;color:var(--muted)">${d.role} · ${d.shift} shift</div></div>
      <span class="pill pill-active">Active</span>
    </div>
    <div class="card-body">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
        <div class="kpi" style="padding:10px"><div class="kpi-label">Score</div><div class="kpi-val" style="font-size:18px;color:${d.score>=85?'var(--success)':d.score>=75?'var(--y)':'var(--danger)'}">${d.score}</div></div>
        <div class="kpi" style="padding:10px"><div class="kpi-label">Trips</div><div class="kpi-val" style="font-size:18px">${d.trips}</div></div>
        <div class="kpi" style="padding:10px"><div class="kpi-label">Rating</div><div class="kpi-val" style="font-size:18px">${d.rating}⭐</div></div>
      </div>
      <div style="font-size:11px;color:var(--muted)">Licenses: <span style="color:var(--txt)">${d.lic}</span></div>
    </div>
  </div>`).join('')}
</div>`,

'disp-alerts': () => `
<div class="section-title">Active Alerts</div>
<div class="card">
  <div class="card-body">
    <div class="alert-item alert-r"><div class="alert-dot ad-r"></div><div style="flex:1"><strong>V-02 — Breakdown</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Transmission failure. 5 stops redistributed to Khaled & Mohamed. Tow requested.</div></div><span style="font-size:10px;color:var(--muted)">Now</span></div>
    <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div style="flex:1"><strong>ORD-2853 — Window Breached</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Customer at Heliopolis promised 2–4pm. New ETA 4:30pm. Sender notified.</div></div><span style="font-size:10px;color:var(--muted)">14:30</span></div>
    <div class="alert-item alert-y"><div class="alert-dot ad-y"></div><div style="flex:1"><strong>V-05 — High Load Warning</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">V-05 at 82% capacity (2460/3000 kg). New 200 kg order → rejected.</div></div><span style="font-size:10px;color:var(--muted)">13:55</span></div>
    <div class="alert-item alert-g"><div class="alert-dot ad-g"></div><div style="flex:1"><strong>ORD-2831 — RTB Initiated</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">Customer absent after 3 attempts. Package returning to depot. Report generated.</div></div><span style="font-size:10px;color:var(--muted)">13:10</span></div>
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
  loadView('map');
});
