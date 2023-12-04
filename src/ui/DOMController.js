import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGamePlayContainer } from "./components/gameContainer";
import { createGameOverContainer } from "./components/gameOverContainer";
import { createGameSetupContainer } from "./components/gameSetupContainer";

const DOMController = {
    initGameSetup: function() {
        this.game = new Game();
        this._updatePageContent(createGameSetupContainer());
        this.displayShipSetupContainer();
        // init setup events
    },

    initGamePlay: function() {
        this.game.start();
        this._updatePageContent(createGamePlayContainer());
        this._updateBoards();
        this._updateGridTitles();
        // init gameplay events
    },

    initGameOver: function() {
        this._updatePageContent(createGameOverContainer(this.game.getGameResult()));
        // init game over events
    },

    displayGamePlayRound: function(gridItem) {
        const [x, y] = getCoordinatesOfGridItem(gridItem);
        this.game.playRound([x, y]);
        this._updateBoards();
        if (this.game.hasEnded()) this.initGameOver();
    },

    handleShipRotation: function() {
        const shipContainer = document.querySelector('.game-setup__ship-container');
        if (shipContainer.offsetWidth > 32) {
            shipContainer.style.height = shipContainer.offsetWidth + 'px';
            shipContainer.style.width = '32px';
        } else {
            shipContainer.style.width = shipContainer.offsetHeight + 'px';
            shipContainer.style.height = '32px';
        }
    },

    renderPlacedShipOnBoard: function(gridItem) {
        const [x, y] = getCoordinatesOfGridItem(gridItem);
        const shipContainer = document.querySelector('.game-setup__ship-container');

        let shipLength = 0;
        let allCoordinates = [];

        if (shipContainer.offsetWidth === 32) { // vertical placement        
            shipLength = shipContainer.offsetHeight / 32;
            for (let i = 0; i < shipLength; i++) {
                allCoordinates.push([x, y - i]);
            }
        } else { // horizontal placement
            shipLength = shipContainer.offsetWidth / 32;
            for (let i = 0; i < shipLength; i++) {
                allCoordinates.push([x + i, y]); 
            }
        }

        this.game.player.gameboard.placeShip(...allCoordinates);
        this._updateBoards();
        this.displayShipSetupContainer();
    },

    displayShipSetupContainer: function() {
        const alreadyPlacedShips = this.game.player.gameboard.ships;
        const shipLengths = [5, 4, 3, 3, 2, 2];
        const shipContainer = document.querySelector('.game-setup__ship-container');

        for (let i = 0; i < shipLengths.length; i++) {
            if (i === 7) {
                // remove ship container and display start btn
            }

            if (i === alreadyPlacedShips.length) {
                shipContainer.style.width = shipLengths[i] * 32 + 'px';
                shipContainer.style.height = '32px';
            }
        }
    },

    _updatePageContent: function(newContentFunc) {
        const contentSection = document.querySelector('.content-section');
        contentSection.innerHTML = '';
        contentSection.appendChild(newContentFunc);  
    },

    _updateBoards: function() {
        const grids = document.querySelectorAll('.grid');
        const gameboards = grids.length > 1 ? [this.game.player.gameboard, this.game.computer.gameboard] : [this.game.player.gameboard];

        gameboards[0].ships.forEach(ship => {
            ship.coordinates.forEach(([x, y]) => {
                const gridItem = getGridItemFromCoordinates([x, y], grids[0]);
                gridItem.classList.add('grid-item__ship');
            });
        });

        for (let i = 0; i < grids.length; i++) {
            gameboards[i].hitShots.forEach(([x, y]) => {
                const gridItem = getGridItemFromCoordinates([x, y], grids[i]);
                if (!gridItem.classList.contains('grid-item__hit')) {
                    gridItem.classList.add('grid-item__hit');
                }
            });

            gameboards[i].missedShots.forEach(([x, y]) => {
                const gridItem = getGridItemFromCoordinates([x, y], grids[i]);
                if (!gridItem.classList.contains('grid-item__miss')) {
                    gridItem.classList.add('grid-item__miss');
                }
            });
        }
    },

    _updateGridTitles: function() {
        const gridContainers = document.querySelectorAll('.grid-container');
        const playerGridTitle = gridContainers[0].querySelector('.grid-container__title');
        const computerGridTitle = gridContainers[1].querySelector('.grid-container__title');

        playerGridTitle.textContent = 'Your Board';
        computerGridTitle.textContent = 'Enemy Board';
    },
};

export { DOMController };
