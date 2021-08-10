import './style.css';

// title div
const loadTitle = () => {
    const divTitleContainer = document.createElement('div');
    const pTitle = document.createElement('p');

    pTitle.textContent = 'CAFETERIA';
    pTitle.classList.add('main-title');

    divTitleContainer.classList.add('title-container');
    divTitleContainer.appendChild(pTitle);
    return divTitleContainer;
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

    return footer;
}
// loader
const loadLandingPage = () => {
    const titleContainer = loadTitle();
    const divContainer = document.createElement('div'); // this div contains all of the information
    const description = loadDescription();
    const schedule = loadSchedule();
    const location = loadLocation();
    const foot = loadFooter();
    
    document.body.appendChild(titleContainer);

    // load information
    divContainer.classList.add('info-container');
    divContainer.appendChild(description);
    divContainer.appendChild(schedule);
    divContainer.appendChild(location);
    document.body.append(divContainer);

    document.body.append(foot);
}

// node remover
function removeLandingNodes(nodeArray){
    nodeArray.forEach(element => {
        document.body.removeChild(element)
    });
}

export {
    loadLandingPage,
    removeLandingNodes,
};