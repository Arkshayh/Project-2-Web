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
    let tabRep;
    let val;

    displayQuestionInConsole(tabThem); //Affichage question dans console

    $("main").append('<div id="QuestionReponse"></div>');

    for(let i = 0; i < tabThem.length; i++){

        val = i + 1;

        $("#QuestionReponse").append('<img src="'+tabThem[i].image+'"alt="image">');
        $("#QuestionReponse").append('<div id ="Question'+ val +'"> Question numéro '+ val +' : '+ tabThem[i].question +'</div');

        tabRep = tabThem[i].reponses;
    
        for(let j = 0; j < tabRep.length;j++){
            $("#Question"+val).append('<div class ="Reponse"> <input type="radio" id ="'+ tabRep[j] +'" name="choix'+ i +'" value="'+
             tabRep[j] +'"> <label for="'+ tabRep[j] +'">'+ tabRep[j] +'</label> </div>');
        }
        $("#QuestionReponse").append('<br></br>');
        
    }

    $("#QuestionReponse").append('<button id="verification">Vérification</button>')

    
}

$(document).ready(function () {
    loadVal();
    DisplayTitle(valeur);
}) 