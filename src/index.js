import "./styles.css";
import { createMainContainer } from "./ui/components/mainContainer";
import { DOMController } from "./ui/DOMController";
import { events } from "./ui/events";

document.body.appendChild(createMainContainer());

DOMController.initGameSetup();
DOMController.initGamePlay();
DOMController.initGameOver();
