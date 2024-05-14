const whiteTextPjaitLogo = document.getElementById("pjait_logo").src.toString();
const darkTextPjaitLogo = "../images/icons/logo-pjatk.png";

const themeComponents = ["header_navbar","body","footer"];
function changeToWhite() {

    for (element_id of themeComponents) {

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


        // Change logo
        if (document.getElementById("pjait_logo").src.toString() == whiteTextPjaitLogo) {
            document.getElementById("pjait_logo").src = darkTextPjaitLogo;
        } else {
            document.getElementById("pjait_logo").src = whiteTextPjaitLogo;
        }

    }

}