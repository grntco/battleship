import { DOMController } from "./DOMController";

export const eventHandlers = {
    shipFollowCursor: function(e) {
        const ship = document.querySelector('.game-setup__ship-container');
        ship.style.left = e.pageX - 16 + 'px';
        ship.style.top = e.pageY - 16 + 'px';
    },
    
    rotateBtnClick: function() {
        const shipContainer = document.querySelector('.game-setup__ship-container');
        if (shipContainer.offsetWidth > 32) {
            shipContainer.style.height = shipContainer.offsetWidth + 'px';
            shipContainer.style.width = '32px';
        } else {
            shipContainer.style.width = shipContainer.offsetHeight + 'px';
            shipContainer.style.height = '32px';
        }
    },
    
    enemyGridClick: function(e) {
        DOMController.displayGamePlayRound(e.target);
    },
    
    playAgainBtnClick: function() {
        DOMController.initGameSetup();
    }
};

