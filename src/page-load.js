import './style.css';

// main image
const loadLandingImg = () => {
    document.body.classList.add('main-image');
}

// menu bar (nav bar)
const loadMenuBar = () => {
    const divMenuBar = document.createElement('div');
    const listMenu = document.createElement('ul');
    const items = ['Home', 'Menu', 'Contact'];

    // Individual list items
    for (let i = 0; i < items.length; i++) {
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

// title div
const loadTitle = () => {
    const divTitleContainer = document.createElement('div');
    const pTitle = document.createElement('p');

    pTitle.textContent = 'CAFETERIA';
    pTitle.classList.add('main-title');

    divTitleContainer.classList.add('title-container');
    divTitleContainer.appendChild(pTitle);
    document.body.appendChild(divTitleContainer);
}

// loader
const driverCode = () => {
    loadLandingImg();
    document.body.appendChild(loadMenuBar());
    loadTitle();
}

export {
    loadLandingImg,
    loadMenuBar,
    loadTitle,
    driverCode,
};