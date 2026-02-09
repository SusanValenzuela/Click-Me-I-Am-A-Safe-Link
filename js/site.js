console.log('Valentine JS loaded');

const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Redirect to Yes page
yesButton.addEventListener('click', () => {
    window.location.href = "yes.html";
});

// Redirect to No page
noButton.addEventListener('click', () => {
    window.location.href = "no.html";
});

