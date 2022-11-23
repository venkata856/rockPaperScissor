function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissors"]
    let random = Math.floor(Math.random() * 3);
    return computerChoice[random]
}

function playRound(playerSelection,getComputerChoice){

    console.log(getComputerChoice)
    console.log(playerSelection)
    if(getComputerChoice.localeCompare(playerSelection)){
        return "Its a tie Mate!!"
    }
    
}

function play(){
    for(let i =0; i<5;i++){
        
        let playerSelection = prompt("Enter your choice")

        console.log(playRound(playerSelection,getComputerChoice()))
    }
}

play();



// console.log(playRound("rock",getComputerChoice()))