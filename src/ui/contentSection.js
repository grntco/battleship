// import { gameContainer } from "./game";
import { startGameContainer } from "./startGame";

const contentSection = document.createElement('section');
contentSection.className = 'content-section';
contentSection.appendChild(startGameContainer); // this will happen on a button click, just doing this for now.

export { contentSection };