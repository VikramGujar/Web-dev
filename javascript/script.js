const texts = ["Tony Stark", "IRON-MAN"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

function type() {
    const dynamicTextElement = document.getElementById("dynamic-text");

    if (!isDeleting && charIndex < texts[index].length) {
        currentText += texts[index].charAt(charIndex);
        charIndex++;
        dynamicTextElement.textContent = currentText;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        charIndex--;
        dynamicTextElement.textContent = currentText;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[index].length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTexts);
});
