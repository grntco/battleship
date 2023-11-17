import { Game } from "../app/game";
import { refreshGrid } from "./game";

const DOMController = function() {

    const newGame = new Game();
    newGame.createAllShips();
    refreshGrid(newGame.humanGameboard);
    // refreshGrid(newGame.computerGameboard);
};

export { DOMController };
