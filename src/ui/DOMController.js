import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGamePlayContainer } from "./components/gamePlayContainer";
import { createGameOverContainer } from "./components/gameOverContainer";
import { createGameSetupContainer } from "./components/gameSetupContainer";
import { eventListeners } from "./events/listeners";

const DOMController = {
    initGameSetup: function() {
        this.game = new Game();
        this._updatePageContent(createGameSetupContainer());
        this.displayNextShipContainerOrInitGamePlay();
        eventListeners.initGameSetupEvents();
    },

    initGamePlay: function() {
        this.game.start();
        this._updatePageContent(createGamePlayContainer());
        this._updateBoards();
        this._displayGridTitles();
        eventListeners.initGamePlayEvents();
    },

    initGameOver: function() {
        this._updatePageContent(createGameOverContainer(this.game.getGameResult()));
        eventListeners.initGameOverEvents();
    },

    displayGamePlayRound: function(gridItem) {
        const [x, y] = getCoordinatesOfGridItem(gridItem);
        this.game.playRound([x, y]);
        this._updateBoards();
        if (this.game.hasEnded()) this.initGameOver();
    },

    displayManualPlacedShipOnBoard: function(gridItem) {
        const [x, y] = getCoordinatesOfGridItem(gridItem);
        const shipContainer = document.querySelector('.game-setup__ship-container');
        const playerGameboard = this.game.player.gameboard;

        let shipLength = 0;
        let allCoordinates = [];
        let direction = [];

        if (shipContainer.offsetWidth !== 32) { // horizontal placement
            shipLength = shipContainer.offsetWidth / 32;
            direction = [1, 0];    
        } else { // vertical placement    
            shipLength = shipContainer.offsetHeight / 32;
            direction = [0, -1];
        }

        allCoordinates = playerGameboard.getRestOfCoordinates([x, y], shipLength, direction);
        playerGameboard.placeShip(...allCoordinates);
        this._updateBoards();
    },

    displayRandomPlacedShipOnBoard: function() {
        const playerGameboard = this.game.player.gameboard;
        playerGameboard.placeShip(...playerGameboard.getRandomShipCoordinates(this._moveToNextShipLength()));
        this._updateBoards();
    },

    displayNextShipContainerOrInitGamePlay: function() {
        const shipLength = this._moveToNextShipLength();
        if (shipLength === 0) {
            this.initGamePlay();
        } else {
            this._displayShipSetupContainer(shipLength);
        }
    },

    _displayShipSetupContainer: function(shipLength) {   
        const shipContainer = document.querySelector('.game-setup__ship-container');
        shipContainer.style.width = shipLength * 32 + 'px';
        shipContainer.style.height = '32px';
    },
    
    _moveToNextShipLength: function() {
        const shipLengths = [5, 4, 3, 3, 2, 2];
        const alreadyPlacedShips = this.game.player.gameboard.ships;
        if (alreadyPlacedShips.length < shipLengths.length) {
            return shipLengths[alreadyPlacedShips.length];
        } else {
            return 0;
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

    _displayGridTitles: function() {
        const titles = document.querySelectorAll('.grid-container__title');
        titles[0].textContent = 'You';
        titles[1].textContent = 'Enemy';
    },
};

export { DOMController };
