// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
       button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You Clicked ${gameType}`);
            }
       }) 
}

    /*-- Old version of idea
    for (let i = 0; i <buttons.length; i++){
    }
    same as
    for (let button of buttons){
    }
    ---*/

})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}