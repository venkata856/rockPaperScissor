function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissors"]
    let random = Math.floor(Math.random() * 3);
    return computerChoice[random]
}
var winner={
    computer:0,
    user:0
}

function playRound(playerSelection,getComputerChoice){

    playerSelection=playerSelection.toUpperCase().toString()
    getComputerChoice=getComputerChoice.toUpperCase().toString()

    console.log("computer choice is " +getComputerChoice)
    console.log("player choice is " +playerSelection)
    // console.log(getComputerChoice.localeCompare(playerSelection))

    if(getComputerChoice.localeCompare(playerSelection)===0){
        winner.computer++;
        winner.user++;

    }else if(getComputerChoice.localeCompare(playerSelection)===-1){
        winner.computer++;
    }else if(getComputerChoice.localeCompare(playerSelection)===1){
        winner.user++;
    }

    console.log(winner)

    
}

function play(){
    for(let i =0; i<5;i++){
        
        let playerSelection = prompt("Enter your choice")

        console.log(playRound(playerSelection,getComputerChoice()))
    }

    if(winner.computer>winner.user){
        console.log("Winner computer!!")
    }else{
        console.log("Winner user!!")
    }
}

play();



// console.log(playRound("rock",getComputerChoice()))