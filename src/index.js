import "./styles.css";
import { createMainContainer } from "./ui/mainContainer";
import { DOMController } from "./ui/DOMcontroller";

document.body.appendChild(createMainContainer());
DOMController.newGame.createAllShips();
DOMController.refreshGrids();
