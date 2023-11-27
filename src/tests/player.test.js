import { Player } from "../app/player";
import { Gameboard } from "../app/gameboard";

describe.skip('Player', () => {
    const playerOne = new Player();

    it('Player class has a property of turn, default to false', () => {
        expect(playerOne.turn).toBeFalsy();
    });

    // maybe...
    it('attack() attacks an enemy gameboard', () => {
        const enemyGameboard = new Gameboard();
        playerOne.attack([0, 0], enemyGameboard);
        expect(enemyGameboard.missedShots).toContainEqual([0, 0]);
    });
});