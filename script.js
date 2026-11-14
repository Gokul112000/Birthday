const reasons = [
  'Your smile makes my whole world feel lighter.',
  'The way you look at me feels like a gentle homecoming.',
  'You make even ordinary days feel magical.',
  'Your laughter is the sweetest kind of music.',
  'You love with so much warmth and sincerity.',
  'You inspire me to become a better version of myself.',
  'Your heart is one of the kindest things I have ever known.',
  'You make me feel safe, calm, and deeply loved.',
  'You are beautiful in the quietest, deepest ways.',
  'You know exactly how to make my worries disappear.',
  'You bring out the best in me without even trying.',
  'Your presence turns chaos into comfort.',
  'You always see the good in people and in life.',
  'Your kindness is rare and beautifully genuine.',
  'You never fail to make me smile when I need it most.',
  'I love how thoughtful you are with every little detail.',
  'Your love feels like a soft sunrise after a long night.',
  'You make every dream feel more reachable.',
  'You are my favorite person to talk to, even in silence.',
  'Your eyes carry a calm and beautiful kind of love.',
  'You have a heart that makes life feel warmer.',
  'You are the most comforting person I know.',
  'Your support makes me feel brave enough for everything.',
  'You make love feel easy, honest, and real.',
  'You make me feel like I am enough just as I am.',
  'You bring peace into my soul.',
  'You are my comfort, my joy, and my home.',
  'Your energy is comforting and beautiful.',
  'I love the way you make life feel more colorful.',
  'You listen with such tenderness.',
  'You make even difficult moments feel manageable.',
  'I love how naturally you care for the people you love.',
  'Your love has changed me in the best way.',
  'You make me want to be more patient, kinder, and better.',
  'Your sweetness is one of my favorite things about you.',
  'I love the way you believe in us.',
  'You make life feel more beautiful with every passing day.',
  'You are my safe place and my biggest joy.',
  'You make my heart feel full in the simplest ways.',
  'Your love feels like home.',
  'You are the reason I believe in love so deeply.',
  'You make me feel adored in every ordinary moment.',
  'Your presence makes everything feel better.',
  'You make me want to hold onto happy moments forever.',
  'I love your gentle strength.',
  'You bring out the softness and beauty in my heart.',
  'Your laugh is one of my favorite sounds in the world.',
  'You make the future feel full of wonder.',
  'I love how easy it is to be myself with you.',
  'You make every memory feel precious.',
  'Your love gives meaning to my quietest moments.',
  'You are the kind of person I want to keep choosing every day.',
  'I love how deeply you care.',
  'You make my world feel brighter with every thought of you.',
  'Your heart is my favorite place to rest.',
  'You remind me that love can be simple and profound at once.',
  'I love your tender, thoughtful ways.',
  'You make me feel like I am the luckiest person alive.',
  'Your love makes me feel totally alive.',
  'I admire the beautiful soul you carry.',
  'You make ordinary days feel like a celebration.',
  'Your affection makes my heart bloom.',
  'I love how beautifully you make me feel seen.',
  'You are my sweetest blessing.',
  'Your love fills the empty corners of my heart.',
  'I love the way you make everything feel intentional.',
  'You make my life softer, sweeter, and brighter.',
  'You are captivating in every way.',
  'I love how your love feels like a gentle promise.',
  'Your smile can change my mood in a second.',
  'You are my favorite chapter and my forever ending.',
  'I love the way you hold my heart so gently.',
  'Your presence brings me peace and courage alike.',
  'You are deeply beautiful, inside and out.',
  'I love watching you live life with such grace.',
  'You make everything feel like it is worth waiting for.',
  'You are the calm after all my storms.',
  'I love how you make me feel so lucky to know you.',
  'Your heart is one of my sweetest treasures.',
  'I love your kind soul more than words can say.',
  'You teach me love by simply being yourself.',
  'You are my favorite dream come true.',
  'I love your beautiful mind, your heart, and your spirit.',
  'Your love makes me feel whole and hopeful.',
  'You are the reason I smile without even noticing.',
  'I love how you make life feel full of wonder.',
  'You are my forever favorite person.',
  'I love the way you make my heart race for all the right reasons.',
  'You make my days feel brighter and my nights feel softer.',
  'Your love is my most treasured gift.',
  'I love the way you make me feel like I belong.',
  'Your kindness changes everything around you.',
  'You make my world feel endlessly warm.',
  'I love how much love you carry in you.',
  'You are my endless source of comfort and joy.',
  'Your name is one of my favorite sounds.',
  'I love your beautiful way of making love feel effortless.',
  'You are my heart’s favorite person.',
  'I love the peace I feel when I am with you.',
  'You are my dream, my home, and my forever.',
  'I love everything about the way you love me.',
  'You make me feel cherished in the smallest ways.',
  'Your soul is beautiful, and I am grateful for it.',
  'You make my heart want to stay forever in this moment.',
  'You are my sweetest reason for believing in magic.',
  'I love the way your love feels so real and so gentle.',
  'You make life feel like it has a brighter horizon.',
  'I love you more with every passing day.'
];

const starMessages = [
  'May your dreams sparkle',
  'May love follow you always',
  'May joy find you every day',
  'May your heart stay warm',
  'May every wish come true',
  'May fortune smile on you',
  'May our story stay beautiful',
  'May kindness surround you',
  'May our love glow brighter',
  'May happiness bloom forever',
  'May every tomorrow feel magical',
  'May your soul stay peaceful',
  'May laughter always be yours',
  'May your heart feel cherished',
  'May hope keep lighting your path',
  'May every dream feel close'
];

const countdownTarget = new Date('2026-12-21T00:00:00');
const countdownEls = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function playSong() {
  const audio = document.getElementById('birthdaySong');
  const playBtn = document.getElementById('playSongBtn');
  if (!audio || !playBtn) return;

  audio.volume = 0.35;

  if (audio.paused) {
    audio.play().catch(() => {
      // Autoplay may be blocked until user interaction; this is handled by the button click.
    });
    playBtn.textContent = 'Pause song';
  } else {
    audio.pause();
    playBtn.textContent = 'Play song';
  }
}

function updateCountdown() {
  if (!countdownEls.days || !countdownEls.hours || !countdownEls.minutes || !countdownEls.seconds) {
    return;
  }

  const now = new Date();
  let diff = countdownTarget.getTime() - now.getTime();

  if (diff < 0) {
    diff = 0;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEls.days.textContent = String(days).padStart(2, '0');
  countdownEls.hours.textContent = String(hours).padStart(2, '0');
  countdownEls.minutes.textContent = String(minutes).padStart(2, '0');
  countdownEls.seconds.textContent = String(seconds).padStart(2, '0');
}

function renderReasons() {
  const container = document.getElementById('reasonsList');
  if (!container) return;

  reasons.forEach((reason, index) => {
    const item = document.createElement('div');
    item.className = 'reason-item';
    item.innerHTML = `<strong>${index + 1}</strong>${reason}`;
    container.appendChild(item);
  });
}

function renderStars() {
  const container = document.getElementById('starContainer');
  if (!container) return;

  starMessages.forEach((message) => {
    const badge = document.createElement('div');
    badge.className = 'star-badge';
    badge.textContent = message;
    container.appendChild(badge);
  });
}

function revealBirthdayWish() {
  const countdown = document.getElementById('countdown');
  if (countdown) {
    countdown.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  playSong();

  const revealBtn = document.getElementById('revealWish');
  if (revealBtn) {
    revealBtn.textContent = 'Birthday Wish Unlocked';
    revealBtn.disabled = true;
  }
}

function createFireworkBurst() {
  const wrap = document.getElementById('fireworksWrap');
  if (!wrap) return;

  const colors = ['#ff6ec7', '#ffd166', '#8de6ff', '#ff8fab', '#c7a3ff'];
  const burst = document.createElement('div');
  burst.className = 'firework';
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.7;
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  burst.style.background = colors[Math.floor(Math.random() * colors.length)];
  wrap.appendChild(burst);
  setTimeout(() => burst.remove(), 1800);

  for (let i = 0; i < 10; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'heart-burst';
    heart.innerHTML = '❤';
    heart.style.left = `${x + (Math.random() - 0.5) * 50}px`;
    heart.style.top = `${y + (Math.random() - 0.5) * 50}px`;
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDelay = `${Math.random() * 0.4}s`;
    wrap.appendChild(heart);
    setTimeout(() => heart.remove(), 2800);
  }
}

function startCelebration() {
  const btn = document.getElementById('celebrateBtn');
  if (!btn) return;

  btn.textContent = 'Celebrating...';
  btn.disabled = true;

  const wrap = document.getElementById('fireworksWrap');
  if (wrap) {
    wrap.innerHTML = '';
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (AudioContextClass) {
    const audioContext = new AudioContextClass();
    const notes = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63, 440.0, 523.25];

    notes.forEach((freq, i) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.value = freq;
      gainNode.gain.value = 0.025;
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start(audioContext.currentTime + i * 0.18);
      oscillator.stop(audioContext.currentTime + i * 0.18 + 0.14);
    });
  }

  for (let i = 0; i < 18; i += 1) {
    setTimeout(createFireworkBurst, i * 170);
  }

  setTimeout(() => {
    btn.textContent = 'Celebrate Again';
    btn.disabled = false;
  }, 3400);
}

function revealSecret() {
  const secretMessage = document.getElementById('secretMessage');
  secretMessage.classList.toggle('hidden');
}

function toggleCakeCandles(event) {
  const birthdayCake = document.getElementById('birthdayCake');
  if (birthdayCake && birthdayCake.contains(event.target)) {
    return;
  }

  const candles = document.querySelectorAll('.candle');
  let allOff = true;

  candles.forEach((candle) => {
    if (!candle.classList.contains('off')) {
      allOff = false;
    }
  });

  candles.forEach((candle) => {
    candle.classList.remove('lit');
    if (allOff) {
      candle.classList.remove('off');
    } else {
      candle.classList.add('off');
    }
  });
}

function redirectToStartOnRefresh() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const isStartPage = currentPage === 'index.html';
  const cameFromLink = sessionStorage.getItem('birthdayLinkFlow') === 'true';

  sessionStorage.removeItem('birthdayLinkFlow');

  if (!isStartPage && !cameFromLink) {
    window.location.replace('index.html');
  }
}

function setupBirthdayPuzzle() {
  const clickMeBtn = document.getElementById('clickMeBtn');
  const puzzleCard = document.getElementById('birthdayPuzzle');
  const birthdayInput = document.getElementById('birthdayInput');
  const verifyBirthdayBtn = document.getElementById('verifyBirthdayBtn');
  const puzzleMessage = document.getElementById('puzzleMessage');

  if (!clickMeBtn || !puzzleCard || !birthdayInput || !verifyBirthdayBtn || !puzzleMessage) {
    return;
  }

  clickMeBtn.addEventListener('click', () => {
    puzzleCard.classList.remove('hidden');
    birthdayInput.focus();
  });

  const checkBirthday = () => {
    const enteredDate = birthdayInput.value.trim();
    const correctDate = '21-12-2002';

    if (enteredDate === correctDate) {
      puzzleMessage.textContent = 'Correct! Happy Birthday, mylove Bhavadharani! Opening your surprise...';
      puzzleMessage.classList.remove('error');
      puzzleMessage.classList.add('success');

      sessionStorage.setItem('birthdayLinkFlow', 'true');
      setTimeout(() => {
        window.location.assign('birthday.html');
      }, 900);
      return;
    }

    puzzleMessage.textContent = 'Oops! Try 21-12-2004.';
    puzzleMessage.classList.remove('success');
    puzzleMessage.classList.add('error');
    birthdayInput.value = '';
    birthdayInput.focus();
  };

  verifyBirthdayBtn.disabled = false;
  verifyBirthdayBtn.addEventListener('click', checkBirthday);
  birthdayInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkBirthday();
    }
  });
}

function initialize() {
  redirectToStartOnRefresh();
  setupBirthdayPuzzle();
  renderReasons();
  renderStars();
  updateCountdown();
  setInterval(updateCountdown, 1000);

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        sessionStorage.setItem('birthdayLinkFlow', 'true');
      }
    });
  });

  const openWishLink = document.getElementById('openWishLink');
  if (openWishLink) {
    openWishLink.addEventListener('click', () => {
      setTimeout(() => playSong(), 200);
    });
  }

  const revealWishBtn = document.getElementById('revealWish');
  if (revealWishBtn) {
    revealWishBtn.addEventListener('click', revealBirthdayWish);
  }

  const playSongBtn = document.getElementById('playSongBtn');
  if (playSongBtn) {
    playSongBtn.addEventListener('click', playSong);
  }

  const birthdaySong = document.getElementById('birthdaySong');
  if (birthdaySong) {
    birthdaySong.addEventListener('ended', () => {
      const songBtn = document.getElementById('playSongBtn');
      if (songBtn) {
        songBtn.textContent = 'Play song';
      }
    });
  }

  const revealSecretBtn = document.getElementById('revealSecret');
  if (revealSecretBtn) {
    revealSecretBtn.addEventListener('click', revealSecret);
  }

  const celebrateBtn = document.getElementById('celebrateBtn');
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', startCelebration);
  }
}

initialize();
