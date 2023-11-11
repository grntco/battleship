import { Gameboard } from "../app/gameboard";
import { Ship }  from "../app/ship";

jest.mock("../app/ship", () => ({
    Ship: jest.fn().mockImplementation((length) => ({
        length,
        hitCount: 0,
        coordinates: [],
        hit: jest.fn(),
        isSunk: jest.fn(() => false),
    })),
}));

describe('Gameboard', () => {
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
    });

    it.only('receiveAttack pushes the coordinates a missed shot if no ship present', () => {
        testGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        testGameboard.receiveAttack([0, 3]);
        expect(testGameboard.missedShots).toContainEqual([0, 3]);
    });

});