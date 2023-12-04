import { DOMController } from "./DOMController";

export const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;

        // if (target.classList.contains('grid-item') 
        // && [...[...document.querySelectorAll('.grid')][1].children].includes(target)) {
        //     DOMController.handleGridItemClick(target);
        // }

        if (target.classList.contains('grid-item')) {
            DOMController.renderPlacedShipOnBoard(target);
        }

        if (target.id.match('play-again-btn')) {
            DOMController.restartGame();
        }

    });

    // this needs to be just on the game-setup__grid
    // const gameSetupGrid = document.querySelector('.game-setup__grid');
    document.addEventListener('mousemove', handleShipFollowCursor);
})();

function handleShipFollowCursor(e) {
    const ship = document.querySelector('.game-setup__ship-container');
    ship.style.left = e.pageX - 16 + 'px';
    ship.style.top = e.pageY - 16 + 'px';
}

