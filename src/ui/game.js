const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';

const createGridContainer = function() {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    const createGrid = function() {
        const grid = document.createElement('div');
        grid.className = 'grid';

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridItem = grid.appendChild(document.createElement('div'));
                gridItem.className = 'grid-item';
            }
        }

        return grid;
    };

    gridContainer.appendChild(createGrid());
    return gridContainer;
};

gameContainer.appendChild(createGridContainer());
gameContainer.appendChild(createGridContainer());

export { gameContainer };



// const createGrid = function(gameboardObj) {
//     const grid = document.createElement('div');
//     grid.className = 'grid';
//     // grid.classList.add(`grid-${gameboardObj.player?}`)

//     gameboardObj.graph.forEach(row => {
//         row.forEach(node => {
//             const gridItem = document.createElement('div');
//             gridItem.className = 'grid-item';
//             grid.appendChild(gridItem);

//             // if (!node.isEmpty) {

//             // }
//         });
//     });
// };

// const removeGrid = function(gameboardObj) {

// }

// const refreshGrid = function(gameboardObj) {
//     const grid = document.querySelector('.grid');

//     // removeGrid()
//     // createGrid()
// }

