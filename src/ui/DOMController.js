import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
import { getGridItemFromCoordinates } from "../app/helpers/getGridItemFromCoordinates";
import { createGrid } from "./components/grid";


const DOMController = {
    // gameController?

    loadNewGame: function() {
        this.game = new Game();
        this.game.start();
        this.refreshGrids();
    },
    
    _clearContent: function() {
        const contentSection = document.querySelector('.content-section');
        contentSection.innerHTML = '';
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

    updateHitsAndMisses() {
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

    handleGridItemClick: function(gridItem) {
        const coordinates = getCoordinatesOfGridItem(gridItem);
        this.game.playRound(coordinates);
        this.updateHitsAndMisses();
        // this.refreshGrids();
        // console.log(getGridItemFromCoordinates(coordinates, ...document.querySelectorAll('.grid-container')[1]));
    },

    // playRound: function(gridItem) {
    //     const coordinates = getCoordinatesOfGridItem(gridItem);

    //     if (this.game.player.turn) {
    //         if (!this.game.hasEnded()) {
    //             this.game.playerMove(coordinates);
    //             this.game.switchTurns();
    //             this.addHitOrMissClassToGridItem(coordinates, this.game.computer.gameboard, gridItem);
    //         } else {
    //             this.game.gameOver();
    //         }
    //     }
    //     if (!this.game.hasEnded()) {
    //         setTimeout(() => {
    //             this.game.computerMove();
    //             this.game.switchTurns();
    //             // this.addHitOrMissClassToGridItem();
    //         }, 1000);
    //     } else {
    //         this.game.gameOver();
    //     }
    // },


    
    addHitOrMissClassToGridItem(coordinates, gameboard, gridItem) {
        if (this.game.isAHit(coordinates, gameboard)) {
            gridItem.classList.add('grid-item__hit');
        } else {
            gridItem.classList.add('grid-item__miss');
        }
    }
};

export { DOMController };
