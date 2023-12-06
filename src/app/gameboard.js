import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.graph = this._createGraph();
        this.ships = [];
        this.shipLengths = [5, 4, 3, 3, 2, 2];
        this.missedShots = [];
        this.hitShots = [];
    }

    placeShip(coordinates) {
        if (this._arePlaceable(coordinates)) {
            const newShip = new Ship(coordinates.length);

            coordinates.forEach(([x, y]) => {
                const node = this.graph[x][y];
                node.hasShip = true;
                newShip.coordinates.push([x, y]);
            });

            this.ships.push(newShip);
        }  
    }

    receiveAttack([x, y]) {
        const node = this.graph[x][y];
        node.isShot = true;
        if (!node.hasShip) {
            this.missedShots.push([x, y]);
        } else {
            const targetShip = this._getShipFromCoordinates([x, y]);
            targetShip.hit();
            this.hitShots.push([x, y]);
        }
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());       
    }

    getRandomCoordinates() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (this.alreadyPlayed([x, y])) {
            return this.getRandomCoordinates();
        }
        return [x, y];
    }

    alreadyPlayed([x, y]) {
        return this.areCoordinatesInArray([x, y], this.missedShots) || this.areCoordinatesInArray([x, y], this.hitShots);
    }

    getRandomShipCoordinates(length) {
        const directions = [[1, 0], [0, -1]];
        const allCoordinates = this.getRestOfCoordinates(this.getRandomCoordinates(), length, directions[Math.floor(Math.random() * 2)]);

        if (!this._arePlaceable(allCoordinates)) {
            return this.getRandomShipCoordinates(length);
        } else {
            return allCoordinates;
        };
    }

    getRestOfCoordinates(start, shipLength, direction) {
        let allCoordinates = [start];

        while (allCoordinates.length < shipLength) {
            const temp = allCoordinates[allCoordinates.length - 1];
            const newItem = [temp[0] + direction[0], temp[1] + direction[1]];
            allCoordinates.push(newItem);
        }

        return allCoordinates;
    }

    getAdjacentCoordinates(shipCoordinates) {
        const start = shipCoordinates[0];
        const end = shipCoordinates[shipCoordinates.length - 1];
        
        let adjacentCoordinates = [];

        if (start[1] === end[1]) { // if coordinates are horizontal
            const before = [start[0] - 1, start[1]];
            const after = [end[0] + 1, end[1]];

            adjacentCoordinates.push(before, after);

            shipCoordinates.forEach(([x, y]) => {
                const adjacentTop = [x, y + 1];
                const adjacentBottom = [x, y - 1];

                adjacentCoordinates.push(adjacentTop, adjacentBottom);
            });
        } else if (start[0] === end[0]) { // if coordinates are vertical
            // may need to switch back, and just reverse the allcoordinates on the shipplacement
            const before = [end[0], end[1] - 1];
            const after = [start[0], start[1] + 1];

            adjacentCoordinates.push(before, after);

            shipCoordinates.forEach(([x, y]) => {
                const adjacentLeft = [x - 1, y];
                const adjacentRight = [x + 1, y];

                adjacentCoordinates.push(adjacentLeft, adjacentRight);
            });
        }
        adjacentCoordinates = adjacentCoordinates.filter(([x, y]) => this._isInBounds([x, y]));
        return adjacentCoordinates;
    }

    areCoordinatesInArray([x, y], array) {
        return array.some(([a, b]) => [a, b].every((value, index) => 
            value === [x, y][index]
        ));
    }

    _createGraph() {
        const graph = [];

        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const node = { hasShip: false, isShot: false };
                row.push(node);
            }
            graph.push(row);
        }

        return graph;
    }

    _arePlaceable(coordinates) {
        if (coordinates.length === 0) return false;

        return coordinates.every(([x, y]) => {
            return this._isInBounds([x, y]) && !this._hasShip([x, y]);
        }) && this.getAdjacentCoordinates(coordinates).every(([x, y]) => !this._hasShip([x, y]));
    }

    _hasShip([x, y]) {
        const node = this.graph[x][y];
        return node.hasShip;
    }

    _isInBounds([x, y]) {
        return (x >= 0 && x < 10) && (y >= 0 && y < 10); 
    }

    _getShipFromCoordinates([x, y]) {
        return this.ships.find(ship => 
            this.areCoordinatesInArray([x, y], ship.coordinates)
        );
    }
}