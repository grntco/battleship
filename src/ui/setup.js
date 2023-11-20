// const createStartGameContainer = function() {
//     const startGameContainer = document.createElement('div');
//     startGameContainer.className = 'start-game-container';

//     const createStartGameForm = function() {
//         const form = document.createElement('form');
//         form.className = 'start-game__form';

//         const welcomeHeading = form.appendChild(document.createElement('h2'));
//         welcomeHeading.className = 'start-game__welcome-heading';
//         welcomeHeading.textContent = 'Welcome, player!';

//         const nameInput = form.appendChild(document.createElement('input'));
//         nameInput.className = 'start-game__name-input';
//         nameInput.placeholder = 'Enter your name';

//         const startGameBtn = form.appendChild(document.createElement('button'));
//         startGameBtn.textContent = 'Start Game';
//         startGameBtn.className = 'start-game__btn';
//         startGameBtn.id = 'start-game__btn';
//         startGameBtn.type = 'submit';

//         return form; 
//     };

//     startGameContainer.appendChild(createStartGameForm());
//     return startGameContainer;
// };

import { createGrid } from "./grid";

const createGameSetupContainer = function() {
        const gameSetupContainer = document.createElement('div');
        gameSetupContainer.className = 'game-setup-container';

        const createShipSetupContainer = function() {
            const shipSetupContainer = gameSetupContainer.appendChild(document.createElement('div'));
            shipSetupContainer.className = 'ship-setup-container';

            const placeShipsHeading = shipSetupContainer.appendChild(document.createElement('p'));
            placeShipsHeading.className = 'ship-setup__place-ships-heading';
            placeShipsHeading.textContent = 'Place your destroyer on the board:';

            const shipContainer = shipSetupContainer.appendChild(document.createElement('div'));
            shipContainer.className = 'ship-setup__ship-container';
            
            const rotateBtn = shipSetupContainer.appendChild(document.createElement('button'));
            rotateBtn.className = 'rotate-btn';
            rotateBtn.id = 'rotate-btn';
            rotateBtn.textContent = 'Rotate';

            return shipSetupContainer;
        };

        gameSetupContainer.appendChild(createShipSetupContainer());
        gameSetupContainer.appendChild(createGrid());

        return gameSetupContainer;
    };

export { createGameSetupContainer };