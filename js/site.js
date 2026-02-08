console.log('Valentine JS loaded');

const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

yesButton.addEventListener('click', () => {
    const audio = document.getElementById('yes-sound');
    audio.volume = 0.1;
    audio.play();
    document.querySelector('section').innerHTML = `
        <h1>Yay! You said Yes!</h1>
        <p>Happy Valentine's Day, Bri!</p>
        <p>Here's a special message for you:</p>
        <p>You are so sigma, and I'm so glad you said yes!</p>
        <!-- Add more content here, like images, videos, or other elements -->
        <img src="./images/hellokitty.jpg" alt="Heart" style="width: 200px;" />
    `;
    confetti();
});

noButton.addEventListener('click', () => {
    const audio = document.getElementById('no-sound');
    audio.volume = 1; 
    audio.play();
    document.querySelector('section').innerHTML = `
        <div style="background-color: #000000; color: white; min-height: 100vh; padding: 50px; text-align: center; font-family: 'Creepster', cursive;">
            <img src="./images/FeddyFatBear.gif" alt="BearScare" style="width: 500px;" />
            <h1>...</h1>
            <p>That's okay, maybe next time!</p>
            <p>But I still think you're awesome.</p>
            <button class="play-again-button" onclick="location.reload()">Play Again</button>
        </div>
    `;
});
