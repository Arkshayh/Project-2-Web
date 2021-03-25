function DisplayTitle(){
    switch(valeur){
        case '0':
            $("main").append('<h2>'+ quizzes.mer.title +'</h2>');
            $("main").append('<h3>'+ quizzes.mer.description +'</h3>');
            break;
        case '1':
            $("main").append('<h2>'+ quizzes.jeux.title +'</h2>');
            $("main").append('<h3>'+ quizzes.jeux.description +'</h3>');
            break;
        case '2':
            $("main").append('<h2>'+ quizzes.couples.title +'</h2>');
            $("main").append('<h3>'+ quizzes.couples.description +'</h3>');
            break;
        case '3':
            $("main").append('<h2>'+ quizzes.webg2.title +'</h2>');
            $("main").append('<h3>'+ quizzes.webg2.description +'</h3>');
            break;            
    }
}


function displayQuizz() {
}

$(document).ready(function () {
    loadVal();
    DisplayTitle(valeur);
}) 