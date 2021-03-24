
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

//HEEEEEEEEEEEEEELP
function DisplayTitle(val){
    switch(val){
        case '0':
            $("main").append('<h3>'+ quizzes.mer.title +'</h3>');
            break;
        case '1':
            $("main").append('<h3>'+ quizzes.jeux.title +'</h3>');
            break;
        case '2':
            $("main").append('<h3>'+ quizzes.couples.title +'</h3>');
            break;
        case '3':
            $("main").append('<h3>'+ quizzes.webg2.title +'</h3>');
            break;            
    }
}

$(document).ready(function () {
    AddThemeInForm();
    $("#start").click(function(){
        let valeur = StartQuizz();
        DisplayTitle(valeur);
    })
}) 