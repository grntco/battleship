import { createGrid } from "./grid";

const createGamePlayContainer = function() {
    const gamePlayContainer = document.createElement('div');
    gamePlayContainer.className = 'game-play-container';

    const createGridContainer = function() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        const gridTitle = document.createElement('h3');
        gridTitle.className = 'grid-container__title';
            
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
        gridContainer.appendChild(createGrid());
        gridContainer.appendChild(gridTitle);

        return gridContainer;
    };

    gamePlayContainer.appendChild(createGridContainer());
    gamePlayContainer.appendChild(createGridContainer());

    return gamePlayContainer;
};

export { createGamePlayContainer };

