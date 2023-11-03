import { Ship } from "../app/ship";


describe('happy path', () => {
    const testShip = new Ship(4);

    it('New ship has length of given parameter', () => {
        expect(testShip.length).toBe(4);
    });
});