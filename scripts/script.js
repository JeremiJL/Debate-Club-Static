<!-- Change Debate Club to Home after navbar collapse -->
function changeRedirectionName(onHomePage){

    const homeRedirection = document.getElementById("homeRedirection");

    if (homeRedirection.textContent == "Home"){
        homeRedirection.textContent = "Debate Club";
        if (!onHomePage) {
            homeRedirection.classList.remove("text-white-50");
            homeRedirection.classList.remove("text-black-50");
        }
    } else {
        homeRedirection.textContent = "Home";
        if (!onHomePage){
            if (!darkMode)
                homeRedirection.classList.add("text-white-50");
            else
                homeRedirection.classList.add("text-black-50");
        }
    }
}

// Dark Mode flag
let darkMode = false;

<!--  PjaitLogo   -->
const pjaitLogo = document.getElementById("pjait_logo");
const whiteTextPjaitLogo = "../images/icons/logo-pjatk-white-text.png";
const darkTextPjaitLogo = "../images/icons/logo-pjatk.png";

<!--  Instagram Logo   -->
const instagramLogo = document.getElementById("instagram_logo");
const whiteInstagramLogo = "../images/icons/instagram-white.png";
const darkInstagramLogo = "../images/icons/instagram-dark.png";

<!--  Facebook Logo   -->
const facebookLogo = document.getElementById("facebook_logo");
const whiteFaceBookLogo = "../images/icons/facebook-white.png";
const darkFaceBookLogo = "../images/icons/facebook-dark.png";

const themeComponents = ["darkModeSwitch", "header_navbar","body","footer","general-tab","paris-tab","lincoln-tab","negotiations-tab","header_navbar_mobile"];
function changeMode() {

    darkMode = !darkMode;

    for (element_id of themeComponents) {

        if (document.getElementById(element_id) != null) {

            let element = document.getElementById(element_id);

            // switch backgrounds
            if (element.classList.contains("bg-dark")) {
                // remove
                element.classList.remove("bg-dark");
                // add
                element.classList.add("bg-white");
            } else {
                // remove
                element.classList.remove("bg-white");
                // add
                element.classList.add("bg-dark");
            }
            // switch navbars
            if (element.classList.contains("navbar-dark")) {
                // remove
                element.classList.remove("navbar-dark");
                // add
                element.classList.add("navbar-white");
            } else {
                // remove
                element.classList.remove("navbar-white");
                // add
                element.classList.add("navbar-dark");
            }
            // switch text colors
            if (element.classList.contains("text-dark")) {
                // remove
                element.classList.remove("text-dark");
                // add
                element.classList.add("text-white");
            } else {
                // remove
                element.classList.remove("text-white");
                // add
                element.classList.add("text-dark");
            }
        }
    }

    // Change logos
    // Pjait
    if (pjaitLogo.src == whiteTextPjaitLogo) {
        pjaitLogo.src = darkTextPjaitLogo;
    } else {
        pjaitLogo.src = whiteTextPjaitLogo;
    }
    // Instagram
    if (instagramLogo.src == whiteInstagramLogo) {
        instagramLogo.src = darkInstagramLogo;
    } else {
        instagramLogo.src = whiteInstagramLogo;
    }
    // Facebook
    if (facebookLogo.src == whiteFaceBookLogo) {
        facebookLogo.src = darkFaceBookLogo;
    } else {
        facebookLogo.src = whiteFaceBookLogo;
    }
}