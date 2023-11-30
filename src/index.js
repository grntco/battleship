import "./styles.css";
import { createMainContainer } from "./ui/components/mainContainer";
import { DOMController } from "./ui/DOMController";
import { createGameContainer } from "./ui/components/gameContainer";
// import { createGameOverContainer } from "./ui/components/gameOverContainer";
import { events } from "./ui/events";

document.body.appendChild(createMainContainer());
// DOMController.updateContent(createGameOverContainer());
DOMController.updateContent(createGameContainer());
DOMController.loadNewGame();
