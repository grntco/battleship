function createGrid(gameboard) { // createGridItems?
    const grid = document.createElement('div');
    grid.className = 'grid';

    if (gameboard) {
        const board = gameboard.graph;
        for (let i = board.length - 1; i >= 0; i--) { // reverse to get ships in right order
            for (let j = 0; j < board[i].length; j++) {
                const node = board[j][i];
                const gridItem = grid.appendChild(document.createElement('div'));
                gridItem.className = 'grid-item';
                if (node.hasShip) {
                    gridItem.classList.add('grid-item__ship');
                }
            }
        }
    } else {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridItem = grid.appendChild(document.createElement('div'));
                gridItem.className = 'grid-item';
            }
        }
    }

    return grid;
}

export { createGrid };