document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.querySelector('.confetti-container');
    const numberOfConfetti = 100;

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        confettiContainer.appendChild(confetti);
    }

    const messageElement = document.querySelector('.message');
    const messageText = "ยินดีที่ผ่านได้นะ อยากแนะนำตัวแต่ก็กลัวโดนดักตี";
    messageElement.textContent = messageText;
});