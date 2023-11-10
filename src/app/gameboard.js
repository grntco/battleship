import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.graph = this._createGraph();
        this.missedShots = [];
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

    placeShip(coordinates) {
        // get the number of the coordinates passed in, assign to length variable
        // create a new ship on the board with length from above

        const x = coordinates[0];
        const y = coordinates[1];

        const node = this.graph[x][y];
        console.log(node);

        if (node.isEmpty) {
            const newShip = new Ship(1);
            newShip.coordinates = [x, y];
            node.isEmpty = false;
        }

        return node;
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