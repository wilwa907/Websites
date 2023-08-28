// JavaScript for the button-functionality on the index.html site
const clickableLabel = document.getElementById('clickableLabel');
const buttonContainer = document.getElementById('buttonContainer');

const button2 = document.getElementById('button2');

const messageBox = document.getElementById('messageBox');

clickableLabel.addEventListener('click', () => {
    if (buttonContainer.classList.contains('hidden')) {
        buttonContainer.classList.remove('hidden');
    } 
    else {
        buttonContainer.classList.add('hidden');
    }

    messageBox.classList.add('hidden');
});

button2.addEventListener('click', () => {
    messageBox.classList.remove('hidden');
    messageBox.classList.add('visible');

    setTimeout(() => {
        messageBox.classList.remove('visible');
        messageBox.classList.add('hidden');
        buttonContainer.classList.add('hidden');
    }, 2500);
});

