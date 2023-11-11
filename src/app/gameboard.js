import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.graph = this._createGraph();
        this.missedShots = [];
        this.ships = []; // maybe...
    }

    _createGraph() {
        const graph = [];

        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const node = { isEmpty: true };
                row.push(node);
            }
            graph.push(row);
        }

        return graph;
    }

    _isInBounds(coordinates) {
        const [x, y] = coordinates;
        return (x >= 0 || x < 10) || (y >= 0 || y < 10);
    }

    placeShip(...coordinates) {
        const shipLength = coordinates.length;
        const newShip = new Ship(shipLength);

        coordinates.forEach(pair => {
            const [x, y] = pair;
            const node = this.graph[x][y];

            if (node.isEmpty) {
                node.isEmpty = false;
                newShip.coordinates.push([x, y]);
            }
        });
        // might not need this below;
        // could each gameboard have a list of ships already not created on game start,
        // and then go through them? 
        // or would that be in the game?
        this.ships.push(newShip);
    }

    receiveAttack(coordinates) {
        // are those coordinates empty?
        // if yes, no ship is there
        // record coordinates of the missed shot in a list (above?)
        // if no, a ship is there
        // find that ship
        // hit that ship once
    }

    areAllShipsSunk() {
        // are all the nodes empty? 
    }


}

export { Gameboard };