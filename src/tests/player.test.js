import { Player } from "../app/player";

describe('Player', () => {
    it('Player class has property of name', () => {
        const playerOne = new Player('Grant');
        expect(playerOne.name).toBe('Grant');
    });
});