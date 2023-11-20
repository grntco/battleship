import { createGameContainer } from "./game";
import {  } from "./startGame";

const createContentSection = function() {
    const contentSection = document.createElement('section');
    contentSection.className = 'content-section';
    contentSection.appendChild(createGameContainer()); // this will happen on a button click, just doing this for now.
    return contentSection;
};

export { createContentSection };