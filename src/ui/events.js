import { DOMController } from "./DOMController";

export const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('grid-item') 
        && [...[...document.querySelectorAll('.grid')][1].children].includes(target)) {
            handleGridItemClick(target);
        }

        // if (target.classList.contains('grid-item')) {
        //     DOMController.renderPlacedShipOnBoard(target);
        // }

        if (target.id.match('play-again-btn')) {
            DOMController.initGameSetup();
        }

        if (target.id.match('rotate-btn')) {
            DOMController.handleShipRotation();
        }

    });

//     // this needs to be just on the game-setup__grid
//     // const gameSetupGrid = document.querySelector('.game-setup__grid');
    // document.addEventListener('mousemove', handleShipFollowCursor);
})();

// export const events = {

//     handleShipFollowCursor: function(e) {
//         const ship = document.querySelector('.game-setup__ship-container');
//         ship.style.left = e.pageX - 16 + 'px';
//         ship.style.top = e.pageY - 16 + 'px';
//     },

//     handleShipRotation: function() {
//         const shipContainer = document.querySelector('.game-setup__ship-container');
//         if (shipContainer.offsetWidth > 32) {
//             shipContainer.style.height = shipContainer.offsetWidth + 'px';
//             shipContainer.style.width = '32px';
//         } else {
//             shipContainer.style.width = shipContainer.offsetHeight + 'px';
//             shipContainer.style.height = '32px';
//         }
//     },
    
// };

function handleShipFollowCursor(e) {
    const ship = document.querySelector('.game-setup__ship-container');
    ship.style.left = e.pageX - 16 + 'px';
    ship.style.top = e.pageY - 16 + 'px';
};

function handleGridItemClick(e) {
    DOMController.displayGamePlayRound(e);
}



// function rotateShipContainer function() {
//     const shipContainer = document.querySelector('.game-setup__ship-container');
//     if (shipContainer.offsetWidth > 32) {
//         shipContainer.style.height = shipContainer.offsetWidth + 'px';
//         shipContainer.style.width = '32px';
//     } else {
//         shipContainer.style.width = shipContainer.offsetHeight + 'px';
//         shipContainer.style.height = '32px';
//     }
// },







// initGameSetupEvents
// function initGameSetupEvents() {
//     const rotateBtn = document.getElementById('rotate-btn');
//     // const randomizeBtn = document.getElementById('randomize-btn');
//     const allGridItems = document.querySelectorAll('.grid-item');

//     // document.addEventListener('mousemove', handleShipFollowCursor);
//     document.addEventListener('mousemove', handleShipFollowCursor);
//     rotateBtn.addEventListener('click', DOMController.handleShipRotation);
//     allGridItems.forEach(gridItem => {
//         gridItem.addEventListener('click', handle the placement of the ship);
//     });
// }


// initGamePlayEvents

// initGameOverEvents

