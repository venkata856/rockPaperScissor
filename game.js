const computerChoice=["Rock","Paper","Scissor"];
var computerChoiceGlobal;
var winner={
    computer:0,
    user:0
};

const playButton = document.querySelector(".play-game");
const optionButton = document.querySelector(".options");
const resultBoard = document.querySelector(".result-display");
const heading = document.querySelector(".heading");
const retryButton = document.querySelector(".retry");

// const resultBoardContent = document.querySelector(".result-display p");

const userChoiceRock = document.querySelector(".rock");
const userChoicePaper = document.querySelector(".paper");
const userChoiceScissor = document.querySelector(".scissor");

function gameRounds(){

    const para=document.createElement('p');

    para.textContent=`Computer selected ${computerChoiceGlobal}`;
    if(winner.computer==5 || winner.user==5 ){

        para.textContent= winner.computer > winner.user ? "Computer won!!":"You won!!"

        userChoiceRock.disabled= true;
        userChoicePaper.disabled= true;
        userChoiceScissor.disabled= true;

        retryButton.classList.remove("hidden");


    }

    resultBoard.removeChild(document.querySelector(".result-display p"));
    resultBoard.appendChild(para);

    if(document.querySelector(".result-display p:nth-child(2)")){
        console.log(document.querySelector(".result-display p:nth-child(1)"));
        resultBoard.removeChild(document.querySelector(".result-display p:nth-child(1)"));
        
    }


    const paraSibling=document.createElement('p');
    paraSibling.textContent= `Computer Score: ${winner.computer} Your Score: ${winner.user}`
    resultBoard.appendChild(paraSibling);


}

userChoiceRock.addEventListener("click",()=>{

    play("Rock");
    gameRounds();

})

userChoicePaper.addEventListener("click",()=>{

    play("Paper");
    gameRounds();

})
userChoiceScissor.addEventListener("click",()=>{
    play("Scissor");
    gameRounds();

})

retryButton.addEventListener("click",()=>{

    userChoiceRock.disabled= false;
    userChoicePaper.disabled= false;
    userChoiceScissor.disabled= false;

    retryButton.classList.add("hidden");
    resultBoard.removeChild(document.querySelector(".result-display p:nth-child(1)"));
    resultBoard.removeChild(document.querySelector(".result-display p:nth-child(1)"));

    resultBoard.innerHTML="<p>Select your choice!!</p>";
    winner.computer=0;
    winner.user=0;
})




playButton.addEventListener("click",(e)=>{

    optionButton.classList.remove("hidden");
    resultBoard.classList.remove("hidden");
    playButton.classList.add("hidden");
    heading.classList.add("hidden")

})


function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    computerChoiceGlobal=computerChoice[random];
    return computerChoiceGlobal
}


function playRound(playerSelection,getComputerChoice){

    playerSelection=playerSelection.toUpperCase().toString()
    getComputerChoice=getComputerChoice.toUpperCase().toString()
    if(!(getComputerChoice.localeCompare(playerSelection)===0)){
        if((getComputerChoice=="ROCK" && playerSelection=="SCISSOR") || (getComputerChoice=="PAPER" && playerSelection=="ROCK") || (getComputerChoice=="SCISSOR" && playerSelection=="PAPER")){
            winner.computer++;
        }else if((getComputerChoice=="ROCK" && playerSelection=="PAPER") || (getComputerChoice=="PAPER" && playerSelection=="SCISSOR") || (getComputerChoice=="SCISSOR" && playerSelection=="ROCK")){
            winner.user++;
        }

    }

    console.log(winner)

    
}

function play(playerSelection){

        
        playRound(playerSelection,getComputerChoice())
    

    if(winner.computer>winner.user){
        console.log("Winner computer!!")
    }else{
        console.log("Winner user!!")
    }
}
