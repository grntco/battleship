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
            rotateBtn.className = 'ship-setup__rotate-btn';
            rotateBtn.id = 'rotate-btn';
            rotateBtn.textContent = 'Rotate';

            return shipSetupContainer;
        };

        gameSetupContainer.appendChild(createShipSetupContainer());
        gameSetupContainer.appendChild(createGrid());

        return gameSetupContainer;
    };

export { createGameSetupContainer };