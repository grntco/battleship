import "./styles.css";
import { createMainContainer } from "./ui/mainContainer";
import { DOMController } from "./ui/DOMcontroller";
import { createGameContainer } from "./ui/game";
import { events } from "./ui/events";

document.body.appendChild(createMainContainer());
DOMController.updateContent(createGameContainer());
DOMController.newGame.createAllShips();
DOMController.refreshGrids();
