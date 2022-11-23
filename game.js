const computerChoice=["Rock","Paper","Scissor"]
function getComputerChoice(){
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

    if(!(getComputerChoice.localeCompare(playerSelection)===0)){
        if((getComputerChoice=="ROCK" && playerSelection=="SCISSOR") || (getComputerChoice=="PAPER" && playerSelection=="ROCK") || (getComputerChoice=="SCISSOR" && playerSelection=="PAPER")){
            console.log("Computer is the winner!!")
            winner.computer++;
        }else if((getComputerChoice=="ROCK" && playerSelection=="PAPER") || (getComputerChoice=="PAPER" && playerSelection=="SCISSOR") || (getComputerChoice=="SCISSOR" && playerSelection=="ROCK")){
            console.log("User is the winner!!")
            winner.user++;
        }

    }

    console.log(winner)

    
}

function play(){
    while(true){
        
        let playerSelection = prompt("Enter your choice")
        // if(!computerChoice.includes(playerSelection)){
        //     console.log("wrong value entered!!")
        //     break
            
        // }

        console.log(playRound(playerSelection,getComputerChoice()))

        if(winner.computer==5 || winner.user==5 )
        break;
    }

    if(winner.computer>winner.user){
        console.log("Winner computer!!")
    }else{
        console.log("Winner user!!")
    }
}

play();



// console.log(playRound("rock",getComputerChoice()))