import { gameContainer } from "./game";
import { nav } from "./nav";
import { footer } from "./footer";

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.appendChild(nav);
mainContainer.appendChild(gameContainer);
mainContainer.appendChild(footer);

export { mainContainer };