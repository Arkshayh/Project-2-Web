
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
    for (const key in quizzes) {
        $("#theme").append('<option value="'+key+'">'+ quizzes[key].title +'</option>');
    }
    $("#theme").append('<option value="mix">mix</option>')
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

//Save as valeur the value of the quizz chosen
function saveVal() {
    localStorage.setItem("valeur", valeur); 
}

//Will open a new page who will load the quizz chosen 
function openQuizzPage() {
    window.open("quizz.html","_self");
}

//Execute will the current page is loaded
$(document).ready(function () {
    AddThemeInForm();
    $("#start").click(function(){
        valeur = StartQuizz();
        saveVal();
        openQuizzPage();
    })
}) 