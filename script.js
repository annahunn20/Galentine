const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😢",
    "But it's Galentine's! 💖",
    "Pookie please... 💕",
    "Just think about it! 🌸",
    "If you say no, I'll be sad... 😭",
    "I will be very sad... 😞",
    "I will be very very sad... 💔",
    "Okay fine, I give up... 😣",
    "Just kidding! Say yes, bestie! 💖"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${currentSize * 0.8}px`;  // Shrinks instead of enlarging "Yes"
}

function handleYesClick() {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="header_text">Knew you would say yes! 💖</h1>
            <div class="gif_container">
                <img src="https://media4.giphy.com/media/9XY4f3FgFTT4QlaYqa/giphy.gif" alt="Excited GIF">
            </div>
        </div>
    `;
}
