// === PIN & NAVIGATION STATE ===
let currentPin = '';
const CORRECT_PIN = '1506';
let currentPhoto = 0;

// Photo data with raw GitHub URLs
const photos = [
  // Varnam Day 1 (1-33)
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/1.jpg', caption: 'Varnam Day 1: A beautiful start! ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/2.jpg', caption: 'Your radiance outshines the stars 🌟' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/3.jpg', caption: 'Pure joy in every moment 😊' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/4.jpg', caption: 'Capturing your elegance 👗' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/5.jpg', caption: 'That beautiful smile I love so much ❤️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/6.jpg', caption: 'Simply stunning! ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/7.jpg', caption: 'A moment frozen in time ❄️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/8.jpg', caption: 'You make every day feel like a celebration 🥂' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/9.jpg', caption: 'Graceful as always 🦢' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/10.jpg', caption: 'My heart skips a beat! 💓' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/11.jpg', caption: 'Shining brighter than the stage lights 💡' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/12.jpg', caption: 'The highlight of my day 🌈' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/13.jpg', caption: 'Everything about you is perfect ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/14.jpg', caption: 'A true queen 👑' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/15.jpg', caption: 'Love this energy! ⚡' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/16.jpg', caption: 'You are a work of art 🎨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/17.jpg', caption: 'Blessed to see you shine 🙏' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/18.jpg', caption: 'That look says everything 😍' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/19.jpg', caption: 'Radiating positivity ☀️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/20.jpg', caption: 'Unforgettable moments 🎞️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/21.jpg', caption: 'Your style is unmatched 👗' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/22.jpg', caption: 'Every pose is perfect 📸' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/23.jpg', caption: 'The belle of the ball 🌹' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/24.jpg', caption: 'Pure enchantment ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/25.jpg', caption: 'My favorite view 🏙️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/26.jpg', caption: 'Lost in your eyes 👀' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/27.jpg', caption: 'A dream come true 💭' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/28.jpg', caption: 'Simply breathtaking 💨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/29.jpg', caption: 'The magic is you ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/30.jpg', caption: 'Cherished memories ❤️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/31.jpg', caption: 'You light up the room 🕯️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/32.jpg', caption: 'Always and forever 💕' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_1_2026/33.jpg', caption: 'The end of Day 1, but the start of us! 🌅' },

  // Varnam Day 2 (1-15)
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/1.jpg', caption: 'Varnam Day 2: The magic continues! ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/2.jpg', caption: 'Double the beauty! 😍' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/3.jpg', caption: 'Vibrant and full of life 🌈' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/4.jpg', caption: 'That sparkle in your eye ✨' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/5.jpg', caption: 'Another day of being perfect ❤️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/6.jpg', caption: 'I could stare at you all day 🕰️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/7.jpg', caption: 'Pure elegance 💎' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/8.jpg', caption: 'Simply the best! 🥇' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/9.jpg', caption: 'Captivated by your charm 🪄' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/10.jpg', caption: 'My world is better with you 🌍' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/11.jpg', caption: 'A moment of serenity 🍃' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/12.jpg', caption: 'The definition of grace 🦢' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/13.jpg', caption: 'Your presence is a blessing 🙏' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/14.jpg', caption: 'So proud of you! ❤️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/Varnam_Day_2_2026/15.jpg', caption: 'Ending the event on a high note! 🎵' },

  // Extra Gems (2 photos)
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/8.jpg', caption: 'A candid moment of pure love ❤️' },
  { src: 'https://raw.githubusercontent.com/dineshsurrya77-oss/DAS/main/html%20files/backend/dsdas/20260207_140023.jpg', caption: 'Forever starts today 💍' },
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
  const bg = document.getElementById('gallery-bg');
  const caption = document.getElementById('gallery-caption');
  const counter = document.getElementById('photo-counter');

  img.style.opacity = '0';
  setTimeout(() => {
    img.src = photos[currentPhoto].src;
    bg.style.backgroundImage = `url('${photos[currentPhoto].src}')`;
    caption.textContent = photos[currentPhoto].caption;
    counter.textContent = `${currentPhoto + 1} / ${photos.length}`;
    img.style.opacity = '1';
  }, 200);
}

let galleryInterval;

// === NAVIGATION ===
function navigateTo(pageId) {
  const galleryAudio = document.getElementById('gallery-audio');

  // Clear any existing intervals when navigating
  if (galleryInterval) {
    clearInterval(galleryInterval);
    galleryInterval = null;
  }

  // Handle Gallery Music
  if (pageId === 'page-gallery') {
    galleryAudio.play().catch(e => console.log("Playback failed:", e));
  } else {
    galleryAudio.pause();
    galleryAudio.currentTime = 0; // Reset to start
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  target.classList.remove('active');
  // Force reflow for animation
  void target.offsetWidth;
  target.classList.add('active');
  window.scrollTo(0, 0);

  // Start auto-slideshow if entering gallery
  if (pageId === 'page-gallery') {
    startAutoSlide();
  }
}

function startAutoSlide() {
  if (galleryInterval) clearInterval(galleryInterval);
  galleryInterval = setInterval(() => {
    nextPhoto();
  }, 4000); // Switch every 4 seconds
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  updatePhoto();
}

function prevPhoto() {
  // Reset timer on manual click
  if (galleryInterval) startAutoSlide();
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  updatePhoto();
}

// Intercept manual next click to reset timer
function nextPhotoManual() {
  if (galleryInterval) startAutoSlide();
  nextPhoto();
}

// === VINYL PLAY/PAUSE ===
function toggleVinyl() {
  const vinyl = document.querySelector('.vinyl-record');
  vinyl.classList.toggle('paused');
}
