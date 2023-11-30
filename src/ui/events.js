import { DOMController } from "./DOMController";

export const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('grid-item') 
        && [...[...document.querySelectorAll('.grid')][1].children].includes(target)) {
            DOMController.handleGridItemClick(target);
        }

        if (target.id.match('play-again-btn')) {
            DOMController.restartGame();
        }

    });

    document.addEventListener('mousemove', handleShipFollowCursor);
})();

function handleShipFollowCursor(e) {
    const ship = document.querySelector('.ship-setup__ship-container');
    ship.style.left = e.pageX + 'px';
    ship.style.top = e.pageY + 'px';
}

