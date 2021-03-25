
/**
 * Display in the consol each theme and its title
 */
function ListCMD() {
    for (const key in quizzes) {
        console.log(key + " - " + quizzes[key].title);
    }
}

/**
 * add each theme in the form
 */
function AddThemeInForm() {
    let value = 0;
    for (const key in quizzes) {
        $("#theme").append('<option value="'+value+'">'+ quizzes[key].title +'</option>');
        value++;
    }
}

/**
 * Will be excecuted when some press the "Commencer" button, it will return the value of the theme of the quizz
 * @returns the value of the theme of the quizz
 */
function StartQuizz() {
    let value = $("#theme").val();
    $("#formtheme").hide();
    return value;
}


//Value who will be save and usefull to load the quizz question on the quizz.html page
let valeur = null;

//Load valeur 
function loadVal() {
    valeur = localStorage.getItem("valeur");
    if(! valeur) {
        valeur = 0;
    }
}

//Save valeur
function saveVal() {
    localStorage.setItem("valeur", valeur); 
}

//Will load the quizz page 
function openQuizzPage() {
    window.open("quizz.html","_self");
}

$(document).ready(function () {
    AddThemeInForm();
    loadVal();
    $("#start").click(function(){
        valeur = StartQuizz();
        saveVal();
        openQuizzPage();
    })
}) 