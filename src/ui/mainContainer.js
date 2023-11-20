import { createNav } from "./nav";
import { contentSection } from "./contentSection";
import { createFooter } from "./footer";

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';

mainContainer.appendChild(createNav());
mainContainer.appendChild(contentSection);
mainContainer.appendChild(createFooter());

export { mainContainer };