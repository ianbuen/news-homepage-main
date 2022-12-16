const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.menu > img');
const {style: menu} = document.querySelector('.menu');

window.onload = () => {

    if (window.innerWidth < 1080)
        menu.width = "0px";
};

window.onresize = () => {
    menu.width = window.innerWidth < 1080 ? "0px" : "auto";
    btnMenu.src = "./assets/images/icon-menu.svg";
    btnMenu.style.position = "relative";
    btnMenu.style.right = "0";
    menu.height = '100%';
}

btnMenu.addEventListener('click', (e) => { 

    e.preventDefault();

    toggleMenu();
});

const toggleMenu = () => {

    if (menu.width == "0px") 
        openMenu();
    else
        closeMenu();
}; 

const openMenu = () => {
    menu.width = '275px';
    menu.height = '100vh';
    btnMenu.src = "./assets/images/icon-menu-close.svg";
    btnMenu.style.position = "fixed";
    btnMenu.style.right = "20px";
}

const closeMenu = () => {
    menu.width = "0px";
    btnMenu.src = "./assets/images/icon-menu.svg";
    btnMenu.style.position = "relative";
    btnMenu.style.right = "0";
}
