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
    // console.log (currentHour);
    if (currentHour === timeBlocks) {
        $(this).addClass("present");
    } else if (currentHour < timeBlocks ) {
    $(this).addClass("future");
} else if (currentHour > timeBlocks) {
    $(this).addClass("past");
}
});


$(".saveBtn").click(function (event){
    event.preventDefault;
    var task = $(this).siblings(".description").val() //selects value of sibling textarea
    var taskTime = $(this).parent().attr("id").split("m")[1]; //selects parent div and checks "time"
    localStorage.setItem(taskTime, task);
});
// console.log (localStorage);


//WHEN I refresh the page, THEN the saved events persist -- corresponds to appropriate timeblocks
$("#num08 .description").val(localStorage.getItem("08"));
$("#num09 .description").val(localStorage.getItem("09"));
$("#num10 .description").val(localStorage.getItem("10"));
$("#num11 .description").val(localStorage.getItem("11"));
$("#num12 .description").val(localStorage.getItem("12"));
$("#num13 .description").val(localStorage.getItem("13"));
$("#num14 .description").val(localStorage.getItem("14"));
$("#num15 .description").val(localStorage.getItem("15"));
$("#num16 .description").val(localStorage.getItem("16"));
$("#num17 .description").val(localStorage.getItem("17"));


//clears local storage
$("#clearBtn").click(function (event){
    event.preventDefault;
    localStorage.clear();})

//displays date at the top of the page
displayDate();
});