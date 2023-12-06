export function createGrid() {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const gridItem = grid.appendChild(document.createElement('div'));
            gridItem.className = 'grid-item';
        }
    }

    return grid;
}