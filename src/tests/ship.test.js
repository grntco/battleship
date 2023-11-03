import { Ship } from "../app/ship";

describe('Ship properties and methods', () => {
    const testShip = new Ship(4);

    it('New ship has length of given parameter', () => {
        expect(testShip.length).toBe(4);
    });

    it('New ship has hitCount of 0', () => {
        expect(testShip.hitCount).toBe(0);
    });


    it('Ship.hit() increments Ship.hitCount by 1', () => {
        testShip.hit();
        expect(testShip.hitCount).toBe(1);
    });

    it('Ship is not yet sunk', () => {
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);

    });

    it('Ship is sunk', () => {
        testShip.hit();
        expect(testShip.isSunk()).toBe(true);
    });
});