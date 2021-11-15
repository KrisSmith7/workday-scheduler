var dayContainer = document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do YYYY");

var displayDate = function () {
    dayContainer.textContent = currentDay;
};

console.log($("num8 .description")[0])



displayDate();

