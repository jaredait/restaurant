import { loadLandingPage } from "./landing-page/page-load";
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
    // add here an event listener and display the home page
    liHome.addEventListener('click', loadLandingPage);
    
    // menu
    const liMenu = document.createElement('li');
    liMenu.textContent = 'Menu';
    liMenu.classList.add('list-items');

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


// load the landing image and navbar
loadLandingImg();
document.body.appendChild(loadMenuBar());

// global scope
loadLandingPage();

