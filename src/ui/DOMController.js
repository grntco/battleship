import { Game } from "../app/game";
import { refreshGrid } from "./grid";

const DOMController = function() {

    const newGame = new Game();
    newGame.createAllShips();
    refreshGrid(newGame.humanPlayer, newGame.humanGameboard);
};

export { DOMController };
