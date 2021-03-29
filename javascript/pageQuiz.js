function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
}

function displayQuestionInConsole(tabThem) {
    for(let i = 0; i < tabThem.length; i++){
        console.log(tabThem[i].question);
    }
}

function displayQuizz() {
    let tabThem = quizzes[valeur].data; 
    displayQuestionInConsole(tabThem); //Affichage question dans console

    $("main").append('<div id="QuestionReponse"></div>');

    $("#QuestionReponse").append('<img src="'+tabThem[0].image+'"alt="image">')
}

$(document).ready(function () {
    loadVal();
    DisplayTitle(valeur);
}) 