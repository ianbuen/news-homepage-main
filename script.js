const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.menu > img');
const {style: menu} = document.querySelector('.menu');

btnMenu.addEventListener('click', () => { 
    menu.width = '70%';
    btnClose.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    menu.width = "0";
    btnClose.style.display = "none";
})

