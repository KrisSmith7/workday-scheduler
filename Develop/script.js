/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
*/
var dayContainer = document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do YYYY");

var displayDate = function () {
    dayContainer.textContent = currentDay;
};

/*
WHEN I scroll down
THEN I am presented with time blocks for standard business hours*/

var taskContainer = document.querySelector(".container")


/*
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future 
*/
 var currentHour = moment().hour(Number._d);
 console.log(currentHour);


/*WHEN I click into a time block
THEN I can enter an event*/
var userTaskInput = $("textarea").val();
$(".description").on("change",
console.log (userTaskInput))

//     this.textContent = ""
// $(this.textContent).on("data", function(){
//     var userTaskInput = "data";
//     console.log (userTaskInput)
//     var text = $(this)
//     .text()
//     .trim();
//     console.log(text);
//     var textInput = $(this).replaceWith(this.textContent);
// console.log(textInput)
//   });

/*WHEN I click the save button for that time block
THEN the text for that event is saved in local storage*/
$(".saveBtn").on("click", function () {
    console.log("save btn clicked.")
});

/*WHEN I refresh the page
THEN the saved events persist*/

displayDate();
getUserInput();