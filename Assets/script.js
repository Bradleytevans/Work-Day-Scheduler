//Lets the html and css load first
$(document).ready(function () {
    //Uses Moment.js to display the date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //added event listener for the save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //Adds the time and description to the local storage
        localStorage.setItem(time, text);
    })
    //calls on the local storage for each hour so when the page refreshes your activity is saved
    $("#am-8 .description").val(localStorage.getItem("am-8"));
    $("#am-9 .description").val(localStorage.getItem("am-9"));
    $("#am-10 .description").val(localStorage.getItem("am-10"));
    $("#am-11 .description").val(localStorage.getItem("am-11"));
    $("#pm-12 .description").val(localStorage.getItem("pm-12"));
    $("#pm-1 .description").val(localStorage.getItem("pm-1"));
    $("#pm-2 .description").val(localStorage.getItem("pm-2"));
    $("#pm-3 .description").val(localStorage.getItem("pm-3"));
    $("#pm-4 .description").val(localStorage.getItem("pm-4"));
    $("#pm-5 .description").val(localStorage.getItem("pm-5"));

    function hourTracker() {
        //using moment.js again to establish the current hour
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            //using parseInt() to establish the block hour by selecting the id of each hour, using split to remove the am and pm
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            //checks to see what css theme to apply based on time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //repeats the function s
})