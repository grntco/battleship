const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';

const createGridContainer = function() {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
        
    const createXAxisContainer = function() {
        const xAxisContainer = document.createElement('div');
        xAxisContainer.className = 'grid-container__x-axis-container';

        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        letters.forEach(letterItem => {
            const xAxisLetter = xAxisContainer.appendChild(document.createElement('div'));
            xAxisLetter.className = 'grid-container__x-axis__letter';
            xAxisLetter.textContent = letterItem;
        });

        return xAxisContainer;
    };

    const createYAxisContainer = function() {
        const yAxisContainer = document.createElement('div');
        yAxisContainer.className = 'grid-container__y-axis-container';

        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        numbers.forEach(numberItem => {
            const yAxisNumber = yAxisContainer.appendChild(document.createElement('div'));
            yAxisNumber.className = 'grid-container__y-axis__letter';
            yAxisNumber.textContent = numberItem;
        });

        return yAxisContainer;
    };
    
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.classList.add('player-grid');

    gridContainer.appendChild(createXAxisContainer());
    gridContainer.appendChild(createYAxisContainer());
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

