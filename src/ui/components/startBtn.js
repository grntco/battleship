export const createWelcomeContainer = function() {
    const startGameBtn = document.createElement('button');
    startGameBtn.textContent = 'Start Game';
    startGameBtn.className = 'start-game-btn';
    startGameBtn.id = 'start-game-btn';

    return startGameBtn;
};