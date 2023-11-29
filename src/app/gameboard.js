import { Ship } from "./ship";

class Gameboard {
    constructor() {
        this.graph = this._createGraph();
        this.missedShots = [];
        this.hitShots = [];
        this.ships = []; // maybe...
    }

    placeShip(...coordinates) {
        if (coordinates.some(pair => !this._isInBounds(pair))) {
            throw new Error('Please provide accurate coordinates.');
        }

        const shipLength = coordinates.length;
        const newShip = new Ship(shipLength);

        coordinates.forEach(pair => {
            const [x, y] = pair;
            const node = this.graph[x][y];

            if (!node.hasShip) {
                node.hasShip = true;
                newShip.coordinates.push([x, y]);
            }
        });
        
        this.ships.push(newShip);
    }

    receiveAttack(coordinates) {
        const [x, y] = coordinates;
        const node = this.graph[x][y];
        node.isShot = true;
        if (!node.hasShip) {
            this.missedShots.push(coordinates);
        } else {
            const targetShip = this._getShipFromCoordinates(coordinates);
            targetShip.hit();
            this.hitShots.push(coordinates);
        }
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());       
    }

    getRandomCoordinates() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (this._areCoordinatesInArray([x, y], this.missedShots)
        || this._areCoordinatesInArray([x, y], this.hitShots)) {
            return this.getRandomCoordinates();
        }
        return [x, y];
    }

    getRandomShipCoordinates(length) {
        const directions = [[0, 1], [1, 0]];
        let directionIndex = 0;

        while (directionIndex === 0) {
            let start = this.getRandomCoordinates();
            while (directionIndex < directions.length) {
                let allCoordinates = this.getRestOfCoordinates(start, length, directions[directionIndex]);
                if (allCoordinates.every(pair => this._isInBounds(pair))) {
                    if (allCoordinates.every(pair => !this._hasShip(pair))) {
                        if (this.getAdjacentCoordinates(allCoordinates).every(pair => !this._hasShip(pair))) {
                            return allCoordinates;
                        }
                    }
                }
                directionIndex++;
            }
            directionIndex = 0;
        }
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

        if (start[1] === end[1]) { // if coordinates are horizontal
            const before = [start[0] - 1, start[1]];
            const after = [end[0] + 1, end[1]];

            adjacentCoordinates.push(before, after);

            coordinates.forEach(pair => {
                const adjacentTop = [pair[0], pair[1] + 1];
                const adjacentBottom = [pair[0], pair[1] - 1];

                adjacentCoordinates.push(adjacentTop, adjacentBottom);
            });
        } else if (start[0] === end[0]) { // if coordinates are vertical
            const before = [start[0], start[1] - 1];
            const after = [end[0], end[1] + 1];

            adjacentCoordinates.push(before, after);

            coordinates.forEach(pair => {
                const adjacentLeft = [pair[0] - 1, pair[1]];
                const adjacentRight = [pair[0] + 1, pair[1]];

                adjacentCoordinates.push(adjacentLeft, adjacentRight);
            });
        }
        adjacentCoordinates = adjacentCoordinates.filter(pair => this._isInBounds(pair));
        return adjacentCoordinates;
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

    _hasShip(coordinates) {
        const [x, y] = coordinates;
        const node = this.graph[x][y];
        return node.hasShip;
    }

    _isInBounds(coordinates) {
        const [x, y] = coordinates;
        return (x >= 0 && x < 10) && (y >= 0 && y < 10); 
    }

    _getShipFromCoordinates(coordinates) {
        return this.ships.find(ship => 
            this._areCoordinatesInArray(coordinates, ship.coordinates)
        );
    }

    _areCoordinatesInArray(coordinates, array) {
        return array.some(pair => pair.every((value, index) => 
            value === coordinates[index]
        ));
    }
}

export { Gameboard };