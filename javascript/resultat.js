let resultat = localStorage.getItem('res');
let valeur = localStorage.getItem('valeur');

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

function gotAnswer(tab){
    let answer = [];
    for(let j = 0; j < tab.length;j++){
        answer.push(tab[j].bonneReponses)
    }
    return answer;
}

function DisplayQuestionAndAnswer(){
    let tabData = quizzes[valeur].data; 
    let correction = gotAnswer(tabData);

    $("main").append('<div id = "result"></div>');

    for(let i = 0; i < tabData.length;i++){

        if(i%2==0){
            $("#result").append('<p>'+ (i+1) +') '+ tabData[i].question +' Vous avez répondu : '+ tabData[i].reponses[resultat[i]] +'</p>');
            console.log(resultat[i]);
            if(resultat[i] == correction[0]){
                $("#result").append('<p class = "true"> Bravo, vous avez trouvé la bonne réponse !')
            }
            else{
                $("#result").append('<p class = "false"> Dommage, la bonne réponse était : ' + tabData[i].reponses[correction[i]])
            }
        }
        
        else{
            console.log(resultat[i+1]);
            $("#result").append('<p>'+ (i+1) +') '+ tabData[i].question +' Vous avez répondu : '+ tabData[i].reponses[resultat[i+1]] +'</p>');
            if(resultat[i+1] == correction[0]){
                $("#result").append('<p class = "true"> Bravo, vous avez trouvé la bonne réponse !')
            }
            else{
                $("#result").append('<p class = "false"> Dommage, la bonne réponse était : ' + tabData[i].reponses[correction[i]])
            }
        }
    }
}

$(document).ready(function () {
    DisplaySubTitle();
    DisplayQuestionAndAnswer();
}) 