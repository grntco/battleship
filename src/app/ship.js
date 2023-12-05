export class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.coordinates = [];
    }

    hit() {
        this.hitCount++;
    }

    isSunk() {
        return this.hitCount >= this.length;
    }
}