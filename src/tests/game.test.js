import { Game } from "../app/game";

describe.only('Game', () => {

    it.skip('hasEnded returns false if both gameboards still have ships', () => {
        const testGame = new Game();
        testGame.start();
        testGame.computer.gameboard.placeShip([0, 0], [0, 1]);
        testGame.player.gameboard.placeShip([0, 0], [0, 1]);
        expect(testGame.hasEnded()).toBeFalsy();
    });

    it.skip('hasEnded returns true if one gameboard does not have ships', () => {
        const testGame = new Game();
        testGame.start();
        testGame.computer.gameboard.placeShip([0, 0], [0, 1]);
        testGame.player.gameboard.placeShip([0, 0], [0, 1]);
        testGame.computer.gameboard.receiveAttack([0, 0]);
        testGame.computer.gameboard.receiveAttack([0, 1]);
        expect(testGame.hasEnded()).toBeTruthy();
    });

    it('players take turns when game loop', () => {
        const testGame = new Game();
        testGame.start();
    });
});