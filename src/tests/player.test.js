import { Player } from "../app/player";
import { Gameboard } from "../app/gameboard";

describe('Player', () => {
    const playerOne = new Player('Grant');

    it('Player class has property of name', () => {
        expect(playerOne.name).toBe('Grant');
    });

    it('Player class has a property of turn, default to false', () => {
        expect(playerOne.turn).toBeFalsy();
    });

    it('attack() attacks an enemy gameboard', () => {
        const enemyGameboard = new Gameboard();
        playerOne.attack(enemyGameboard, [0, 0]);
        expect(enemyGameboard.missedShots).toContainEqual([0, 0]);
    });
});