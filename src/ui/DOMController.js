import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGameOverContainer } from "./components/gameOverContainer";
import { createGameSetupContainer } from "./components/gameSetupContainer";
import { createGrid } from "./components/grid";

const DOMController = {
    initSetupPage: function() {
        this.updateContent(createGameSetupContainer());
        this.displayShipSetupContainer(5);
        this.game = new Game();
    },

    loadNewGame: function() {
        this.game.start();
        this.refreshGrids();
        this._displayShipsOnPlayerGrid();
        this._updateGridTitles();
    },

    updateContent: function(newContentFunc) {
        const contentSection = document.querySelector('.content-section');
        this._clearContent();
        contentSection.appendChild(newContentFunc);  
    },

    refreshGrids: function() {
        const gridContainers = document.querySelectorAll('.grid-container');
        const gameboards = [this.game.player.gameboard, this.game.computer.gameboard];

        for (let i = 0; i < 2; i++) {
            const container = gridContainers[i];
            const gameboard = gameboards[i];
            const grid = container.querySelector('.grid');
            container.removeChild(grid);
            container.appendChild(createGrid(gameboard));
        }
    },

    // play the round
    // Call this something else, 
    // and then have a handle function in events that calls this for the click
    handleGridItemClick: function(gridItem) {
        const [x, y] = getCoordinatesOfGridItem(gridItem);
        this.game.playRound([x, y]);
        this._updateHitsAndMisses();
        if (this.game.hasEnded()) {
            this.updateContent(createGameOverContainer());
            this._displayGameResult();
        };
    },

    restartGame: function() {
        this.updateContent(createGameSetupContainer());
    },

    displayShipSetupContainer: function(shipLength) {
        // const shipLengths = [2, 2, 3, 3, 4, 5];
        // if (!this.player.ships.some(ship => ship.coordinates.length === currentLength))

        const shipContainer = document.querySelector('.game-setup__ship-container');
        shipContainer.style.width = shipLength * 32 + 'px';
    },

    rotateShipContainer: function(shipLength) {
        const shipContainer = document.querySelector('.game-setup__ship-container');
        if (shipContainer.style.width > 32) {
            shipContainer.style.width = '32px';
            shipContainer.style.length = shipLength * 32 + 'px';
        } else {
            shipContainer.style.length = '32px';
            shipContainer.style.width = shipLength * 32 + 'px';
        }
    },

    _clearContent: function() {
        const contentSection = document.querySelector('.content-section');
        contentSection.innerHTML = '';
    },

    _displayGameResult: function() {
        const gameResult = document.querySelector('.game-over__game-result');
        gameResult.textContent = this.game.getGameResult();
    },

    _updateGridTitles: function() {
        const gridContainers = document.querySelectorAll('.grid-container');
        const playerGridTitle = gridContainers[0].querySelector('.grid-container__title');
        const computerGridTitle = gridContainers[1].querySelector('.grid-container__title');

        playerGridTitle.textContent = 'Your Board';
        computerGridTitle.textContent = 'Enemy Board';
    }, 

    _displayShipsOnPlayerGrid: function() {
        const playerAllGridItems = [...document.querySelectorAll('.grid')][0].children;
        const playerGameboard = this.game.player.gameboard;

        for (let i = 0; i < playerAllGridItems.length; i++) {
            const [x, y] = getCoordinatesOfGridItem(playerAllGridItems[i]);
            for (let j = 0; j < playerGameboard.ships.length; j++) {
                if (playerGameboard.areCoordinatesInArray([x, y], playerGameboard.ships[j].coordinates)) {
                    playerAllGridItems[i].classList.add('grid-item__ship');
                }
            }
        }
    },

    _updateHitsAndMisses: function() {
        const gridContainers = document.querySelectorAll('.grid-container');
        const gameboards = [this.game.player.gameboard, this.game.computer.gameboard];

        for (let i = 0; i < 2; i++) {
            gameboards[i].hitShots.forEach(([x, y]) => {
                const gridItem = getGridItemFromCoordinates([x, y], gridContainers[i]);
                if (!gridItem.classList.contains('grid-item__hit')) {
                    gridItem.classList.add('grid-item__hit');
                }
            });

            gameboards[i].missedShots.forEach(([x, y]) => {
                const gridItem = getGridItemFromCoordinates([x, y], gridContainers[i]);
                if (!gridItem.classList.contains('grid-item__miss')) {
                    gridItem.classList.add('grid-item__miss');
                }
            });
        } 
    },
};

export { DOMController };
