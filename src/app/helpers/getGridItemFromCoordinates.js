export function getGridItemFromCoordinates([x, y], gridContainer) {
    const allGridItems = [...gridContainer.querySelectorAll('.grid-item')];
    const numberOfSquaresBefore = x + ((9 - y) * 10);
    
    const targetGridItem = allGridItems.find(gridItem => allGridItems.indexOf(gridItem) === numberOfSquaresBefore);

    return targetGridItem;
}