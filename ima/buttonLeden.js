function openPageLeden() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = 'Leden.html';
}

function openPageBoek() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = 'boek.html';
}

function openPageBezoekers() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = 'Bezoekers.html';
}

function openPageHome() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = 'index.html';
}








// Voer de functie uit wanneer de pagina is geladen
window.onload = function () {
    checkScrollbar();
};






let darkMode = false;

function toggleTheme() {
    const body = document.body;
    darkMode = !darkMode;
    body.classList.toggle("dark-theme");
    updateButton();
}

function updateButton() {
    const button = document.getElementById("theme-toggle");
    if (darkMode) {
        button.textContent = "LightTheme";
    } else {
        button.textContent = "DarkTheme";
    }
}