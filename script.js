var configmenu = document.querySelector('.config-menu');
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    configmenu.classList.toggle("config-menu-height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}