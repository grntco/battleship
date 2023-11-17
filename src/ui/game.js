const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';

const createGridContainer = function() {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.classList.add('player-grid');

    // const createGrid = function() {
    //     const grid = document.createElement('div');
    //     grid.className = 'grid';

    //     for (let i = 0; i < 10; i++) {
    //         for (let j = 0; j < 10; j++) {
    //             const gridItem = grid.appendChild(document.createElement('div'));
    //             gridItem.className = 'grid-item';
    //         }
    //     }

    //     return grid;
    // };

    gridContainer.appendChild(grid);
    return gridContainer;
};

gameContainer.appendChild(createGridContainer());
// gameContainer.appendChild(createGridContainer());

function refreshGrid(gameboard) {
    // const ships = playerGameboard.ships;
    const grid = document.querySelector('.player-grid');
    grid.innerHTML = '';

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


    // board.forEach(row => {
    //     row.forEach(node => {
    //         const gridItem = grid.appendChild(document.createElement('div'));
    //         gridItem.className = 'grid-item';
    //         if (!node.isEmpty) {
    //             gridItem.classList.add('grid-ship');
    //         }
    //     });
    // });


    return grid;
}

export { gameContainer, refreshGrid };

