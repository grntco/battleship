import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGameOverContainer } from "./components/gameOverContainer";
import { createGameSetupContainer } from "./components/gameSetupContainer";
import { createGrid } from "./components/grid";

const DOMController = {
    initSetupPage: function() {
        this.game = new Game();
        this.updateContent(createGameSetupContainer());
        this.displayShipSetupContainer();
    },

    loadNewGame: function() {
        this.game.start();
        this.refreshGrids();
        // this._displayShipsOnPlayerGrid();
        this.updateBoards();
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
        // was updateHitsAndMisses below
        this.updateBoards();
        if (this.game.hasEnded()) {
            this.updateContent(createGameOverContainer());
            this._displayGameResult();
        };
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
        console.log(allCoordinates);

        this.game.player.gameboard.placeShip(...allCoordinates);
        this.updateBoards();
        this.displayShipSetupContainer();
    },

    restartGame: function() {
        this.updateContent(createGameSetupContainer());
    },

    displayShipSetupContainer: function() {
        const alreadyPlacedShips = this.game.player.gameboard.ships;
        const shipLengths = [5, 4, 3, 3, 2, 2];
        const shipContainer = document.querySelector('.game-setup__ship-container');

        for (let i = 0; i < shipLengths.length; i++) {
            if (i === alreadyPlacedShips.length) {
                shipContainer.style.width = shipLengths[i] * 32 + 'px';
                shipContainer.style.height = '32px';
            }
        }
    },

    updateBoards: function() {
        const grids = document.querySelectorAll('.grid');
        const gameboards = grids.length > 1 ? [this.game.player.gameboard, this.game.computer.gameboard] : [this.game.player.gameboard];

        for (let i = 0; i < grids.length; i++) {
            gameboards[i].ships.forEach(ship => {

                ship.coordinates.forEach(([x, y]) => {
                    const gridItem = getGridItemFromCoordinates([x, y], grids[i]);
                    gridItem.classList.add('grid-item__ship');
                });
            });

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

    rotateShipContainer: function() {
        const shipContainer = document.querySelector('.game-setup__ship-container');
        if (shipContainer.offsetWidth > 32) {
            shipContainer.style.height = shipContainer.offsetWidth + 'px';
            shipContainer.style.width = '32px';
        } else {
            shipContainer.style.width = shipContainer.offsetHeight + 'px';
            shipContainer.style.height = '32px';
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

    // don't need, use updateBoards
    // _displayShipsOnPlayerGrid: function() {
    //     const playerAllGridItems = [...document.querySelectorAll('.grid')][0].children;
    //     const playerGameboard = this.game.player.gameboard;

    //     for (let i = 0; i < playerAllGridItems.length; i++) {
    //         const [x, y] = getCoordinatesOfGridItem(playerAllGridItems[i]);
    //         for (let j = 0; j < playerGameboard.ships.length; j++) {
    //             if (playerGameboard.areCoordinatesInArray([x, y], playerGameboard.ships[j].coordinates)) {
    //                 playerAllGridItems[i].classList.add('grid-item__ship');
    //             }
    //         }
    //     }
    // },

    // don't need, use updateBoards
    // _updateHitsAndMisses: function() {
    //     const grids = document.querySelectorAll('.grid');
    //     const gameboards = [this.game.player.gameboard, this.game.computer.gameboard];

    //     for (let i = 0; i < 2; i++) {
    //         gameboards[i].hitShots.forEach(([x, y]) => {
    //             const gridItem = getGridItemFromCoordinates([x, y], grids[i]);
    //             if (!gridItem.classList.contains('grid-item__hit')) {
    //                 gridItem.classList.add('grid-item__hit');
    //             }
    //         });

    //         gameboards[i].missedShots.forEach(([x, y]) => {
    //             const gridItem = getGridItemFromCoordinates([x, y], grids[i]);
    //             if (!gridItem.classList.contains('grid-item__miss')) {
    //                 gridItem.classList.add('grid-item__miss');
    //             }
    //         });
    //     } 
    // },
};

export { DOMController };
