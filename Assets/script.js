$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 
        localStorage.setItem(time, text);
    })
    
    $("#am-8 .description").val(localStorage.getItem("am-8"));
    $("#am-9 .description").val(localStorage.getItem("am-9"));
    $("#10-am .description").val(localStorage.getItem("10-am"));
    $("#11-am .description").val(localStorage.getItem("11-am"));
    $("#12-pm .description").val(localStorage.getItem("12-pm"));
    $("#1-pm .description").val(localStorage.getItem("1-pm"));
    $("#2-pm .description").val(localStorage.getItem("2-pm"));
    $("#3-pm .description").val(localStorage.getItem("3-pm"));
    $("#4-pm .description").val(localStorage.getItem("4-pm"));
    $("#5-pm .description").val(localStorage.getItem("5-pm"));

    function hourTracker() {
        var currentHour = moment().hour(); 
  
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log( blockHour, currentHour)
  
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
    hourTracker(); 
})