class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
    }

    // maybe...
    attack(enemyGameboard, coordinates) {
        enemyGameboard.receiveAttack(coordinates);
    }

    getRandomCoordinates(enemyGameboard) {

    }
}

export { Player };