import "./styles.css";
import { createMainContainer } from "./ui/components/mainContainer";
import { DOMController } from "./ui/DOMController";

document.body.appendChild(createMainContainer());

DOMController.initGameSetup();
DOMController.initGamePlay();
// DOMController.initGameOver();
