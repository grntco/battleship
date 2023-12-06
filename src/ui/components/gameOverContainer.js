export const createGameOverContainer = function(gameResult) {
    const gameOverContainer = document.createElement('div');
    gameOverContainer.className = 'game-over-container';

    const gameResultText = gameOverContainer.appendChild(document.createElement('h2'));
    gameResultText.className = 'game-over__game-result-text';
    gameResultText.textContent = gameResult;

    const playAgainBtn = gameOverContainer.appendChild(document.createElement('button'));
    playAgainBtn.id = 'play-again-btn';
    playAgainBtn.textContent = 'Play Again';

    return gameOverContainer;
};