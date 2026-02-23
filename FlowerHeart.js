const emojis = ["💐", "🌷", "🌹", "🌼", "🌻", "🌺", "🌸", "❤️", "🩷", "🤍", "💜", "💚", "I Love You Dawson"];
const container = document.getElementById('emoji-container');
var button = document.querySelector('button');

button.onclick = function generateRandomEmoji() {

    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji");

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.textContent = randomEmoji;

    const maxX = container.clientWidth;
    const maxY = container.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    emojiElement.style.left = `${randomX}px`;
    emojiElement.style.top = `${randomY}px`;

    container.appendChild(emojiElement);

    setTimeout(() => {
        emojiElement.remove();
    }, 5000);
}
