import { createGrid } from "./grid";

const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';

const createGridContainer = function(player, gameboard) {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
        
    const createAxis = function(type) {
        const axis = document.createElement('div');
        axis.className = `grid-container__${type}-axis-container`;

        let array = [];
        if (type === 'x') {
            array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        } else {
            array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        }

        array.forEach(item => {
            const axisItem = axis.appendChild(document.createElement('div'));
            axisItem.className = 'grid-container__axis-item';
            axisItem.textContent = item;
        });
        
        return axis;
    };

    gridContainer.appendChild(createAxis('x'));
    gridContainer.appendChild(createAxis('y'));
    gridContainer.appendChild(createGrid(player));

    return gridContainer;
};

gameContainer.appendChild(createGridContainer({ name: 'Human' }));
gameContainer.appendChild(createGridContainer({ name: 'Computer' }));
// gameContainer.appendChild(createGridContainer());

export { gameContainer };

