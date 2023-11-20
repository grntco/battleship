// import { createGameContainer } from "./game";
import { createWelcomeContainer } from "./welcome";

const createContentSection = function() {
    const contentSection = document.createElement('section');
    contentSection.className = 'content-section';
    contentSection.appendChild(createWelcomeContainer()); // this will happen on a button click, just doing this for now.
    return contentSection;
};

export { createContentSection };