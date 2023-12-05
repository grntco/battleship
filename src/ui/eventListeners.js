import { eventHandlers } from "./eventHandlers";

export const eventListeners = {

    initGameSetupEvents: function() {
        document.addEventListener('mousemove', eventHandlers.mouseMoveToDragShip);

        const rotateBtn = document.getElementById('rotate-btn');
        rotateBtn.addEventListener('click', eventHandlers.clickToRotateShip);


        // const randomizeBtn = document.getElementById('randomize-btn');

        const playerGridItems = [...document.querySelectorAll('.grid-item')];
        playerGridItems.forEach(gridItem => {
            gridItem.addEventListener('click', eventHandlers.clickToPlaceShip);
        });
    },

    // start btn?

    initGamePlayEvents: function() {
        const enemyGridItems = [...document.querySelectorAll('.grid')[1].children];
        enemyGridItems.forEach(gridItem => {
            gridItem.addEventListener('click', eventHandlers.clickToAttackEnemy);
        });
    },

    initGameOverEvents: function() {
        const playAgainBtn = document.getElementById('play-again-btn');
        playAgainBtn.addEventListener('click', eventHandlers.clickToPlayAgain);
    },
};

