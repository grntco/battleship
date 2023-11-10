import { Gameboard } from "../app/gameboard";
import { Ship } from "../app/ship";



jest.mock("../app/ship");


describe('Gameboard', () => {
    const testGameboard = new Gameboard();

    beforeEach(() => {
        testGameboard.graph.forEach(row => {
            row.forEach(node => {
                node.isEmpty = true;
            });
        });
      });

    it('Creates a graph', () => {
        expect(testGameboard.graph[0][0]).toEqual({ isEmpty: true });
        expect(testGameboard.graph[9][9]).toEqual({ isEmpty: true });
    });

    it('placeShip calls Ship class', () => {
        Ship.mockImplementation(() => ({
          placeShip: jest.fn(() => {
            return { length: 1, hitCount: 0 };
          })
        }));
        
        testGameboard.placeShip([0, 0]);
        expect(Ship).toHaveBeenCalled();
    });

    it('placeShip returns a graph node', () => {
        expect(testGameboard.placeShip([0, 0])).toBe(testGameboard.graph[0][0]);
    });

    it('placeShip fills empty graph coordinates with a "ship"', () => {
        testGameboard.placeShip([0, 0]);
        expect(testGameboard.graph[0][0]).toEqual({ isEmpty: false });
    });


});