import { createGameSetupContainer } from "./gameSetupContainer";

const createWelcomeContainer = function() {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome-container';

    const welcomeHeading = welcomeContainer.appendChild(document.createElement('h2'));
    welcomeHeading.className = 'welcome__heading';
    welcomeHeading.textContent = 'Welcome, player!';

    // append all the things from setup
    welcomeContainer.appendChild(createGameSetupContainer());

    const startGameBtn = welcomeContainer.appendChild(document.createElement('button'));
    startGameBtn.textContent = 'Start Game';
    startGameBtn.className = 'start-game-btn';
    startGameBtn.id = 'start-game-btn';

    return welcomeContainer;
};

export { createWelcomeContainer };