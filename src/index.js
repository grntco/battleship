import "./styles.css";
import { createMainContainer } from "./ui/components/mainContainer";
import { DOMController } from "./ui/DOMController";
import { createGameContainer } from "./ui/components/gameContainer";
import { events } from "./ui/events";

document.body.appendChild(createMainContainer());
DOMController.updateContent(createGameContainer());
DOMController.newGame.start();
DOMController.refreshGrids();
