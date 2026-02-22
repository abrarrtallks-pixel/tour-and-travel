/* ==========================================
   SUN SEEKERS TRAVELS - Main JS
   ========================================== */

// ── CONFIG ──
const CONFIG = {
  whatsapp: '+916005868858',
  email: 'sunseekerstravels1@gmail.com',
  phone: '+91 6005868858',
  // Replace with your actual Google Apps Script Web App URL after deployment
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbyWEl6ywIhI5ZXK64ywhax3S6rzlh99wQmD9EhwfzYGrLBe_mItt-Wt3V08A--6hNg/exec',
  useFallback: false // Connected to Apps Script
};

// ── FALLBACK DATA (shown when Apps Script not connected) ──
const FALLBACK_PACKAGES = [
  {
    id: 1,
    name: 'Gulmarg Tour',
    price: 4999,
    duration: '2 Days / 1 Night',
    persons: 'Per Person',
    description: 'Experience the breathtaking beauty of Gulmarg — the "Meadow of Flowers". Enjoy the world\'s highest gondola ride and stunning snow-capped peaks.',
    image: 'https://images.unsplash.com/photo-1676441019594-07142b925bc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80',
    badge: 'Popular',
    highlights: ['Gondola Ride', 'Snow Activities', 'Ski Resort', 'Mountain Views']
  },
  {
    id: 2,
    name: 'Pahalgam Tour',
    price: 5499,
    duration: '2 Days / 1 Night',
    persons: 'Per Person',
    description: 'Discover the "Valley of Shepherds" — Pahalgam. A paradise for nature lovers with lush meadows, crystal rivers, and serene forests.',
    image: 'https://images.unsplash.com/photo-1708067614180-f6908189a9d9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80',
    badge: 'Trending',
    highlights: ['Baisaran Valley', 'Aru Valley', 'Betaab Valley', 'River Rafting']
  },
  {
    id: 3,
    name: 'Sonmarg Tour',
    price: 4499,
    duration: '1 Day / Daytrip',
    persons: 'Per Person',
    description: 'The "Meadow of Gold" — Sonmarg offers spectacular glacier views, wildflowers, and the famous Thajiwas Glacier trek for adventure seekers.',
    image: 'https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80',
    badge: 'Adventure',
    highlights: ['Thajiwas Glacier', 'Vishansar Lake', 'Pony Rides', 'Photography']
  },
  {
    id: 4,
    name: 'Srinagar Local Tour',
    price: 2999,
    duration: '1 Day',
    persons: 'Per Person',
    description: 'Explore the soul of Kashmir — Srinagar. Visit the iconic Dal Lake on a Shikara ride, Mughal Gardens, and the historic old city.',
    image: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80',
    badge: 'Must Do',
    highlights: ['Dal Lake Shikara', 'Mughal Gardens', 'Hazratbal Mosque', 'Old City Walk']
  },
  {
    id: 5,
    name: 'Complete J&K Tour',
    price: 14999,
    duration: '7 Days / 6 Nights',
    persons: 'Per Person',
    description: 'The ultimate Jammu & Kashmir experience! Explore Srinagar, Gulmarg, Pahalgam, Sonmarg, and Jammu in one complete premium journey.',
    image: 'https://images.unsplash.com/photo-1708066762984-94e82c09ad3f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80',
    badge: 'Best Value',
    highlights: ['All Major Destinations', 'Houseboat Stay', 'All Transfers', 'Expert Guide']
  }
];

const FALLBACK_GALLERY = [
  { id: 1, url: 'https://images.unsplash.com/photo-1672215251935-0edbeec181ce?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1676441019594-07142b925bc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Gulmarg Winter' },
  { id: 3, url: 'https://images.unsplash.com/photo-1708067614180-f6908189a9d9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Pahalgam Valley' },
  { id: 4, url: 'https://images.unsplash.com/photo-1643449415644-ba803f1cd03d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Sonmarg Meadows' },
  { id: 5, url: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Dal Lake' },
  { id: 6, url: 'https://images.unsplash.com/photo-1676607969424-bc7946a98c8a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D-80', label: 'Snow Mountains' },
  { id: 7, url: 'https://images.unsplash.com/photo-1623482564246-0601b9aa1af1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Mountain Landscpape' },
  { id: 8, url: 'https://images.unsplash.com/photo-1716099934086-d64a79d43297?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Betab valley' },
  { id: 9, url: 'https://images.unsplash.com/photo-1684852363393-7aaf68f2c2e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'kashmir Forest' },
  { id: 10, url: 'https://images.unsplash.com/photo-1708066762984-94e82c09ad3f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Srinagar View' },
  { id: 11, url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Sunrise Mountains' },
  { id: 12, url: 'https://images.unsplash.com/photo-1689350078767-ba950794b264?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80', label: 'Kasmir Park' }
];

// ── PAGE LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1600);
});

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
  
  // Active link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
}

// ── TYPING ANIMATION ──
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  
  const phrases = [
    'Discover Paradise on Earth...',
    'Explore Magical Kashmir Valleys...',
    'Adventure Awaits in the Himalayas...',
    'Your Dream Vacation Starts Here...',
    'Unforgettable Journeys Await You...'
  ];
  
  let phrIdx = 0, charIdx = 0, deleting = false;
  
  function type() {
    const current = phrases[phrIdx];
    el.textContent = deleting
      ? current.substring(0, charIdx--)
      : current.substring(0, charIdx++);
    
    let speed = deleting ? 50 : 80;
    if (!deleting && charIdx > current.length) {
      speed = 2000;
      deleting = true;
    } else if (deleting && charIdx < 0) {
      deleting = false;
      phrIdx = (phrIdx + 1) % phrases.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  type();
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ── COUNTER ANIMATION ──
function initCounters() {
  const counters = document.querySelectorAll('.counter-num[data-count]');
  if (!counters.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            clearInterval(timer);
            entry.target.textContent = target.toLocaleString() + suffix;
          } else {
            entry.target.textContent = Math.floor(current).toLocaleString() + suffix;
          }
        }, 16);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(c => observer.observe(c));
}

// ── FETCH PACKAGES FROM APPS SCRIPT ──
async function fetchPackages() {
  if (CONFIG.useFallback) return FALLBACK_PACKAGES;
  try {
    const res = await fetch(`${CONFIG.appsScriptUrl}?action=getPackages`);
    const data = await res.json();
    return data.packages && data.packages.length ? data.packages : FALLBACK_PACKAGES;
  } catch {
    return FALLBACK_PACKAGES;
  }
}

// ── FETCH GALLERY FROM APPS SCRIPT ──
async function fetchGallery() {
  if (CONFIG.useFallback) return FALLBACK_GALLERY;
  try {
    const res = await fetch(`${CONFIG.appsScriptUrl}?action=getGallery`);
    const data = await res.json();
    return data.images && data.images.length ? data.images : FALLBACK_GALLERY;
  } catch {
    return FALLBACK_GALLERY;
  }
}

// ── RENDER PACKAGES ──
async function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;
  
  grid.innerHTML = `<div class="package-loading"><div class="spinner"></div><p>Loading tour packages...</p></div>`;
  
  const packages = await fetchPackages();
  
  grid.innerHTML = packages.map(pkg => `
    <div class="package-card reveal" data-pkg-id="${pkg.id}" onclick="openBookingModal('${escHtml(pkg.name)}')">
      <div class="package-card-img">
        <img src="${pkg.image}" alt="${escHtml(pkg.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80'">
        <span class="package-badge">${escHtml(pkg.badge || 'Tour')}</span>
      </div>
      <div class="package-card-body">
        <h3 class="package-card-title">${escHtml(pkg.name)}</h3>
        <p class="package-card-desc">${escHtml(pkg.description)}</p>
        <div class="package-card-meta">
          <div class="package-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${escHtml(pkg.duration)}
          </div>
          <div class="package-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            ${escHtml(pkg.persons)}
          </div>
        </div>
        <div class="package-card-footer">
          <div class="package-price">
            <span class="package-price-label">Starting from</span>
            <span class="package-price-amount">₹${Number(pkg.price).toLocaleString('en-IN')}<span>/pp</span></span>
          </div>
          <button class="btn btn-accent" onclick="event.stopPropagation(); openBookingModal('${escHtml(pkg.name)}')">
            Book Now ✈
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  initScrollReveal();
}

// ── RENDER GALLERY ──
async function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  
  grid.innerHTML = `<div style="text-align:center;padding:60px;color:var(--text-light)"><div class="spinner" style="border-color:rgba(10,61,98,0.15);border-top-color:var(--primary)"></div></div>`;
  
  const images = await fetchGallery();
  window._galleryImages = images;
  
  grid.innerHTML = images.map((img, i) => `
    <div class="gallery-item reveal" onclick="openLightbox(${i})">
      <img src="${img.url}" alt="${escHtml(img.label || 'Kashmir')}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80'">
      <div class="gallery-item-overlay">
        <span class="gallery-item-label">📍 ${escHtml(img.label || 'Kashmir')}</span>
      </div>
    </div>
  `).join('');
  
  initScrollReveal();
}

// ── LIGHTBOX ──
let currentLightboxIdx = 0;

function openLightbox(idx) {
  const images = window._galleryImages || [];
  if (!images.length) return;
  currentLightboxIdx = idx;
  
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  
  img.src = images[idx].url;
  img.alt = images[idx].label || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  const images = window._galleryImages || [];
  currentLightboxIdx = (currentLightboxIdx + dir + images.length) % images.length;
  const img = document.getElementById('lightbox-img');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = images[currentLightboxIdx].url;
      img.style.opacity = '1';
    }, 200);
  }
}

// ── BOOKING MODAL ──
function openBookingModal(packageName) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  const pkgSelect = modal.querySelector('[name="package"]');
  if (pkgSelect && packageName) {
    for (let opt of pkgSelect.options) {
      if (opt.value === packageName || opt.text === packageName) {
        pkgSelect.value = opt.value;
        break;
      }
    }
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ── BOOKING FORM SUBMIT ──
function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.form-submit');
  
  const data = {
    name: form.querySelector('[name="name"]')?.value || '',
    phone: form.querySelector('[name="phone"]')?.value || '',
    email: form.querySelector('[name="email"]')?.value || '',
    pkg: form.querySelector('[name="package"]')?.value || '',
    persons: form.querySelector('[name="persons"]')?.value || '',
    date: form.querySelector('[name="date"]')?.value || '',
    message: form.querySelector('[name="message"]')?.value || ''
  };
  
  btn.classList.add('loading');
  
  setTimeout(() => {
    const text = encodeURIComponent(
      `🌄 *New Booking Request - Sun Seekers Travels*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📱 *Phone:* ${data.phone}\n` +
      `📧 *Email:* ${data.email}\n` +
      `🏔️ *Package:* ${data.pkg}\n` +
      `👥 *Persons:* ${data.persons}\n` +
      `📅 *Travel Date:* ${data.date}\n` +
      `💬 *Message:* ${data.message || 'No additional message'}\n\n` +
      `_Sent via sunseekerstravels.com_`
    );
    
    btn.classList.remove('loading');
    closeBookingModal();
    form.reset();
    
    window.open(`https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  }, 1500);
}

// ── CONTACT FORM SUBMIT ──
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  
  const name = form.querySelector('[name="name"]')?.value || '';
  const email = form.querySelector('[name="email"]')?.value || '';
  const subject = form.querySelector('[name="subject"]')?.value || '';
  const message = form.querySelector('[name="message"]')?.value || '';
  
  if (btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
  }
  
  setTimeout(() => {
    const text = encodeURIComponent(
      `📩 *Contact Form - Sun Seekers Travels*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📌 *Subject:* ${subject}\n` +
      `💬 *Message:* ${message}\n\n` +
      `_Sent via sunseekerstravels.com_`
    );
    
    if (btn) { btn.textContent = 'Send Message 💬'; btn.disabled = false; }
    form.reset();
    
    window.open(`https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  }, 1500);
}

// ── TESTIMONIALS SLIDER ──
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.slider-dot');
  if (!track) return;
  
  let current = 0;
  const total = track.children.length;
  
  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  
  window.sliderPrev = () => goTo(current - 1);
  window.sliderNext = () => goTo(current + 1);
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  
  setInterval(() => goTo(current + 1), 5000);
}

// ── PARTICLES (hero) ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = Array.from({length: 60}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.5 + 0.2),
    alpha: Math.random() * 0.5 + 0.1
  }));
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.y < -5) p.y = canvas.height + 5;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ── POPULATE PACKAGE SELECT ──
async function populatePackageSelect() {
  const selects = document.querySelectorAll('select[name="package"]');
  if (!selects.length) return;
  
  const packages = await fetchPackages();
  selects.forEach(sel => {
    const current = sel.value;
    sel.innerHTML = '<option value="">Select a Package</option>' +
      packages.map(p => `<option value="${escHtml(p.name)}">${escHtml(p.name)} — ₹${Number(p.price).toLocaleString('en-IN')}</option>`).join('');
    if (current) sel.value = current;
  });
}

// ── HELPERS ──
function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : '💬'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTyping();
  initScrollReveal();
  initCounters();
  initParticles();
  initTestimonialsSlider();
  
  if (document.getElementById('packages-grid')) renderPackages();
  if (document.getElementById('gallery-grid')) renderGallery();
  
  populatePackageSelect();
  
  // Booking modal close
  document.getElementById('booking-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeBookingModal();
  });
  
  // Lightbox close
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  
  // Booking forms
  document.querySelectorAll('.booking-form').forEach(f => {
    f.addEventListener('submit', handleBookingSubmit);
  });
  
  // Contact forms
  document.querySelectorAll('.contact-form').forEach(f => {
    f.addEventListener('submit', handleContactSubmit);
  });
  
  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeLightbox();
    }
  });
});
