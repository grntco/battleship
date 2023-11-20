import { createGameSetupContainer } from "./setup";

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
    startGameBtn.className = 'start-game__btn';
    startGameBtn.id = 'start-game__btn';

    return welcomeContainer;
};

export { createWelcomeContainer };