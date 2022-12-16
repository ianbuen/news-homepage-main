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
}

btnMenu.addEventListener('click', (e) => { 

    e.preventDefault();

    toggleMenu();
});

const toggleMenu = () => {
    if (menu.width == "0px") {
        menu.width = '275px';
        btnMenu.src = "./assets/images/icon-menu-close.svg";
    } else {
        menu.width = "0px";
        btnMenu.src = "./assets/images/icon-menu.svg";
    }  
}; 
