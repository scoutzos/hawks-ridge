const photos = {
  sfr:       { src: 'images/img_002.jpg', name:'Single Family Homes', sub:'Stone & Brick Hamlet Clusters · 255 Homes · 3 Tiers' },
  townhomes: { src: 'images/img_003.jpg', name:'Townhomes', sub:'French Beaux-Arts Row Homes · 650 Units · $450K–$680K' },
  ridgeclub: { src: 'images/img_004.png', name:'The Ridge Club', sub:'80,000 SF · Life Time–Caliber Athletic Facility' },
  healing:   { src: 'images/img_005.png', name:'The Healing House', sub:'22,000 SF · 9 Wellness Modalities · $2.8M/yr' },
  condos55:  { src: 'images/img_006.png', name:'Condos & Flats (55+)', sub:'300 HOPA Units · Above Village Retail · From $255K' },
  condosconv:{ src: 'images/img_006.png', name:'Condos & Flats (Conventional)', sub:'200 All-Age Units · Near Ridge Club · From $240K' },
  parks:     { src: 'images/img_007.png', name:'Parks & Green Space', sub:'90 Acres · 40ac Preserved + 50ac Active · 4.5mi Trails' },
  safety:    { src: null, name:'Safety & Security', sub:'Gated · 24/7 Staffed · LPR & HD Cameras · CPTED Design' },
  cottages:  { src: 'images/cottage_garden.png', name:'Cottages', sub:'190 Homes · Garden & Gated Tiers · Cobblestone Courtyards' },
  village:   { src: 'images/img_008.jpg', name:'The Village', sub:'65,000 SF · 40% Minority-Reserved · Cobblestone Plaza' },
  pool:      { src: null, name:'Community Pool', sub:'4,500 SF Resort-Style · Resident-Only · Dawn to Dusk' }
};

let cur = null;

function sel(z) {
  // Clear all
  document.querySelectorAll('.hotspot,.li').forEach(e => e.classList.remove('on'));
  document.querySelectorAll('.dc').forEach(e => e.classList.remove('on'));
  document.getElementById('defaultHint').style.display = 'none';

  const sceneWrap = document.getElementById('scene-wrap');
  const emptyScene = document.getElementById('empty-scene');

  // Toggle off if same zone
  if (cur === z) {
    cur = null;
    document.getElementById('defaultHint').style.display = '';
    if (emptyScene) emptyScene.style.display = 'flex';
    if (sceneWrap) sceneWrap.style.display = 'none';
    return;
  }

  cur = z;

  // Activate matching elements
  document.querySelectorAll('[data-zone="' + z + '"]').forEach(e => e.classList.add('on'));
  const dc = document.getElementById('dc-' + z);
  if (dc) dc.classList.add('on');

  // Show scene photo in sidebar
  const p = photos[z];
  if (p && emptyScene && sceneWrap) {
    emptyScene.style.display = 'none';
    sceneWrap.style.display = 'block';
    const inner = document.getElementById('scene-inner');
    if (p.src) {
      inner.innerHTML = '<img src="' + p.src + '" style="width:100%;height:100%;object-fit:cover;display:block;"/>';
    } else {
      inner.innerHTML = '<div style="width:100%;height:100%;background:#2b3540;display:flex;align-items:center;justify-content:center;"><span style="font-family:Playfair Display,serif;color:rgba(201,168,76,.5);font-size:.9rem;">Rendering coming soon</span></div>';
    }
    document.getElementById('scene-name').textContent = p.name;
    document.getElementById('scene-sub').textContent = p.sub;
  }

  // Open full overlay
  openOverlay(z);
}

function openOverlay(z) {
  const p = photos[z];
  if (!p) return;
  const ov = document.getElementById('zoneOverlay');
  const ct = document.getElementById('zoneOverlayContent');
  document.getElementById('zoneOverlayTitle').textContent = p.name;
  document.getElementById('zoneOverlaySub').textContent = p.sub;
  if (p.src) {
    ct.innerHTML = '<img class="zone-overlay-img" src="' + p.src + '" alt="' + p.name + '"/>';
  } else {
    ct.innerHTML = '<div class="zone-overlay-placeholder">Rendering coming soon</div>';
  }
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(e, force) {
  if (!force && e.target !== document.getElementById('zoneOverlay')) return;
  document.getElementById('zoneOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Map Zoom & Pan ──
(function () {
  const wrap = document.getElementById('mapwrap');
  const inner = document.getElementById('mapInner');
  let scale = 1, tx = 0, ty = 0, isDragging = false, startX, startY, lastTx, lastTy;
  const MIN = 1, MAX = 5;

  function apply() {
    inner.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
  }

  function clampPan() {
    const r = wrap.getBoundingClientRect();
    tx = Math.min(0, Math.max(r.width - r.width * scale, tx));
    ty = Math.min(0, Math.max(r.height - r.height * scale, ty));
  }

  // Mouse wheel zoom
  wrap.addEventListener('wheel', function (e) {
    e.preventDefault();
    const r = wrap.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, old = scale;
    scale *= e.deltaY < 0 ? 1.15 : 0.87;
    scale = Math.min(MAX, Math.max(MIN, scale));
    const ratio = scale / old;
    tx = mx - ratio * (mx - tx);
    ty = my - ratio * (my - ty);
    clampPan();
    apply();
  }, { passive: false });

  // Mouse drag pan
  wrap.addEventListener('mousedown', function (e) {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    lastTx = tx;
    lastTy = ty;
  });
  window.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    tx = lastTx + (e.clientX - startX);
    ty = lastTy + (e.clientY - startY);
    clampPan();
    apply();
  });
  window.addEventListener('mouseup', function () { isDragging = false; });

  // Touch pinch zoom + drag
  let initDist = 0, initScale = 1;
  wrap.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initDist = Math.hypot(dx, dy);
      initScale = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      lastTx = tx;
      lastTy = ty;
    }
  }, { passive: false });

  wrap.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      scale = Math.min(MAX, Math.max(MIN, initScale * (dist / initDist)));
      clampPan();
      apply();
    } else if (isDragging && e.touches.length === 1) {
      tx = lastTx + (e.touches[0].clientX - startX);
      ty = lastTy + (e.touches[0].clientY - startY);
      clampPan();
      apply();
    }
  }, { passive: false });

  wrap.addEventListener('touchend', function () { isDragging = false; });

  // Button controls
  window.zoomMap = function (dir) {
    const r = wrap.getBoundingClientRect(), cx = r.width / 2, cy = r.height / 2, old = scale;
    scale *= dir > 0 ? 1.4 : 0.7;
    scale = Math.min(MAX, Math.max(MIN, scale));
    const ratio = scale / old;
    tx = cx - ratio * (cx - tx);
    ty = cy - ratio * (cy - ty);
    clampPan();
    apply();
  };

  window.resetMap = function () {
    scale = 1;
    tx = 0;
    ty = 0;
    apply();
  };
})();

// Enhanced Navigation System
document.addEventListener('DOMContentLoaded', function() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const contentSections = document.querySelectorAll('.content-section');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-section');
      
      // Remove active class from all tabs and sections
      navTabs.forEach(t => t.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding section
      this.classList.add('active');
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }
      
      // Smooth scroll to content area
      document.querySelector('.sections').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    });
  });
});
