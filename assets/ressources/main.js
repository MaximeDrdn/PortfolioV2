document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var burgerMenu = document.getElementById('burger-menu');
    var menuItems = document.getElementById('menu-items');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-white');
            header.classList.remove('header-transparent');
            burgerMenu.classList.add('burger-menu-black');
            burgerMenu.classList.remove('burger-menu-white');
        } else {
            header.classList.add('header-transparent');
            header.classList.remove('header-white');
            if (menuItems.classList.contains('active')) {
                burgerMenu.classList.add('burger-menu-black');
                burgerMenu.classList.remove('burger-menu-white');
            } else {
                burgerMenu.classList.add('burger-menu-white');
                burgerMenu.classList.remove('burger-menu-black');
            }
        }
    });

    burgerMenu.addEventListener('click', function() {
        menuItems.classList.toggle('active');
        if (menuItems.classList.contains('active')) {
            burgerMenu.classList.add('burger-menu-black');
            burgerMenu.classList.remove('burger-menu-white');
        } else {
            if (window.scrollY > 50) {
                burgerMenu.classList.add('burger-menu-black');
                burgerMenu.classList.remove('burger-menu-white');
            } else {
                burgerMenu.classList.add('burger-menu-white');
                burgerMenu.classList.remove('burger-menu-black');
            }
        }
    });

    // Initial check
    if (window.scrollY > 50) {
        header.classList.add('header-white');
        burgerMenu.classList.add('burger-menu-black');
    } else {
        header.classList.add('header-transparent');
        burgerMenu.classList.add('burger-menu-white');
    }
  
 
});

