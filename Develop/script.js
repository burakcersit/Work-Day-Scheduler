//Var's
var saveBtn = $(".saveBtn");
var currentDay = moment().format('dddd MMMM Do YYYY')

//Display current time and date

$("#currentDay").text(moment().format('llll'));

//color indication 
function timeColor() {
    var time = moment().hours();

    $(".timer").each(function() {
        var calenderHour = parseInt($(this).attr("id"));
        if (calenderHour > time) {
            $(this).addClass("future");
        } else if (calenderHour === time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// save button function
saveBtn.on("click", function() {
    var hour = $(this).siblings(".time").text();
    var text = $(this).siblings(".text").val();
    localStorage.setItem(hour, text);
});


function savePlan() {

    $(".time").each(function() {
        var calenderHour = $(this).text();
        var calenderPlan = localStorage.getItem(calenderHour);

        if(calenderPlan !== null) {
            $(this).siblings(".text").val(calenderPlan);
        }
    });
}
timeColor();
savePlan();
