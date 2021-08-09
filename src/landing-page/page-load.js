import './style.css';
/*
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
*/
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

const loadDescription = () => {
    const divContainer = document.createElement('div');
    const pDesc = document.createElement('p');
    const pTitle = document.createElement('p');

    pTitle.textContent = 'About us';
    pTitle.classList.add('info-style-title');

    pDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim dolor, sagittis nec fringilla eu, imperdiet non ipsum. Phasellus id laoreet tortor. Donec vel metus tincidunt, malesuada erat et, mollis dui. Etiam sit amet diam sollicitudin, bibendum ante sit amet, mattis urna.';
    pDesc.classList.add('info-style-desc');

    divContainer.appendChild(pTitle);
    divContainer.appendChild(pDesc);
    divContainer.classList.add('info-style');

    return divContainer;
}

const loadSchedule = () => {
    const divContainer = document.createElement('div');
    const pDesc1 = document.createElement('p');
    const pDesc2 = document.createElement('p');
    const pDesc3 = document.createElement('p');
    const pTitle = document.createElement('p');

    pTitle.textContent = 'Hours';
    pTitle.classList.add('info-style-title');

    pDesc1.textContent = 'Monday - Friday: 07h00 - 22h00';
    pDesc2.textContent = 'Saturday: 11h00 - 22h00';
    pDesc3.textContent = 'Sunday: 11h00 - 23h00';

    pDesc1.classList.add('info-style-desc');
    pDesc2.classList.add('info-style-desc');
    pDesc3.classList.add('info-style-desc');

    divContainer.appendChild(pTitle);
    divContainer.appendChild(pDesc1);
    divContainer.appendChild(pDesc2);
    divContainer.appendChild(pDesc3);
    divContainer.classList.add('info-style');

    return divContainer;
}

const loadLocation = () => {
    const divContainer = document.createElement('div');
    const pDesc = document.createElement('p');
    const pTitle = document.createElement('p');

    pTitle.textContent = 'Location';
    pTitle.classList.add('info-style-title');

    pDesc.textContent = '123 Forest Drive, Forestville, Maine';
    pDesc.classList.add('info-style-desc');

    divContainer.appendChild(pTitle);
    divContainer.appendChild(pDesc);
    divContainer.classList.add('info-style');

    return divContainer;
}

const loadInfo = () => {
    // create main div that'll contain all of the information
    const divContainer = document.createElement('div');

    divContainer.classList.add('info-container');

    // load information
    divContainer.appendChild(loadDescription());
    divContainer.appendChild(loadSchedule());
    divContainer.appendChild(loadLocation());

    document.body.appendChild(divContainer);
}

const loadFooter = () => {
    const footer = document.createElement('footer');
    const author = 'jaredait';
    const email = 'jaredampudia@gmail.com';
    const phone = '0991231231';

    /*
    const pAuthor = document.createElement('p');
    pAuthor.textContent = author;

    const aEmail = document.createElement('a');
    aEmail.textContent = email;
    aEmail.setAttribute('href', `mailto:${email}`);
    aEmail.classList.add('a-links');

    const pPhone = document.createElement('p');
    pPhone.textContent = phone;

    footer.append(pAuthor, aEmail, pPhone);
    */
    footer.textContent = `${author} | ${email} | ${phone}`;
    footer.classList.add('footer-container');

    document.body.appendChild(footer);
}

// loader
const driverCode = () => {
    loadTitle();
    loadInfo();
    loadFooter();
}

export {
    loadTitle,
    driverCode,
};