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

//Utiliser quizzes2
function displayQuizz() {
    switch(valeur){
        case '0':
            displayMer();
            break;
        case '1':
            break;
        case '2':
            break;
        case '3':
            break;
    }
}

function displayMer() {
    let tab = quizzes.mer.data
    for(let i = 0; i < tab.length;i++){
        console.log(tab[i].question)
    }
}

function displayMerConsole() {
    let tab = quizzes.mer.data
    for(let i = 0; i < tab.length;i++){
        console.log(tab[i].question)
    }
}

$(document).ready(function () {
    loadVal();
    DisplayTitle(valeur);
}) 