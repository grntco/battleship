import { nav } from "./nav";
import { contentSection } from "./contentSection";
import { footer } from "./footer";

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';

mainContainer.appendChild(nav);
mainContainer.appendChild(contentSection);
mainContainer.appendChild(footer);

export { mainContainer };