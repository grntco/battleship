export function getCoordinatesOfGridItem(gridItem) {
    const allGridItems = [...gridItem.parentElement.children]; 
    const gridItemIndex = allGridItems.indexOf(gridItem);

    let numberOfSquaresBefore = allGridItems.slice(0, gridItemIndex).length;
    let timesLooped = 0;

    while (numberOfSquaresBefore >= 10) {
        numberOfSquaresBefore -= 10;
        timesLooped++;
    }

    const x = numberOfSquaresBefore;
    const y = 9 - timesLooped;

    return [x, y];
}