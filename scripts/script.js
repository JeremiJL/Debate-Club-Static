<!-- Change Debate Club to Home after navbar collapse -->
function changeRedirectionName(){

    let homeRedirection = document.getElementById("homeRedirection");

    if (homeRedirection.textContent == "Home"){
        homeRedirection.textContent = "Debate Club";
    } else {
        homeRedirection.textContent = "Home";
    }

}

<!--  PjaitLogo   -->
const whiteTextPjaitLogo = document.getElementById("pjait_logo").src.toString();
const darkTextPjaitLogo = "../images/icons/logo-pjatk.png";

<!--  Instagram Logo   -->
const whiteInstagramLogo = document.getElementById("instagram_logo").src.toString();
const darkInstagramLogo = "../images/icons/instagram-dark.png";

<!--  Facebook Logo   -->
const whiteFaceBookLogo = document.getElementById("facebook_logo").src.toString();
const darkFaceBookLogo = "../images/icons/facebook-dark.png";

const themeComponents = ["header_navbar","body","footer","general-tab","paris-tab","lincoln-tab","negotiations-tab","header_navbar_mobile"];
function changeToWhite() {

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
    if (document.getElementById("pjait_logo").src.toString() == whiteTextPjaitLogo) {
        document.getElementById("pjait_logo").src = darkTextPjaitLogo;
    } else {
        document.getElementById("pjait_logo").src = whiteTextPjaitLogo;
    }
    // Instagram
    if (document.getElementById("instagram_logo").src.toString() == whiteInstagramLogo) {
        document.getElementById("instagram_logo").src = darkInstagramLogo;
    } else {
        document.getElementById("instagram_logo").src = whiteInstagramLogo;
    }
    // Facebook
    if (document.getElementById("facebook_logo").src.toString() == whiteFaceBookLogo) {
        document.getElementById("facebook_logo").src = darkFaceBookLogo;
    } else {
        document.getElementById("facebook_logo").src = whiteFaceBookLogo;
    }
}