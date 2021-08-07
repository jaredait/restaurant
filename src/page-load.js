import landingImg from './img/restaurant-picture.jpg';
import './style.css';

// main image
const loadLandingImg = () => {
    const cafeImg = new Image();
    cafeImg.src = landingImg;
    cafeImg.classList.add('main-image');
    
    const divLandingImg = document.createElement('div');
    divLandingImg.appendChild(cafeImg);

    return divLandingImg;
}

// menu bar (nav bar)
const loadMenuBar = () => {
    const divMenuBar = document.createElement('div');
    const listMenu = document.createElement('ul');
    const items = ['Home', 'Menu', 'Contact'];

    // Individual list items
    for(let i = 0; i < items.length; i++){
        let liValue = document.createElement('li');
        liValue.textContent = items[i];
        liValue.classList.add('list-items');
        listMenu.appendChild(liValue);
    }

    listMenu.classList.add('nav-bar-list');
    divMenuBar.appendChild(listMenu);
    divMenuBar.classList.add('navbar');
    return divMenuBar;
}

export {
    loadLandingImg,
    loadMenuBar,
};