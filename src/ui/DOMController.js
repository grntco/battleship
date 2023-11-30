import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGameOverContainer } from "./components/gameOverContainer";
import { createGrid } from "./components/grid";

const DOMController = {
    loadNewGame: function() {
        this.game = new Game();
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

    displayGameOver: function() {
        this._clearContent();
        this._getContentSection().appendChild(createGameOverContainer());
        this._displayGameResult();
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

    // play the round
    handleGridItemClick: function(gridItem) {
        const coordinates = getCoordinatesOfGridItem(gridItem);
        this.game.playRound(coordinates);
        this._updateHitsAndMisses();
        if (this.game.hasEnded()) this.displayGameOver();
    },

    _getContentSection: function() {
        return document.querySelector('.content-section');
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
            gameboards[i].hitShots.forEach(pair => {
                const gridItem = getGridItemFromCoordinates(pair, gridContainers[i]);
                if (!gridItem.classList.contains('grid-item__hit')) {
                    gridItem.classList.add('grid-item__hit');
                }
            });

            gameboards[i].missedShots.forEach(pair => {
                const gridItem = getGridItemFromCoordinates(pair, gridContainers[i]);
                if (!gridItem.classList.contains('grid-item__miss')) {
                    gridItem.classList.add('grid-item__miss');
                }
            });
        } 
    },

    _clearContent: function() {
        const contentSection = document.querySelector('.content-section');
        contentSection.innerHTML = '';
    },
};

export { DOMController };
