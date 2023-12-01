import { createGrid } from "./grid";

const createGameSetupContainer = function() {
        const gameSetupContainer = document.createElement('div');
        gameSetupContainer.className = 'game-setup-container';

        const createWelcomeContainer = function() {
            const welcomeContainer = document.createElement('div');
            welcomeContainer.className = 'game-setup__welcome-container';

            const heading = welcomeContainer.appendChild(document.createElement('h2'));
            heading.className = 'game-setup__heading';
            heading.textContent = 'Welcome, player!';
    
            const placeShipsText = welcomeContainer.appendChild(document.createElement('p'));
            placeShipsText.className = 'game-setup__place-ships-text';
            placeShipsText.textContent = 'Place your destroyer on the board:';

            const btnContainer = welcomeContainer.appendChild(document.createElement('div'));
            btnContainer.className = 'game-setup__btn-container';
            
                const rotateBtn = btnContainer.appendChild(document.createElement('button'));
                rotateBtn.className = 'game-setup__rotate-btn';
                rotateBtn.id = 'rotate-btn';
                rotateBtn.textContent = 'Rotate';
                
                const randomizeBtn = btnContainer.appendChild(document.createElement('button'));
                randomizeBtn.className = 'game-setup__randomize-btn';
                randomizeBtn.id = 'randomize-btn';
                randomizeBtn.textContent = 'Randomize';

            return welcomeContainer;
        };

        gameSetupContainer.appendChild(createWelcomeContainer());

        const shipContainer = gameSetupContainer.appendChild(document.createElement('div'));
        shipContainer.className = 'game-setup__ship-container';

        const grid = gameSetupContainer.appendChild(createGrid());
        grid.classList.add('game-setup__grid');
        
        return gameSetupContainer;
    };

export { createGameSetupContainer };