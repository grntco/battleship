export const createGameOverContainer = function() {
    const gameOverContainer = document.createElement('div');
    gameOverContainer.className = 'game-over-container';

    const gameResult = gameOverContainer.appendChild(document.createElement('h2'));
    gameResult.className = 'game-over__game-result';
    gameResult.textContent = 'Great job, captain! You won the game.';

    const playAgainBtn = gameOverContainer.appendChild(document.createElement('button'));
    playAgainBtn.className = 'game-over__play-again-btn';
    playAgainBtn.id = 'play-again-btn';
    playAgainBtn.textContent = 'Play Again?';

    return gameOverContainer;
};