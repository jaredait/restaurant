import './style.css';
import cafeImg from './../img/cafe.jpg';
import restaurantPic from './../img/restaurant-picture.jpg';
import cafePic from './../img/cafe-picture.jpg';

// object that contains the fields that'll be displayed on the menu page
let menuItem = (name, description, imgUrl, price) => {
    const setName = (newName) => { name = newName };
    const setDesc = (newDesc) => { desc = newDesc };
    const setImgUrl = (newImgUrl) => { imgUrl = newImgUrl };
    const setPrice = (newPrice) => { price = newPrice };

    const getName = () => name;
    const getDesc = () => description;
    const getImgUrl = () => imgUrl;
    const getPrice = () => price;

    return {
        // getters and setters
        setName,    getName,
        setDesc,    getDesc,
        setImgUrl,  getImgUrl,
        setPrice,   getPrice,
    }
};

const getMenuItems = () => {
    return [
        menuItem('First item', 'This is the first description', cafeImg, '12.50'),
        menuItem('Second item', 'This is the second description', restaurantPic, '22.50'),
        menuItem('Third item', 'This is the third description', cafePic, '32.50'),
    ];
};

const getItemCard = (item) => {
    const cardContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const cardImg = new Image();
    const hName = document.createElement('h2');
    const pDesc = document.createElement('p');
    const pPrice = document.createElement('p');
    
    cardImg.src = item.getImgUrl();
    cardImg.classList.add('med-img');
    cardImg.classList.add('card-img');

    hName.textContent = item.getName();
    hName.classList.add('card-name');

    pDesc.textContent = item.getDesc();
    pDesc.classList.add('card-desc');

    pPrice.textContent = "$ " + item.getPrice();
    pPrice.classList.add('card-price');

    cardContainer.classList.add('item-card');
    infoContainer.classList.add('card-info');

    infoContainer.append(hName, pDesc, pPrice);
    cardContainer.append(cardImg, infoContainer);

    return cardContainer;
}

const loadMenuList = () => {
    const listContainer = document.createElement('div');
    const menuItems = getMenuItems();

    listContainer.classList.add('menu-list');

    menuItems.forEach(item => {
        let tempCard = getItemCard(item);
        listContainer.appendChild(tempCard);
    });
    
    return listContainer;
}

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
    divContainer.appendChild(loadMenuList());

    divContainer.classList.add('displayed');
    divContainer.classList.add('main-container');

    return divContainer;
}



// create a div that will load the menu items. this div will have the class that
// displays the grid

export {
    loadMenuPage,
};