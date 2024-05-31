
const header = document.getElementById("meeting-schedule-header");
const contentTitle = document.getElementById("meeting-schedule-content-title");
const contentTime = document.getElementById("meeting-schedule-content-time");
const contentLocation = document.getElementById("meeting-schedule-content-location");
const contentAgenda = document.getElementById("meeting-schedule-content-agenda");

function showDate(date){

    header.textContent = date + " May 2024";

    switch(date) {
        case "31":
            // Set Visibility
            contentTime.style.visibility = "visible";
            contentLocation.style.visibility = "visible";
            contentAgenda.style.visibility = "visible";

            // Set Text
            contentTitle.textContent = "Our first meeting!";
            contentTime.textContent = "Time : 16:00";
            contentLocation.textContent = "Location : Amphitheater at Lazienki Park";
            contentAgenda.textContent = "Short lecture: 'Doubt Everything, Doubt Everyone', Team exercises, Paris-Impromptu Debate Session";
            break;
        default:
            // Set Visibility
            contentTime.style.visibility = "hidden";
            contentLocation.style.visibility = "hidden";
            contentAgenda.style.visibility = "hidden";

            // Set Text
            contentTitle.textContent = "We are not planning any meeting for this day.";
    }

}