function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
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