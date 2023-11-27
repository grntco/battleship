// this will only be grid items of the computer gameboard, though, I think
import { DOMController } from "./DOMController";

export const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('grid-item')) {
            DOMController.handleGridItemClick(target);
        }
    });
})();

