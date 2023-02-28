// CHANGE NAVBAR STYLE ON SCROLL

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
})

// SHOW/HIDE FAQ ANSWER

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    
        // CHANGE ICON
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "bi bi-plus-lg"){
            icon.className = "bi bi-dash-lg";
        } else {
            icon.className = "bi bi-plus-lg";
        }    
    })
})

// SHOW/HIDE NAVBAR IN TABLET AND SMARPHONE VIEW

const menu = document.querySelector('.nav_menu');
const showMenu = document.querySelector('#open_menu_btn');
const closeMenu = document.querySelector('#close_menu_btn');

showMenu.addEventListener('click', () => {
    menu.style.display = "flex";
    showMenu.style.display = "none";
    closeMenu.style.display = "inline-block";
})

closeMenu.addEventListener('click', () => {
    menu.style.display = "none";
    showMenu.style.display = "inline-block";
    closeMenu.style.display = "none";
})
