import { loadLandingImg, loadMenuBar } from "./page-load";
import './style.css';

// global scope
document.body.appendChild(loadLandingImg());
document.body.appendChild(loadMenuBar());