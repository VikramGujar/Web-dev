document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing');
    const words = ['Tony Stark', 'IRON-MAN'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }
    type();

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500); // Adjust timing as needed
});
