//The answer from the user (',' must be remove the be usable)
let resultat = localStorage.getItem('res');
//Valeur = Mer (0) / Couples /...
let valeur = localStorage.getItem('valeur');

//"true" = multi  "false" = single answer
let typeQuizz = localStorage.getItem('typeOfQuizz');

let resultat2 = localStorage.getItem('res2');

function DisplaySubTitle(){
    $("main").append('<h2>Correction</h2>');
}

/**
 * Renvoie un tableau avec l'emplacement de chaque bonne réponse (cas où nb bonne rep = 1)
 * @returns tab avec l'emplacement de chaque bonne réponse pour chaque question (cas où une seule bonne réponse)
 */
 function tabBonneRep() {
    let tableauBonneRéponse = [];
    for(let i = 0;i < quizzes[valeur].data.length;i++){
        tableauBonneRéponse.push(quizzes[valeur].data[i].bonneReponses[0]); //[0] car pour les cas où 1 bonne rep
    }
    return tableauBonneRéponse;
}

/**
 * Return a table with the correct answers
 * @param {*} tab table with the data of the quizz chosen
 * @returns table with the correct answers
 */
function gotAnswer(tab){
    let answer = [];
    for(let j = 0; j < tab.length;j++){
        answer.push(tab[j].bonneReponses)
    }
    return answer;
}

/**
 * Remove the ',' from the table with your answers
 * @returns a table with your answers
 */
function gotTrueResult(){
    let res = [];
    for(let i = 0; i < resultat.length; i++){
        if(i%2==0){
            res.push(resultat[i]);
        }
    }
    return res
}

/**
 * /!\ FOR QUIZZ  ONE ANSWER PER QUESTION
 * Display the question + the image of this question + your answers + the correction
 */
function DisplayQuestionAndAnswer(){
    let tabData = quizzes[valeur].data; 
    let correction = gotAnswer(tabData);
    let res = gotTrueResult();

    $("main").append('<div id = "result"></div>');
    

    for(let i = 0; i < tabData.length;i++){
       
        $("#result").append('<p>'+ (i+1) +') '+ tabData[i].question +' Vous avez répondu : '+ tabData[i].reponses[res[i]] +'</p>');
        $("#result").append('<img src="'+tabData[i].image+'"alt="image">'); 
        if(res[i] == correction[i]){
            $("#result").append('<p class = "true"> Bravo, vous avez trouvé la bonne réponse !')
        }
        else{
            $("#result").append('<p class = "false"> Dommage, la bonne réponse était : ' + tabData[i].reponses[correction[i]])
        }

    }
}

/**
 * /!\ FOR QUIZZ WITH MORE THAN ONE ANSWER PER QUESTION
 * Display the question + the image of this question + your answers + the correction
 */
function DisplayResultatMultipleAnswer(){
    let tabData = quizzes[valeur].data;
    let correction = gotAnswer(tabData);
    let UserRep = gotTrueResult();
    let nbRepQuestion = 0;
    let equals = true;
    let showingAnswer = [];

    let currentRep;
    let currentUserRep = [];
    $("main").append('<div id = "result"></div>');
    for(let i = 0; i < tabData.length;i++){
        $("#result").append('<p>'+ (i+1) +') '+ tabData[i].question + '</p>');
        $("#result").append('<img src="'+tabData[i].image+'"alt="image">')
        $("#result").append('<p id = "'+ i + '">Vous avez répondu : </p>');
        currentRep = correction[i];
    
        for(let j = 0; j < currentRep.length; j++){
            currentUserRep.push(UserRep[nbRepQuestion])
            nbRepQuestion++;
        }
        
        for(let h = 0; h < currentRep.length;h++){
            $('#'+i+'').append(tabData[i].reponses[currentUserRep[h]] + ", ");
            if(currentRep[h] != currentUserRep[h]){
                equals = false;
            }
        }
        
        if(equals == true){
            $("#result").append('<p class = "true"> Bravo, vous avez trouvé la bonne réponse !')
        }
        else{
            for(let k = 0; k < currentRep.length;k++){
                showingAnswer.push(tabData[i].reponses[currentRep[k]])
            }
            $("#result").append('<p class = "false" id = "res'+i+'"> Dommage, les bonnes réponses étaient : ' + showingAnswer)
        }

        equals = true;
        currentUserRep = [];
        showingAnswer = [];
    }
    
    
}

/**
 * when the page is load, display the title/Subtitle + your answers and the correction
 */
$(document).ready(function () {
    DisplaySubTitle();
    if(typeQuizz == "false"){
        DisplayQuestionAndAnswer();
    }
    else if(typeQuizz == "mix"){
        
    }
    else{
        DisplayResultatMultipleAnswer();
    }
}) 