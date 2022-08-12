// To make header menu small when page size got small
function header_menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

// Get cookie
var m = document.cookie;
if (document.cookie === "") {
    document.cookie = "css/style_light.css";
    m = document.cookie
}
// Set style sheet on load
function change_mode(sheet) {
    document.getElementById("page_style").setAttribute("href", sheet);
}

// To change to dark mode
function mode_change_dark() {
    m = "css/style_dark.css";
    document.cookie = "css/style_dark.css";
    document.getElementById("page_style").setAttribute("href", "css/style_dark.css");
}

// To change to light mode
function mode_change_light() {
    m = "css/style_light.css";
    document.cookie = "css/style_light.css";
    document.getElementById("page_style").setAttribute("href", "css/style_light.css");
}

window.onload = change_mode(m);