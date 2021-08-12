import './style.css';

const loadTitle = () => {
    const h1Menu = document.createElement('h1');
    const separator = document.createElement('hr');
    const divHeading = document.createElement('div');

    h1Menu.textContent = 'MENU';
    h1Menu.classList.add('menu-title');

    separator.classList.add('separator');

    divHeading.append(h1Menu, separator);

    return divHeading;
}

const loadMenuPage = () => {
    const divContainer = document.createElement('div');

    divContainer.appendChild(loadTitle());
    divContainer.classList.add('displayed');
    divContainer.classList.add('main-container');

    return divContainer;
}

// create a div that will load the menu items. this div will have the class that
// displays the grid

export {
    loadMenuPage,
};