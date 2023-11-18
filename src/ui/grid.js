function createGrid(player, gameboard) {
    // const ships = playerGameboard.ships;
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.innerHTML = '';

    
    if (player && gameboard) {
        grid.classList.add(`${player.name === 'Computer' ? 'computer' : 'player'}-grid`);
        const board = gameboard.graph;
        for (let i = board.length - 1; i >= 0; i--) { // reverse to get ships in right order
            for (let j = 0; j < board[i].length; j++) {
                const node = board[i][j];
                const gridItem = grid.appendChild(document.createElement('div'));
                gridItem.className = 'grid-item';
                if (!node.isEmpty) {
                    gridItem.classList.add('grid-ship');
                }
            }
        }
    } else {
        for (let i = 0; i < 10; i ++) {
            for (let j = 0; j < 10; j++) {
                const gridItem = grid.appendChild(document.createElement('div'));
                gridItem.className = 'grid-item';
            }
        }
    }

    return grid;
}

function _removeGridItems(player) {
    const grid = document.querySelector(`.${player.name === 'Computer' ? 'computer' : 'player'}-grid`); // but the specific gameboard
    grid.innerHTML = '';
}

function refreshGrid(player, gameboard) {
    _removeGridItems(player);
    createGrid(player, gameboard);
    console.log('getting called?');
}

export { createGrid, refreshGrid };