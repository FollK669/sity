document.addEventListener('DOMContentLoaded', function () {
    var sideNav = document.getElementById('mySidenav');
    var main = document.getElementById('main');

    function openNav() {
        sideNav.style.width = '250px';
        main.style.marginLeft = '250px';
    }

    function closeNav() {
        sideNav.style.width = '0';
        main.style.marginLeft = '0';
    }

    // Voeg click event toe aan de afbeelding om het zijmenu te openen
    var image = document.getElementById('openMenuImage');
    if (image) {
        image.addEventListener('click', openNav);
    }

    // Voeg click events toe aan zijmenu-items om zijmenu-items te laten uitschuiven
    var menuItems = document.querySelectorAll('#mySidenav a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', closeNav);
    });
});