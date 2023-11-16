const nav = document.createElement('nav');
nav.className = 'nav';

const gameTitle = nav.appendChild(document.createElement('h1'));
gameTitle.className = 'nav__game-title';
gameTitle.textContent = 'Battleship';

export { nav };