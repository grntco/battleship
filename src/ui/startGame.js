const startGameContainer = document.createElement('div');
startGameContainer.className = 'start-game-container';

const createStartGameForm = function() {
    const form = document.createElement('form');
    form.className = 'start-game__form';

    const welcomeHeading = form.appendChild(document.createElement('h2'));
    welcomeHeading.className = 'start-game__welcome-heading';
    welcomeHeading.textContent = 'Welcome, player!';

    const nameInput = form.appendChild(document.createElement('input'));
    nameInput.className = 'start-game__name-input';
    nameInput.placeholder = 'Enter your name';

    const startGameBtn = form.appendChild(document.createElement('button'));
    startGameBtn.textContent = 'Start Game';
    startGameBtn.className = 'start-game__btn';
    startGameBtn.id = 'start-game__btn';
    startGameBtn.type = 'submit';

    return form; 
};

startGameContainer.appendChild(createStartGameForm());

export { startGameContainer };