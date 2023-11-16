const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';

const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
gameContainer.appendChild(gridContainer);



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

gameContainer.appendChild(createGridContainer());
gameContainer.appendChild(createGridContainer());






export { gameContainer };