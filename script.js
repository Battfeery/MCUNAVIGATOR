/* ============================================================
   MCU Interactive Campus Map
   PHOTOS: put your pictures in the /images folder and use the
   file names listed in each building's `photos` array below.
   PINS:   click the "move" button on the map, drag each pin onto
   its building (use Satellite view), then "Copy coordinates"
   and paste them into the `coords` fields below.
   ============================================================ */
const CAMPUS_CENTER = [14.6590, 120.9862]; // MCU main campus (EDSA, Caloocan)
const COLORS = { Medical: '#EF4444', Academic: '#2563EB', Facilities: '#059669', Administration: '#D97706', Gates: '#475569' };

const buildings = [
  { id: 'mcu-hospital', name: 'MCU Filemon D. Tanchoco', code: 'MCU Hospital',
    cat: 'Medical', icon: 'fa-hospital', coords: [14.658301212534147, 120.98639325392408],
    hours: '24/7 Operations', floors: '6 Floors + ER Wing',
    photos: ['images/FDT.jpe', 'images/FDT2.jpe', 'images/FDT3.jpg'],
    desc: 'Tertiary teaching hospital that also serves as a training ground for medical, nursing and health sciences students.',
    depts: ['Emergency Department', 'Outpatient Clinics', 'Radiology & Imaging', 'Clinical Laboratories', 'Pediatrics & ICU'],
    dir: [['Ground Floor', 'Emergency Room, Admissions, Pharmacy, Information Desk'],
          ['2nd Floor', 'Outpatient Department, Clinical Laboratories, Billing'],
          ['3rd Floor', 'Operating Rooms, Delivery Room, ICU, Pediatrics'],
          ['4th - 6th Floor', 'Private & Semi-Private Inpatient Wards']],
    hint: 'Along the EDSA side of campus. Emergency vehicles enter through the hospital gate.' },

  { id: 'coffee', name: 'Seattle Best Coffee and Admin Building', code: 'COFFEE',
    cat: 'Facilities', icon: 'fa-mug-hot', coords: [14.6576812456767, 120.98671473746288],
    hours: '7:00 AM - 7:00 PM', floors: '1 Floor',
    photos: ['images/SBC.png', 'images/SBC2.png'],
    desc: 'Coffee shop on the MCU campus.',
    depts: ['Seattle Best Coffee'],
    dir: [['Ground Floor', 'Coffee shop']],
    hint: 'Inside the campus, near the hospital side.' },

  { id: 'pgt', name: 'Purificacion G. Tanchoco Building', code: 'PGT',
    cat: 'Academic', icon: 'fa-building-columns', coords: [14.659192319895409, 120.98568807691561],
    hours: '7:00 AM - 6:30 PM', floors: '4 Floors',
    photos: ['images/pgt.jpe'],
    desc: 'Academic building on the MCU campus (PGT Building).',
    depts: ['College of Nursing', 'Physical Therapy Department', 'Nursing Skills Lab'],
    dir: [['1st Floor', 'Administrative Offices, Faculty Rooms'],
          ['2nd Floor', 'Skills Demonstration Wards'],
          ['3rd - 4th Floor', 'Classrooms and laboratories']],
    hint: 'Near the Learning Resource Center.' },

  { id: 'gpl', name: 'MCU GPL Building', code: 'MCU GPL',
    cat: 'Administration', icon: 'fa-landmark', coords: [14.658946707271493, 120.98609386688665],
    hours: '8:00 AM - 5:00 PM (Mon-Fri)', floors: '2 Floors + Central Plaza',
    photos: ['images/gpl.jpe'],
    desc: 'The administrative heart of MCU: Registrar, Accounting, the President\'s Office and the central quadrangle.',
    depts: ['Office of the President', 'University Registrar', 'Finance & Accounting', 'Admissions Center', 'Human Resources'],
    dir: [['1st Floor', 'Admissions, Cashier, Registrar Counters, Visitor Lounge'],
          ['2nd Floor', 'Human Resources, IT Services, Legal Affairs'],
          ['3rd Floor', 'Board Room, President\'s Office, VP for Academic Affairs']],
    hint: 'At the heart of the campus, near the flagpole.' },

  { id: 'bed', name: 'Basic Education Department (BED)', code: 'BED-SHS',
    cat: 'Academic', icon: 'fa-school', coords: [14.65968084780125, 120.98624639199902],
    hours: '7:00 AM - 5:00 PM', floors: '4 Floors',
    photos: ['images/BED.jpg', 'images/BED2.jpg'],
    desc: 'Junior High School and Senior High strands with dedicated science laboratories and creative spaces.',
    depts: ['Junior High School', 'Senior High School', 'Guidance & Counseling', 'BED Science Labs'],
    dir: [['1st Floor', 'Principal Office, Guidance Center, Grades 7-8'],
          ['2nd Floor', 'Grades 9-10, Computer Laboratory'],
          ['3rd Floor', 'Grade 11, Physics & Chemistry Labs'],
          ['4th Floor', 'Grade 12, Art & Design Studio']],
    hint: 'North wing of the campus, with its own controlled entrance.' },

  { id: 'gym', name: 'MCU Gymnasium (CGYM)', code: 'MCU-GYM',
    cat: 'Facilities', icon: 'fa-basketball', coords: [14.660466755607255, 120.98636664735632],
    hours: '6:00 AM - 8:00 PM', floors: '2 Levels',
    photos: ['images/gym.png'],
    desc: 'Multi-purpose indoor arena for athletics, varsity practice, graduation ceremonies and cultural events.',
    depts: ['Physical Education Department', 'Athletics & Sports Office', 'Varsity Locker Rooms'],
    dir: [['Main Arena', 'Hardwood Basketball Court, Volleyball Courts, Bleachers'],
          ['Lower Level', 'PE Offices, Fitness Gym, Dance Studio, Lockers']],
    hint: 'East side of the campus, beside the outdoor courts.' },

  { id: 'lrc', name: 'Learning Resource Center (Library)', code: 'LRC',
    cat: 'Facilities', icon: 'fa-book-open', coords: [14.658865179957623, 120.98643238283046],
    hours: '7:30 AM - 7:00 PM', floors: '4 Floors (Library on 2nd-4th)',
    photos: ['images/lrc.jpe'],
    desc: 'Learning resource center with the university library, digital resources, quiet study zones and discussion rooms.',
    depts: ['University Library Services', 'Electronic Resource Center', 'MCU Archives & Museum'],
    dir: [['1st Floor', 'Lobby, Digital Commons, Discussion Rooms'],
          ['2nd Floor', 'Library: Circulation, General Reference, Periodicals'],
          ['3rd Floor', 'Library: Filipiniana Collection, Study Areas'],
          ['4th Floor', 'Library: Quiet Study Zone, Archives']],
    hint: 'Just behind the Administration Building, next to the courtyard.' },

  { id: 'canteen', name: 'University Canteen', code: 'CANTEEN',
    cat: 'Facilities', icon: 'fa-utensils', coords: [14.660256302035867, 120.98591022339956],
    hours: '6:30 AM - 6:00 PM', floors: '1 Floor',
    photos: ['images/canteen.png'],
    desc: 'Student canteen on the MCU campus.',
    depts: ['Canteen'],
    dir: [['Ground Floor', 'Food stalls and dining area']],
    hint: 'North side of the campus, near the Basic Education complex.' },

{ id: 'clinic', name: 'University Clinic', code: 'CLINIC',
    cat: 'Medical', icon: 'fa-briefcase-medical', coords: [14.658826523104675, 120.98615266173385],
    hours: 'Check with the clinic', floors: 'Campus clinic',
    photos: ['images/clinic.jpe'],
    desc: 'Campus clinic for students and staff who need basic medical attention.',
    depts: [], dir: [],
    hint: 'Inside the campus, close to the GPL Building.' },

  
  /* GATES - approximate positions; use the move button + drag to place exactly */
  { id: 'gate-1', name: 'Main Gate MCU', code: 'GATE 1',
    cat: 'Gates', icon: 'fa-door-open', coords: [14.657494657882271, 120.98617007235477],
    hours: 'Check with campus security', floors: 'Campus entrance',
    photos: ['images/maingate.jpe'],
    desc: 'Main campus entrance on the EDSA side.',
    depts: [], dir: [],
    hint: 'EDSA side of the campus.' },

  { id: 'gate-5', name: 'MCU Gate 5', code: 'GATE 5',
    cat: 'Gates', icon: 'fa-door-open', coords: [14.658737866463484, 120.98539426701994],
    hours: 'Check with campus security', floors: 'Campus entrance',
    photos: ['images/gate5.png'],
    desc: 'Campus entrance on the Samson Road side.',
    depts: [], dir: [],
    hint: 'Samson Road side of the campus.' },

 { id: 'pool', name: 'Swimming Pool', code: 'POOL',
    cat: 'Facilities', icon: 'fa-person-swimming', coords: [14.659922469598087, 120.98562253449433],
    hours: 'Check with the PE Department', floors: 'Outdoor facility',
    photos: ['images/sp.jpg'],
    desc: 'Campus swimming pool.',
    depts: [], dir: [],
    hint: 'West side of the campus, near the Samson Road entrance.' }
    
];
buildings.forEach(b => { b.color = COLORS[b.cat]; b.home = b.coords.slice(); });

/* ---------- state ---------- */
let map, tiles, sat = true, editing = false, cat = 'All', activeId = null, current = null;
const markers = {};
const STORE = 'mcu-pin-coords';

/* restore pins you adjusted earlier in this browser */
try {
  const saved = JSON.parse(localStorage.getItem(STORE) || '{}');
  buildings.forEach(b => { if (saved[b.id]) b.coords = saved[b.id]; });
} catch (e) {}

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- picture slot: shows your image, or a placeholder box ---------- */
const EXTS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG'];
function srcList(src) {
  if (/^(data:|blob:)/.test(src)) return [src];
  const base = src.replace(/\.[a-z0-9]+$/i, '');
  return [src, ...EXTS.map(e => base + '.' + e)].filter((v, i, a) => a.indexOf(v) === i);
}
/* if a picture fails to load, try the same name with other extensions, then give up */
window.imgNext = function (img) {
  const list = JSON.parse(img.dataset.alt), n = +img.dataset.n + 1;
  if (n < list.length) { img.dataset.n = n; img.src = list[n]; } else img.remove();
};
function slot(src, label) {
  const list = src ? srcList(src) : [];
  const shown = /^(data:|blob:)/.test(label || src || '') ? 'your photo' : (label || src || '');
  return `<div class="photo-slot"><div class="ph"><i class="fa-solid fa-camera"></i><span>Add photo</span><small>${esc(shown)}</small></div>` +
    (src ? `<img src="${esc(list[0])}" data-n="0" data-alt="${esc(JSON.stringify(list))}" alt="" onload="this.parentNode.classList.add('has-img')" onerror="imgNext(this)">` : '') + '</div>';
}

/* ---------- photos you add are saved in this browser ---------- */
const PHOTO_STORE = 'mcu-user-photos';
let userPhotos = {};
try { userPhotos = JSON.parse(localStorage.getItem(PHOTO_STORE) || '{}'); } catch (e) {}
buildings.forEach(b => { b.photos = [...(userPhotos[b.id] || []), ...b.photos]; });
function savePhotos() {
  try { localStorage.setItem(PHOTO_STORE, JSON.stringify(userPhotos)); return true; } catch (e) { return false; }
}
function shrink(file, cb) {            // resize so many photos fit in browser storage
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      const k = Math.min(1, 1000 / Math.max(im.width, im.height)), c = document.createElement('canvas');
      c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      cb(c.toDataURL('image/jpeg', 0.82));
    };
    im.src = fr.result;
  };
  fr.readAsDataURL(file);
}

/* ---------- map ---------- */
function makeTiles() {
  return sat
    ? L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxNativeZoom: 19, maxZoom: 21, attribution: 'Tiles &copy; Esri' })
    : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxNativeZoom: 19, maxZoom: 21, attribution: '&copy; OpenStreetMap contributors' });
}

function pinIcon(b) {
  return L.divIcon({
    className: '',
    html: `<div class="pin-box"><div class="pin" style="background:${b.color}"><i class="fa-solid ${b.icon}"></i></div></div>`,
    iconSize: [36, 42], iconAnchor: [18, 39], popupAnchor: [0, -38]   // anchor = pin tip
  });
}

function popupHTML(b) {
  return `<div class="pop">${slot(b.photos[0])}<div class="t"><b class="c" style="color:${b.color}">${b.cat}</b>
    <h4>${esc(b.name)}</h4><p><i class="fa-regular fa-clock"></i> ${esc(b.hours)}</p>
    <button onclick="openModal('${b.id}')">View details</button></div></div>`;
}

const dirUrl = b => `https://www.google.com/maps/dir/?api=1&destination=${b.coords[0]},${b.coords[1]}&travelmode=walking`;

function initMap() {
  map = L.map('map', { center: CAMPUS_CENTER, zoom: 18, minZoom: 15, maxZoom: 21, zoomControl: false });
  tiles = makeTiles().addTo(map);
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  buildings.forEach(b => {
    const m = L.marker(b.coords, { icon: pinIcon(b), draggable: false, title: b.name }).addTo(map);
    m.bindPopup(popupHTML(b), { minWidth: 220 });
    m.on('click', () => select(b.id));
    m.on('dragend', () => {
      const p = m.getLatLng();
      b.coords = [+p.lat.toFixed(6), +p.lng.toFixed(6)];
      saveCoords();
    });
    markers[b.id] = m;
  });
}

function saveCoords() {
  const out = {};
  buildings.forEach(b => out[b.id] = b.coords);
  try { localStorage.setItem(STORE, JSON.stringify(out)); } catch (e) {}
}

/* ---------- sidebar list ---------- */
function filtered() {
  const q = $('search').value.toLowerCase().trim();
  return buildings.filter(b =>
    (cat === 'All' || b.cat === cat) &&
    (!q || [b.name, b.code, b.desc, b.cat, ...b.depts, ...b.dir.flat()].some(t => t.toLowerCase().includes(q))));
}

function renderList() {
  const list = $('list'), items = filtered();
  Object.entries(markers).forEach(([id, m]) => {          // keep map in sync with the filter
    const show = items.some(b => b.id === id);
    if (show && !map.hasLayer(m)) m.addTo(map);
    if (!show && map.hasLayer(m)) map.removeLayer(m);
  });
  if (!items.length) { list.innerHTML = '<div class="empty"><i class="fa-regular fa-face-frown"></i><br>No buildings found</div>'; return; }
  list.innerHTML = `<div class="count">${items.length} place${items.length === 1 ? '' : 's'}</div>` + items.map(b => `
    <div class="card ${b.id === activeId ? 'on' : ''}" data-id="${b.id}">
      ${slot(b.photos[0])}
      <div><h3>${esc(b.name)}</h3>
        <small><span class="dot" style="background:${b.color}"></span>${esc(b.code)} • ${esc(b.floors)}</small></div>
    </div>`).join('');
  list.querySelectorAll('.card').forEach(c => {
    c.tabIndex = 0;
    c.onclick = () => select(c.dataset.id, true);
    c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(c.dataset.id, true); } };
  });
}

function select(id, fly) {
  activeId = id;
  const b = buildings.find(x => x.id === id);
  if (!b) return;
  renderList();
  try { history.replaceState(null, '', '#' + id); } catch (e) {}
  if (fly) {
    if (!map.hasLayer(markers[id])) markers[id].addTo(map);
    map.flyTo(b.coords, 19, { duration: 1 });
    setTimeout(() => markers[id].openPopup(), 700);
  }
  $('sidebar').classList.remove('open');
}

/* ---------- modal ---------- */
let shownIdx = 0;
function showPhoto(i) {
  shownIdx = i;
  $('m-main').outerHTML = slot(current.photos[i], current.photos[i]).replace('class="photo-slot"', 'class="photo-slot" id="m-main"');
  document.querySelectorAll('#m-thumbs .photo-slot').forEach((t, n) => t.classList.toggle('sel', n === i));
}

function renderGallery() {
  $('m-thumbs').innerHTML = current.photos.map(p => slot(p, '')).join('');
  document.querySelectorAll('#m-thumbs .photo-slot').forEach((t, n) => t.onclick = () => showPhoto(n));
  showPhoto(0);
}

window.openModal = function (id) {
  const b = current = buildings.find(x => x.id === id);
  $('m-title').textContent = b.name;
  $('m-code').textContent = b.code + ' • MCU Main Campus';
  $('m-cat').textContent = b.cat;
  $('m-cat').style.background = b.color;
  $('m-hours').textContent = b.hours;
  $('m-floors').textContent = b.floors;
  $('m-desc').textContent = b.desc;
  $('m-hint').textContent = b.hint;
  $('m-depts').innerHTML = b.depts.map(d => `<span>${esc(d)}</span>`).join('');
  $('m-dir').innerHTML = b.dir.map(([f, t]) => `<div><b>${esc(f)}</b><span>${esc(t)}</span></div>`).join('');
  ['m-depts', 'm-dir'].forEach((k, n) => {
    const empty = !(n ? b.dir : b.depts).length;
    $(k).style.display = empty ? 'none' : '';
    $(k).previousElementSibling.style.display = empty ? 'none' : '';
  });
  renderGallery();
  $('m-go').onclick = () => { closeModal(); select(b.id, true); };
  $('m-dir-link').href = dirUrl(b);
  $('m-share').onclick = () => {
    const url = location.href.split('#')[0] + '#' + b.id;
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(
      () => toast('Link copied'), () => prompt('Copy this link:', url));
  };
  $('modal').classList.remove('hidden');
};
function refreshPhotos(b) {            // update gallery, sidebar card and map popup
  renderGallery(); renderList(); markers[b.id].setPopupContent(popupHTML(b));
}
const closeModal = () => $('modal').classList.add('hidden');

let toastTimer;
function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- events ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderList();

  $('menu-btn').onclick = () => $('sidebar').classList.add('open');
  $('close-btn').onclick = () => $('sidebar').classList.remove('open');
  $('search').oninput = renderList;
  $('filters').onclick = e => {
    const btn = e.target.closest('button'); if (!btn) return;
    document.querySelectorAll('#filters button').forEach(x => x.classList.remove('active'));
    btn.classList.add('active'); cat = btn.dataset.cat; renderList();
  };

  $('recenter').onclick = () => map.flyTo(CAMPUS_CENTER, 18, { duration: 1 });

  /* locate me */
  let me = null;
  $('locate').onclick = () => {
    if (!navigator.geolocation) return toast('Location is not supported on this device');
    toast('Finding you…');
    navigator.geolocation.getCurrentPosition(pos => {
      const ll = [pos.coords.latitude, pos.coords.longitude];
      if (me) map.removeLayer(me);
      me = L.circleMarker(ll, { radius: 8, color: '#fff', weight: 3, fillColor: '#2563EB', fillOpacity: 1 }).addTo(map).bindTooltip('You are here');
      map.flyTo(ll, 19, { duration: 1 });
    }, () => toast('Could not get your location'), { enableHighAccuracy: true, timeout: 10000 });
  };

  /* keyboard + mobile niceties */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('modal').classList.contains('hidden')) closeModal();
    else $('sidebar').classList.remove('open');
  });
  map.on('click', () => $('sidebar').classList.remove('open'));
  const fromHash = () => { const id = location.hash.slice(1); if (id && buildings.some(b => b.id === id)) select(id, true); };
  window.addEventListener('hashchange', fromHash);
  setTimeout(fromHash, 300);
  $('layer').onclick = () => { map.removeLayer(tiles); sat = !sat; tiles = makeTiles().addTo(map); };

  /* pin adjust mode */
  $('edit').onclick = () => {
    editing = !editing;
    $('edit').classList.toggle('on', editing);
    $('edit-bar').classList.toggle('hidden', !editing);
    buildings.forEach(b => editing ? markers[b.id].dragging.enable() : markers[b.id].dragging.disable());
    if (editing) map.closePopup();
  };
  $('copy-coords').onclick = () => {
    const txt = buildings.map(b => `${b.id}: coords: [${b.coords[0]}, ${b.coords[1]}],`).join('\n');
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(
      () => toast('Coordinates copied'), () => prompt('Copy these coordinates:', txt));
  };
  $('reset-coords').onclick = () => {
    buildings.forEach(b => { b.coords = b.home.slice(); markers[b.id].setLatLng(b.coords); });
    try { localStorage.removeItem(STORE); } catch (e) {}
  };

  /* modal */
  $('m-close').onclick = closeModal;
  $('modal').onclick = e => { if (e.target.id === 'modal') closeModal(); };
  $('m-file').onchange = e => {
    const f = e.target.files[0], b = current; e.target.value = '';
    if (!f || !b) return;
    shrink(f, url => {
      (userPhotos[b.id] = userPhotos[b.id] || []).unshift(url);
      b.photos.unshift(url);
      if (!savePhotos()) alert('Photo is too big to save in this browser. It will show until you refresh.');
      refreshPhotos(b); showPhoto(0);
    });
  };
  $('m-del').onclick = () => {
    const b = current, n = (userPhotos[b.id] || []).length;
    if (shownIdx >= n) { alert('Only photos you added can be removed here. Delete the file from the images folder instead.'); return; }
    userPhotos[b.id].splice(shownIdx, 1); b.photos.splice(shownIdx, 1); savePhotos();
    refreshPhotos(b); showPhoto(0);
  };
});
