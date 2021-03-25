function display() {
    $("main").append('<div id ="timer">'+ time +'</div>');
    var timer = setInterval(function () {
        time--;
        $("#timer").text(time);
        if(time == 0){
            clearInterval(timer);
            $("#timer").hide();
        }
    }, 1000);
}

let time = 3;

$(document).ready(function () {
    display();
}) 