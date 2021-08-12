import { loadLandingPage } from "./landing-page/page-load";
import { loadMenuPage } from './menu-page/menu-page.js';
import './style.css';

// main image
const loadLandingImg = () => {
    document.body.classList.add('main-image');
}

// menu bar (nav bar)
const loadMenuBar = () => {
    const divMenuBar = document.createElement('div');
    const listMenu = document.createElement('ul');

    // home
    const liHome = document.createElement('li');
    liHome.textContent = 'Home';
    liHome.classList.add('list-items');
    // event listener to "reloads" the home page
    liHome.addEventListener('click', displayHome);

    // menu
    const liMenu = document.createElement('li');
    liMenu.textContent = 'Menu';
    liMenu.classList.add('list-items');
    // event listener
    liMenu.addEventListener('click', displayMenu);


    //contact
    const liContact = document.createElement('li');
    liContact.textContent = 'Contact';
    liContact.classList.add('list-items');

    listMenu.append(liHome, liMenu, liContact);
    listMenu.classList.add('nav-bar-list');
    divMenuBar.appendChild(listMenu);
    divMenuBar.classList.add('navbar');
    return divMenuBar;
}

const displayHome = () => {
    document.body.removeChild(document.body.querySelector('.displayed'));
    document.body.appendChild(divLanding);
}

const displayMenu = () => {
    document.body.removeChild(document.body.querySelector('.displayed'));
    document.body.appendChild(divMenu);
}

// **************** GLOBAL SCOPE *******************

// load the landing image and navbar
loadLandingImg();
document.body.appendChild(loadMenuBar());

// divs that have their corresponding module
const divLanding = loadLandingPage();
const divMenu = loadMenuPage();

document.body.appendChild(divMenu);