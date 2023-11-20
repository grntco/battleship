import { createNav } from "./nav";
import { createContentSection } from "./contentSection";
import { createFooter } from "./footer";

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';

mainContainer.appendChild(createNav());
mainContainer.appendChild(createContentSection());
mainContainer.appendChild(createFooter());

export { mainContainer };