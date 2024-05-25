
const header = document.getElementById("meeting-schedule-header");
const content = document.getElementById("meeting-schedule-content");
function showDate(date){

    header.textContent = date + " May 2024";

    switch(date) {
        case "9":
            content.textContent = "This day we will hold meeting at 3:00 PM, we are planning to do this and that ...\n" +
                    "after this and that you are welcomed to get drunk with us ...";
            break;
        case "21":
            content.textContent = "This day we will hold meeting at 5:00 PM, we are planning to do this and only this!!!! ...";
            break;
        case "29":
            content.textContent = "This day we will hold meeting at 7:00 PM, we are planning to do this and that and that lorem ipsuumm?";
            break;
        default:
            content.textContent = "We are not planning any meeting for this day.";
    }

}