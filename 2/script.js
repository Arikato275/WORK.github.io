document.addEventListener('DOMContentLoaded', function() {
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submitAnswer');
    const resultElement = document.getElementById('result');
    const nextPageButton = document.getElementById('nextPageButton');
    const jumpscareContainer = document.getElementById('jumpscare-container');
    const jumpscareImage = document.getElementById('jumpscare-image');
    const jumpscareAudio = document.getElementById('jumpscare-audio');

    const correctAnswer = "3"; // คำตอบที่ถูกต้องคือ 3

    submitButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim();

        submitButton.classList.remove('correct', 'incorrect');
        jumpscareContainer.style.display = 'none';
        jumpscareAudio.pause();
        jumpscareAudio.currentTime = 0;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = "ถูกต้อง! x = " + correctAnswer;
            resultElement.style.color = "green";
            nextPageButton.classList.remove('disabled');
            nextPageButton.classList.add('enabled');
            submitButton.classList.add('correct');
        } else {
            resultElement.textContent = "ไม่ถูกต้อง ลองใหม่อีกครั้ง";
            resultElement.style.color = "red";
            nextPageButton.classList.remove('enabled');
            nextPageButton.classList.add('disabled');
            submitButton.classList.add('incorrect');

            // แสดง Jumpscare และเล่นเสียง (ถ้ามีการตั้งค่า)
            jumpscareContainer.style.display = 'flex';
            if (jumpscareAudio) {
                jumpscareAudio.play();
            }

            // เปลี่ยนเส้นทางกลับไปหน้าแรกหลังจาก 2 วินาที และแทนที่ History
            setTimeout(function() {
                window.location.replace('../index.html'); // ใช้ replace แทน href
            }, 1000);
        }

        answerInput.value = "";
    });

    nextPageButton.addEventListener('click', function() {
        if (this.classList.contains('enabled')) {
            window.location.href = 'nextpage.html'; // อาจจะต้องปรับพาธด้วย
        } else {
            alert("กรุณาตอบคำถามให้ถูกต้องก่อนไปยังหน้าถัดไป");
        }
    });
});