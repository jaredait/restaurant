import './style.css';

const _CAFETERIA = {
    cafeName: 'CAFETERIA',
    address: 'San Luis Shopping, local n-123',
    phoneNumber: '123-1234',
    celNumber: '0991231234',
    email: 'cafeteria@cafeteria.com',
};

const getMapLocation = () => {
    const divLocation = document.createElement('div');
    const ifrMap = document.createElement('iframe');
    ifrMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.042741816615!2d-78.4500827!3d-0.3079671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31e1db3d128622a3!2sSan%20Luis%20Shopping%20Center!5e0!3m2!1sen!2sec!4v1630348226557!5m2!1sen!2sec";
    ifrMap.width = 600;
    ifrMap.height = 450;
    ifrMap.setAttribute('allowFullscreen', '');
    ifrMap.setAttribute('loading', 'lazy');

    divLocation.appendChild(ifrMap);
    divLocation.classList.add('map-container');

    return divLocation;
    //<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
};

const getCafeteriaInfo = () => {
    const divContainer = document.createElement('div');
    const pName = document.createElement('p');
    const pAddress = document.createElement('p');
    const pPhone = document.createElement('p');
    const pCel = document.createElement('p');
    const pEmail = document.createElement('p');

    pName.textContent = _CAFETERIA.cafeName;
    pAddress.textContent = _CAFETERIA.address;
    pPhone.textContent = _CAFETERIA.phoneNumber;
    pCel.textContent = _CAFETERIA.celNumber;
    pEmail.textContent = _CAFETERIA.email;

    divContainer.append(pName, pAddress, pPhone, pCel, pEmail);
    divContainer.classList.add('text-info');
    return divContainer;
};

const loadContactPage = () => {
    const mainContainer = document.createElement('div');
    const divLocation = getMapLocation();
    const divCafeInfo = getCafeteriaInfo();

    mainContainer.append(divLocation, divCafeInfo);
    mainContainer.classList.add('displayed');
    mainContainer.classList.add('main-container');

    return mainContainer;
}

export {
    loadContactPage,
};