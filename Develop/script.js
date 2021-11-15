$(document).ready(function () {

//selects display container to show current date
var dayContainer = document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

var displayDate = function () {
    dayContainer.textContent = currentDay;
};




displayDate();
});