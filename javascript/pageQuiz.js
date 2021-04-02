//Tell if the quizz chosen has multiple answer or not
let multipleAnswer = false;
//Will get the item save as "valeur" to load the good quizz question
let valeur = localStorage.getItem('valeur');

//Will display the title of the quizz and its description
function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
}

//Display the question of the quizz chosen in the console
function displayQuestionInConsole() {
    let tabThem = quizzes[valeur].data;
    for(let i = 0; i < tabThem.length; i++){
        console.log(tabThem[i].question);
    }
}


//Will check if the quizz chosen has multiple answer if it's the case let multipleAnswer -> true 
function countAnswer(){
    let tabData1 = quizzes[valeur].data; 
    for(let i =0; i < tabData1.length;i++){
        if(tabData1[i].bonneReponses.length > 1){
            multipleAnswer = true;
        }
    }
}

/**
 * This function is only executed for quizzes with multiple answers per question
 * Checks if the number of answers checked per question is sufficient
 * @param {*} bonneRep //table with all the correct answers
 * @returns boolean True if the number of answers checked for each question is correct
 */
function checking(bonneRep){
    let enough = true;
    let count = 0;
    for(let i = 0; i < bonneRep.length;i++){
        document.getElementsByName('choix'+i).forEach(checkbox => {
            if(checkbox.checked){
                count++;
            }
        })
        if(bonneRep[i].length != count){
            enough = false;
        }
        count = 0;
    }
    return enough;
}

/**
 * This function is only executed for quizzes with multiple answers per questions
 * Place in a table all the answers that the user has to check and return it. 
 * @param {*} tabThem table with the data of the quizz chosen
 * @returns tavble with the answers checked by the user
 */
function getMultpleAnswer(tabThem){
    let checked = [];
    for(let i =0; i< tabThem.length;i++){
        document.getElementsByName('choix'+i).forEach(checkbox => {
            if(checkbox.checked){
                checked.push(checkbox.value);
            }
        })
    }
    return checked;
}

/**
 * This function is only executed for quizzes with multiple answers per question
 * Place in a table all the correct answers of the chosen quiz (these are represented as a number)
 * @param {*} tabThem //table with all data about the quizz chosen
 * @returns //table with all the correct answers
 */
function getBonneReponse(tabThem){
    let bonneRep = [];
    for(let i =0; i< tabThem.length;i++){
        bonneRep.push(tabThem[i].bonneReponses);
    }
    return bonneRep;

}

/**
 * This function is only executed for quizzes with 1 answers per question
 * Place in a table all the answers that the user has to check and return it. 
 * @returns Place in a table all the answers that the user has to check and return it. 
 */
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

/**
 * This function is only executed for quizzes with 1 answers per question
 * It will be executed when you click on the verification button
 * @returns Place in a table all the answers that the user has to check and return it. 
 */
function verification() {
    let tabRep = tabRepChecked();
    console.log(tabRep);

    return tabRep;
}

//Will load the resultat page 
function openResultatPage() {
    window.open("resultat.html","_self");
}

// /!\ FOR QUIZZ WITH ONE ANSWER PER QUESTION : For each question will display the question and its answer 
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

// /!\ FOR QUIZZ WITH MORE THAN ONE ANSWER PER QUESTION : For each question will display the question and its answer 
function displayQuizzMultipleAnswer(tabThem){
    let tabRep;
    let val;

    for(let i = 0; i < tabThem.length; i++){
        val = i + 1;
        $("#QuestionReponse").append('<img src="'+tabThem[i].image+'"alt="image">');
        $("#QuestionReponse").append('<div id ="Question'+ val +'"> Question numéro '+ val +' : '+ tabThem[i].question +'</div');
        tabRep = tabThem[i].reponses;
        
        for(let j = 0; j < tabRep.length;j++){
            $("#Question"+val).append('<div class ="Reponse"> <input type="checkbox" id ="'+ tabRep[j] +'" name="choix'+ i +'" value="'+
             j +'"> <label for="'+ tabRep[j] +'">'+ tabRep[j] +'</label> </div>');
        }
        $("#QuestionReponse").append('<br>');
    }
}

//Will display the entire page.
function displayQuizz() {
    //Check si quizz à choix multiple.
    countAnswer();

    let tabThem = quizzes[valeur].data; 

    $("main").append('<div id="QuestionReponse"></div>');

    if(multipleAnswer == false){
        displayQuizzUniqueAnswer(tabThem);
    }
    else{
        displayQuizzMultipleAnswer(tabThem);
    }

    $("main").append('<button id="verification">Vérification</button>')
    $("#verification").click(function(){
        if(multipleAnswer == false){
            let resultat = verification();
            localStorage.setItem("res", resultat);
            localStorage.setItem("typeOfQuizz", multipleAnswer);
            openResultatPage();
        }
        else{
            localStorage.setItem("typeOfQuizz", multipleAnswer);
            let bonneRep = getBonneReponse(tabThem);
            let enough = checking(bonneRep);
            if(enough == false){
                alert("Vous n'avez pas coché assez de case !");
            }
            else{
                let userAnswer = getMultpleAnswer(tabThem);
                localStorage.setItem("res", userAnswer);
                openResultatPage();
            }
        }
    })

}

$(document).ready(function () {
    DisplayTitle(valeur);
}) 