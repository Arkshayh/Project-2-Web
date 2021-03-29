function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
}

function displayQuizz() {
    let tabThem = quizzes[valeur].data;
    for(let i = 0; i < tabThem.length; i++){
        console.log(tabThem[i].question);
    }
    console.log("yo")
}

$(document).ready(function () {
    loadVal();
    DisplayTitle(valeur);
}) 