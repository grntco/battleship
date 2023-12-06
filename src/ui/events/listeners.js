import { eventHandlers } from "./handlers";

export const eventListeners = {
    initGameSetupEvents: function() {
        const gameSetupContainer = document.querySelector('.game-setup-container');
        gameSetupContainer.addEventListener('mousemove', eventHandlers.moveMouseToDragShip);

        const rotateBtn = document.getElementById('rotate-btn');
        rotateBtn.addEventListener('click', eventHandlers.clickToRotateShip);

        const randomBtn = document.getElementById('random-btn');
        randomBtn.addEventListener('click', eventHandlers.clickToPlaceRandomShip);

        const playerGridItems = [...document.querySelectorAll('.grid-item')];
        playerGridItems.forEach(gridItem => {
            gridItem.addEventListener('click', eventHandlers.clickToPlaceShip);
        });
    },

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

