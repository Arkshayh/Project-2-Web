let valeur = localStorage.getItem('valeur');

function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
}

function displayQuestionInConsole(tabThem) {
    for(let i = 0; i < tabThem.length; i++){
        console.log(tabThem[i].question);
    }
}

//Tell if the quizz chosen has multiple answer or not
let multipleAnswer = false;

//Will check if the quizz chosen has multiple answer if it's the case let multipleAnswer -> true 
function countAnswer(){
    let tabData1 = quizzes[valeur].data; 
    for(let i =0; i < tabData1.length;i++){
        if(tabData1[i].bonneReponses.length > 1){
            multipleAnswer = true;
        }
    }
    console.log("Y a t'il plusieurs réponses possible ? " + multipleAnswer);

}

function displayQuizzUniqueAnswer(tabThem){

    let tabRep;
    let val;

    for(let i = 0; i < tabThem.length; i++){

        val = i + 1;

        $("#QuestionReponse").append('<img src="'+tabThem[i].image+'"alt="image">');
        $("#QuestionReponse").append('<div id ="Question'+ val +'"> Question numéro '+ val +' : '+ tabThem[i].question +'</div');
        
        //Tabeau avec toutes les réponses possible pour la question i
        tabRep = tabThem[i].reponses;
    
        for(let j = 0; j < tabRep.length;j++){
            if(j == 0){
                $("#Question"+val).append('<div class ="Reponse"> <input type="radio" id ="'+ tabRep[j] +'" name="choix'+ i +'" value="'+
             j +'" checked> <label for="'+ tabRep[j] +'">'+ tabRep[j] +'</label> </div>');
            }
            else{
                $("#Question"+val).append('<div class ="Reponse"> <input type="radio" id ="'+ tabRep[j] +'" name="choix'+ i +'" value="'+
             j +'"> <label for="'+ tabRep[j] +'">'+ tabRep[j] +'</label> </div>');
            }
        }
        $("#QuestionReponse").append('<br>');
        
    }
}

function displayQuizzMultipleAnswer(tabThem){

}

function displayQuizz() {
    //Check si quizz à choix multiple.
    countAnswer();

    let tabThem = quizzes[valeur].data; 

    displayQuestionInConsole(tabThem); //Affichage question dans console

    $("main").append('<div id="QuestionReponse"></div>');

    if(multipleAnswer == false){
        displayQuizzUniqueAnswer(tabThem);
    }
    else{
        displayQuizzMultipleAnswer();
    }

    $("main").append('<button id="verification">Vérification</button>')
    $("#verification").click(function(){
        let resultat = verification();
        localStorage.setItem("res", resultat);
        openResultatPage();
    })

}


function tabRepChecked() {
    let tabRep = [];
    for(let i = 0;i < quizzes[valeur].data.length;i++){
        document.getElementsByName('choix'+i).forEach(radio => {
            if(radio.checked){
                tabRep.push(radio.value)
            }
        })
    }
    return tabRep;
}

function verification() {
    let tabRep = tabRepChecked();
    console.log(tabRep);

    return tabRep;
}


//Will load the resultat page 
function openResultatPage() {
    window.open("resultat.html","_self");
}

$(document).ready(function () {
    DisplayTitle(valeur);
}) 