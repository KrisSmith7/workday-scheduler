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
var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','Red');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }else{
      $(this).css('background-color','White');
    }
  });
  */


/*WHEN I click into a time block
THEN I can enter an event

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage


WHEN I refresh the page
THEN the saved events persist*/

displayDate();