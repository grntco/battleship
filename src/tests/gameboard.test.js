import { Gameboard } from "../app/gameboard";
import { Ship } from "../app/ship";



jest.mock("../app/ship");


describe('Gameboard', () => {
    const testGameboard = new Gameboard();

    it('Creates a graph', () => {
        expect(testGameboard.graph[0][0]).toEqual({ });
        expect(testGameboard.graph[9][9]).toEqual({ });
    });

    it('placeShip calls Ship class', () => {
        Ship.mockImplementation(() => ({
          placeShip: jest.fn(() => {
            return { length: 2, hitCount: 0 };
          })
        }));
        
        testGameboard.placeShip();
        expect(Ship).toHaveBeenCalled();
    });


});