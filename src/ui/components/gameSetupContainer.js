import { createGrid } from "./grid";

export const createGameSetupContainer = function() {
    const gameSetupContainer = document.createElement('div');
    gameSetupContainer.className = 'game-setup-container';

    const createWelcomeContainer = function() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.className = 'game-setup__welcome-container';

        const heading = welcomeContainer.appendChild(document.createElement('h2'));
        heading.textContent = 'Welcome, player!';

        const placeShipsText = welcomeContainer.appendChild(document.createElement('p'));
        placeShipsText.className = 'game-setup__place-ships-text';
        placeShipsText.textContent = 'Place your ships on the board';

        const btnContainer = welcomeContainer.appendChild(document.createElement('div'));
        btnContainer.className = 'game-setup__btn-container';
        
            const rotateBtn = btnContainer.appendChild(document.createElement('button'));
            rotateBtn.id = 'rotate-btn';
            rotateBtn.textContent = 'Rotate';
            
            const randomBtn = btnContainer.appendChild(document.createElement('button'));
            randomBtn.id = 'random-btn';
            randomBtn.textContent = 'Random';

        return welcomeContainer;
    };

    gameSetupContainer.appendChild(createWelcomeContainer());

    const shipContainer = gameSetupContainer.appendChild(document.createElement('div'));
    shipContainer.className = 'game-setup__ship-container';

    gameSetupContainer.appendChild(createGrid());
    
    return gameSetupContainer;
};