
/**
 * Display a 3 second countdown, once reaching 0 the DisplayQuizz function is executed
 */
function display() {
    $("main").append('<div id ="timer">'+ time +'</div>');
    var timer = setInterval(function () {
        time--;
        $("#timer").text(time);
        if(time == 0){
            clearInterval(timer);
            $("#timer").hide();
            displayQuizz();
        }
    }, 1000);
}

let time = 3;

//Execute display() when the document is ready.
$(document).ready(function () {
    display();
}) 