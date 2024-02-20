
$(document).ready(function () {
    // Define variables for today's date and the time right now
    let currentDay = moment().format('dddd, MMMM Do YYYY'); // Include day of the week
     // Update the text content of the #currentDay element with the current day
    $("#currentDay").text(currentDay);
    let currentTime = moment().hour();

    // Update elements with localStorage values
    for (key = 0; key < localStorage.length; key++){
        timeID = localStorage.key(key);
        timeValue = localStorage.getItem(timeID);
        $("#"+timeID).val(timeValue);
    }

    // Display today's date with the day of the week in the currentDate id
    $("#currentDay").append(currentDay);

    // Add styling based on past, present, and future times
    $("input").each(function () {
        var item = parseInt($(this).attr("time"));

        if (item < currentTime) {
            $(this).addClass("past");
        } else if (item > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });

    // Save event to localStorage when the save button is clicked
    $("button").on("click", function () {
        inputID = $(this).attr("input-id");
        inputEl = $(document.getElementById(inputID));
        calendarEvent = inputEl.val();
        localStorage.setItem(inputEl.attr("id"), calendarEvent);
    });
});