import { Gameboard } from "../app/gameboard";
import { Ship }  from "../app/ship";

jest.mock("../app/ship", () => ({
    Ship: jest.fn().mockImplementation((length) => ({
        length,
        hitCount: 0,
        coordinates: [],
        hit: jest.fn(function() {
            this.hitCount++;
        }),
        isSunk: jest.fn(function() {
            return this.hitCount >= this.length;
        }),
    })),
}));

describe.skip('Gameboard', () => {
    const testGameboard = new Gameboard();

    beforeEach(() => {
        testGameboard.graph.forEach(row => {
            row.forEach(node => {
                node.isEmpty = true;
            });
        });

        testGameboard.ships = [];
    });

    it('Creates a graph', () => {
        expect(testGameboard.graph[0][0]).toEqual({ isEmpty: true });
        expect(testGameboard.graph[9][9]).toEqual({ isEmpty: true });
    });

    it('placeShip calls Ship class', () => {        
        testGameboard.placeShip([0, 0]);
        expect(Ship).toHaveBeenCalled();
    });

    it('placeShip fills empty graph coordinates with a "ship"', () => {
        testGameboard.placeShip([0, 0]);
        expect(testGameboard.graph[0][0]).toEqual({ isEmpty: false });
    });

    it('placeShip creates a ship of length of its coordinates passed in', () => {
        testGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        expect(testGameboard.graph[0][0]).toEqual({ isEmpty: false });
        expect(testGameboard.graph[0][1]).toEqual({ isEmpty: false });
        expect(testGameboard.graph[0][2]).toEqual({ isEmpty: false });
    });

    it('placeShip with invalid coordinates throws an error', () => {
        expect(() => testGameboard.placeShip([-1, 10])).toThrowError('Please provide accurate coordinates.');
    });

    // maybe...
    it('placeShip creates a new ship in the gameboard.ships property', () => {
        testGameboard.placeShip([0, 0], [1, 0]);
        expect(testGameboard.ships.length).toBe(1);
    });


    // receiveAttack()

    it('receiveAttack increments the hitCount of a specific ship', () => {
        testGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        testGameboard.receiveAttack([0, 0]);
        expect(testGameboard.ships[0].hitCount).toBe(1);
        testGameboard.receiveAttack([0, 1]);
        expect(testGameboard.ships[0].hitCount).toBe(2);
    });

    it('receiveAttack pushes the coordinates of a hit shot into main list of hit shots', () => {
        testGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        testGameboard.receiveAttack([0, 0]);
        expect(testGameboard.hitShots).toContainEqual([0, 0]);
    });

    it('receiveAttack pushes the coordinates a missed shot if no ship present', () => {
        testGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        testGameboard.receiveAttack([0, 3]);
        expect(testGameboard.missedShots).toContainEqual([0, 3]);
    });


    // allShipsSunk()

    it('allShipsSunk returns true when all ships on the gameboard are sunk', () => {
        testGameboard.placeShip([0, 0], [0, 1]);
        testGameboard.receiveAttack([0, 0]);
        testGameboard.receiveAttack([0, 1]);
        expect(testGameboard.allShipsSunk()).toBeTruthy();
    });

    it('allShipsSunk returns false if a ship is not yet sunk', () => {
        testGameboard.placeShip([0, 0], [0, 1]); // first ship of length 2
        testGameboard.placeShip([9, 9]); // second ship of length 1
        testGameboard.receiveAttack([0, 0]);
        testGameboard.receiveAttack([0, 1]); // sinks the first ship
        expect(testGameboard.ships[0].isSunk()).toBeTruthy(); // true; first ship is sunk
        expect(testGameboard.allShipsSunk()).toBeFalsy(); // false; not all ships are sunk
    });


    it('getRandomCoordinates returns a random coordinate not in missedShots or hitShots', () => {
        testGameboard.receiveAttack([0, 0]);
        testGameboard.receiveAttack([0, 1]);

        expect(testGameboard.getRandomCoordinates()).not.toEqual([0, 0]);
        expect(testGameboard.getRandomCoordinates()).not.toEqual([0, 1]);
    });


    // createRandomShips

    it('getRestOfCoordinates returns array of coordinates in given direction', () => {
        expect(testGameboard.getRestOfCoordinates([0, 0], 3, [0, 1])).toEqual([[0, 0], [0, 1], [0, 2]]);
    });

    it('getRandomShipCoordinates returns an array of random coordinates in one direction', () => {
        expect(testGameboard.getRandomShipCoordinates(4)).toHaveLength(4);
    });


    // adjacentNodesEmpty

    it('getAdjacentCoordinates reduces to only those coordinates in the board', () => {
        expect(testGameboard.getAdjacentCoordinates([[0, 0], [1, 0]])).not.toContainEqual([-1, 0]);
        expect(testGameboard.getAdjacentCoordinates([[9, 7], [9, 8], [9, 9]])).not.toContainEqual([9, 10]);
    });
    
    // it('adjacentNodesEmpty returns true/false if adjacent nodes are empty/not empty', () => {
    //     expect(testGameboard.adjacentNodesEmpty([[0, 0], [1, 0]])).toBeTruthy();
    //     testGameboard.placeShip([8, 9], [9, 9]);
    //     expect(testGameboard.adjacentNodesEmpty([[6, 9], [7, 9]])).toBeFalsy();
    //     expect(testGameboard.adjacentNodesEmpty([[9, 7], [9, 8]])).toBeFalsy();
    // });
});