const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heart = document.getElementById('heart');

function showHeartAndSendEmail() {
    heart.classList.remove('hidden');
    
    // E-posta gönderme
    const subject = 'Barışma Teklifi';
    const body = 'Evet, barışmak istiyorum! ❤️';
    const mailtoLink = `mailto:fatihyaka00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // E-posta penceresini aç
    window.location.href = mailtoLink;
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