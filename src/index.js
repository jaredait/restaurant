import { loadLandingPage } from "./landing-page/page-load";
import { loadMenuPage } from './menu-page/menu-page.js';
import { loadContactPage } from './contact-page/contact-page.js';
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
    liContact.addEventListener('click', displayContact);

    listMenu.append(liHome, liMenu, liContact);
    listMenu.classList.add('nav-bar-list');
    divMenuBar.appendChild(listMenu);
    divMenuBar.classList.add('navbar');
    return divMenuBar;
};

const displayHome = () => {
    document.body.removeChild(document.body.querySelector('.displayed'));
    document.body.insertBefore(divLanding, footer);
};

const displayMenu = () => {
    document.body.removeChild(document.body.querySelector('.displayed'));
    document.body.insertBefore(divMenu, footer);
};

const displayContact = () => {
    document.body.removeChild(document.body.querySelector('.displayed'));
    document.body.insertBefore(divContact, footer);
};

const loadFooter = () => {
    const footer = document.createElement('footer');
    const author = 'jaredait';
    const email = 'jaredampudia@gmail.com';
    const phone = '0991231231';

    footer.textContent = `${author} | ${email} | ${phone}`;
    footer.classList.add('footer-container');

    return footer;
};

// **************** GLOBAL SCOPE *******************

// load the landing image and navbar
loadLandingImg();
document.body.appendChild(loadMenuBar());

// divs that have their corresponding module
const divLanding = loadLandingPage();
const divMenu = loadMenuPage();
const divContact = loadContactPage();
const footer = loadFooter();

document.body.appendChild(divContact);
document.body.appendChild(footer);

// FIX THE FOOTER TAG DISPLAYING ON TOP OF THE SCREEN