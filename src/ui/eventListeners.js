import { eventHandlers } from "./eventHandlers";
// document.addEventListener('mousemove', handleShipFollowCursor);

// rename to just eventListeners
export const eventListeners = {

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


    // rename to inits
    initGamePlayEvents: function() {
        const enemyGridItems = [...document.querySelectorAll('.grid')[1].children];
        enemyGridItems.forEach(gridItem => {
            gridItem.addEventListener('click', eventHandlers.enemyGridClick);
        });
    },

    initGameOverEvents: function() {
        const playAgainBtn = document.getElementById('play-again-btn');
        playAgainBtn.addEventListener('click', eventHandlers.playAgainBtnClick);
    },
};

