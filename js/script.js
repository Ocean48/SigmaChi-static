let s = 0;

// To make header menu small when page size got small
function header_menu() {
    console.log(s);
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
    if (s%2 == 1) {
        x.style.height = "175px";
        s = s + 1;
    }
    else {
        x.style.height = "auto";
        s = s + 1;
    }
    
}


// var mode = mode = localStorage.getItem('mode');;
// // Check does local storage exist
// if (localStorage.getItem('mode')) {
//     // Get style from local storage
//     mode = localStorage.getItem('mode');
// }
// else {
//     // Set style to local storage
//     localStorage.setItem('mode', "css/style_light.css");
//     // Get style from local storage
//     mode = localStorage.getItem('mode');
// }

// // Set style sheet on load
// function change_mode(sheet) {
//     document.getElementById("page_style").setAttribute("href", sheet);
// }

// // To change to dark mode
// function mode_change_dark() {
//     mode = "css/style_dark.css";
//     // Set style to local storage
//     localStorage.setItem('mode', "css/style_dark.css");
//     document.getElementById("page_style").setAttribute("href", "css/style_dark.css");
// }

// // To change to light mode
// function mode_change_light() {
//     mode = "css/style_light.css";
//     // Set style to local storage
//     localStorage.setItem('mode', "css/style_light.css");
//     document.getElementById("page_style").setAttribute("href", "css/style_light.css");
// }

// window.onload = change_mode(mode);