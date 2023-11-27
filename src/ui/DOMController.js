import { Game } from "../app/game";
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordinatesOfGridItem";
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

    handleGridItemClick: function(gridItem) {
        const coordinates = getCoordinatesOfGridItem(gridItem);
        this.game.playRound(coordinates);

        

    },    
};

export { DOMController };
