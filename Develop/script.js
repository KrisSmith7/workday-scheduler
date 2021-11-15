$(document).ready(function () {

//selects display container to show current date
var dayContainer = document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

var displayDate = function () {
    dayContainer.textContent = currentDay;
};

//checks current time and updates colorcode for each time-block
$(".time-block").each(function() {
    var timeBlocks = $(this).attr("id").split("m")[1]; //uses 24 hr time and splits id attribute in HTML to crosscheck time to add appropriate css class
    // console.log(timeBlocks);
    console.log (currentHour)
    if (currentHour === timeBlocks) {
        $(this).addClass("present");
    } else if (currentHour < timeBlocks ) {
    $(this).addClass("future");
} else if (currentHour > timeBlocks) {
    $(this).addClass("past");
}
});





displayDate();
});