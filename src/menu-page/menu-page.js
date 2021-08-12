const loadDemo = () => {
    const div = document.createElement('p');
    div.textContent = 'this is the menu page';
    div.classList.add('displayed');
    return div;
}

export {
    loadDemo,
};