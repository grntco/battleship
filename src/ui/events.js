// this will only be grid items of the computer gameboard, though, I think
import { getCoordinatesOfGridItem } from "../app/helpers/getCoordiantesFromGridItem";


export const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('grid-item')) {
            getCoordinatesOfGridItem(target);
        }
    });
})();

