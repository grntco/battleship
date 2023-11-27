export function getCoordinatesOfGridItem(gridItem) {
    const allGridItems = [...gridItem.parentElement.children]; 
    const gridItemIndex = allGridItems.indexOf(gridItem);

    let numberOfSquaresBefore = allGridItems.slice(0, gridItemIndex).length;
    let iterations = 0;

    while (numberOfSquaresBefore >= 10) {
        numberOfSquaresBefore -= 10;
        iterations++;
    }

    const x = numberOfSquaresBefore;
    const y = 9 - iterations;

    return [x, y];
}