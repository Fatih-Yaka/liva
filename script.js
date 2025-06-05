const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heart = document.getElementById('heart');

function showHeart() {
    heart.classList.remove('hidden');
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Masaüstü için hover olayı
noBtn.addEventListener('mouseover', moveButton);

// Mobil için dokunma olayı
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
}); 