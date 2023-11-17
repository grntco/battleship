import { gameContainer } from "./game";

const contentSection = document.createElement('section');
contentSection.className = 'content-section';
contentSection.appendChild(gameContainer); // this will happen on a button click, just doing this for now.

export { contentSection };