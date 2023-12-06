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

        if (node.hasShip) {
            const targetShip = this._getShipFromCoordinates([x, y]);
            targetShip.hit();
            this.hitShots.push([x, y]);
        } else {
            this.missedShots.push([x, y]);
        }
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());       
    }

    alreadyPlayed([x, y]) {
        return this._areCoordinatesInArray([x, y], this.missedShots) || this._areCoordinatesInArray([x, y], this.hitShots);
    }

    getRandomCoordinates() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (this.alreadyPlayed([x, y])) {
            return this.getRandomCoordinates();
        } else {
            return [x, y];
        }
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

    getAdjacentCoordinates(coordinates) {
        const start = coordinates[0];
        const end = coordinates[coordinates.length - 1];
        
        let adjacentCoordinates = [];
        let offsets = [[[-1, 0], [1, 0]], [[0, 1], [0, -1]]];
        let offsetEnds = [];
        let offsetSides = [];

        if (start[1] === end[1]) {
            offsetEnds = offsets[0];
            offsetSides = offsets[1];
        } else {
            offsetEnds = offsets[1];
            offsetSides = offsets[0];
        }

        const before = [start[0] + offsetEnds[0][0], start[1] + offsetEnds[0][1]];
        const after = [end[0] + offsetEnds[1][0], end[1] + offsetEnds[1][1]];
        adjacentCoordinates.push(before, after);

        coordinates.forEach(([x, y]) => {
            const sides = [[x + offsetSides[0][0], y + offsetSides[0][1]], [x + offsetSides[1][0], y + offsetSides[1][1]]];
            adjacentCoordinates.push(...sides);
        });  
        
        adjacentCoordinates = adjacentCoordinates.filter(([x, y]) => this._isInBounds([x, y]));
        return adjacentCoordinates;
    }

    _areCoordinatesInArray([x, y], array) {
        return array.some(([a, b]) => [a, b].every((value, index) => 
            value === [x, y][index]
        ));
    }

    _createGraph() {
        const graph = [];

        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const node = { hasShip: false };
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
            this._areCoordinatesInArray([x, y], ship.coordinates)
        );
    }
}