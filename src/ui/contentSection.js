// import { gameContainer } from "./game";
import { createStartGameContainer } from "./startGame";

const createContentSection() {
    const contentSection = document.createElement('section');
    contentSection.className = 'content-section';
    contentSection.appendChild(createStartGameContainer()); // this will happen on a button click, just doing this for now.
    return contentSection;
}

export { contentSection };