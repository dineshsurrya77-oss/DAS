// === PIN & NAVIGATION STATE ===
let currentPin = '';
const CORRECT_PIN = '1004';
let currentPhoto = 0;

// Photo data with raw GitHub URLs
const photos = [
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/1.jpg', caption: 'Happy Birthday, My Love 💖' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/2.jpg', caption: 'Your beautiful smile! ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/3.jpg', caption: 'Us Against the World 🌍' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/4.jpg', caption: 'Forever & Always 💕' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/5.jpg', caption: 'My Favorite Person 🥰' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/6.jpg', caption: 'Adventure Buddies 🗺️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/7.jpg', caption: 'Pure Happiness 😊' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/her/8.jpg', caption: 'My Sunshine ☀️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/KG_CINEMAS%20OUTING/1.jpg', caption: 'Movie Date! 🍿' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/das/Kovil/1.jpg', caption: 'Peaceful Moments ✨' },
];

// === STICKER DATA ===
const stickerEmojis = ['🧸','🎀','🕷️','🐱','❤️','⭐','🌟','🎂','🎈','🎁','💝','🦋','🌸','✨','💫','🎉'];

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  createFloatingStickers();
  createConfetti();
  setupPinPad();
  setupGallery();
});

// === FLOATING STICKERS ===
function createFloatingStickers() {
  const container = document.getElementById('sticker-layer');
  for (let i = 0; i < 15; i++) {
    const s = document.createElement('div');
    s.className = 'sticker';
    s.textContent = stickerEmojis[Math.floor(Math.random() * stickerEmojis.length)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.fontSize = (1.2 + Math.random() * 2) + 'rem';
    s.style.animationDuration = (4 + Math.random() * 6) + 's';
    s.style.animationDelay = (Math.random() * 4) + 's';
    s.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(s);
  }
}

// === CONFETTI BACKGROUND ===
function createConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#E63946','#457B9D','#FFD166','#A8DADC','#FFB4C2','#F1FAEE','#FF6B6B'];

  for (let i = 0; i < 60; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      w: 4 + Math.random() * 6,
      h: 8 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      speed: 0.3 + Math.random() * 0.8,
      rotSpeed: (Math.random() - 0.5) * 2,
      opacity: 0.3 + Math.random() * 0.4
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();

      p.y += p.speed;
      p.rotation += p.rotSpeed;
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// === PIN PAD ===
function setupPinPad() {
  document.querySelectorAll('.pin-btn[data-num]').forEach(btn => {
    btn.addEventListener('click', () => pressPin(btn.dataset.num));
  });
}

function pressPin(num) {
  if (currentPin.length >= 4) return;
  currentPin += num;
  updatePinDisplay();
  if (currentPin.length === 4) {
    setTimeout(checkPin, 300);
  }
}

function deletePin() {
  currentPin = currentPin.slice(0, -1);
  updatePinDisplay();
  document.getElementById('pin-error').textContent = '';
}

function clearPin() {
  currentPin = '';
  updatePinDisplay();
  document.getElementById('pin-error').textContent = '';
}

function updatePinDisplay() {
  const dots = document.querySelectorAll('.pin-dot');
  dots.forEach((dot, i) => {
    if (i < currentPin.length) {
      dot.textContent = '●';
      dot.classList.add('filled');
    } else {
      dot.textContent = '';
      dot.classList.remove('filled');
    }
  });
}

function checkPin() {
  if (currentPin === CORRECT_PIN) {
    navigateTo('page-gifts');
  } else {
    document.getElementById('pin-error').textContent = '❌ Wrong PIN! Try again...';
    currentPin = '';
    updatePinDisplay();
    document.querySelectorAll('.pin-dot').forEach(d => {
      d.style.borderColor = '#ff6b6b';
      setTimeout(() => d.style.borderColor = '', 600);
    });
  }
}

// === GALLERY ===
function setupGallery() {
  updatePhoto();
}

function updatePhoto() {
  const img = document.getElementById('gallery-img');
  const caption = document.getElementById('gallery-caption');
  const counter = document.getElementById('photo-counter');

  img.style.opacity = '0';
  setTimeout(() => {
    img.src = photos[currentPhoto].src;
    caption.textContent = photos[currentPhoto].caption;
    counter.textContent = `${currentPhoto + 1} / ${photos.length}`;
    img.style.opacity = '1';
  }, 200);
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  updatePhoto();
}

function prevPhoto() {
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  updatePhoto();
}

// === NAVIGATION ===
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  target.classList.remove('active');
  // Force reflow for animation
  void target.offsetWidth;
  target.classList.add('active');
  window.scrollTo(0, 0);
}

// === VINYL PLAY/PAUSE ===
function toggleVinyl() {
  const vinyl = document.querySelector('.vinyl-record');
  vinyl.classList.toggle('paused');
}
