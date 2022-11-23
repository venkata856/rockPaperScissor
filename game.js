function getComputerChoice(){
    let computerChoice=["Rock","Paper","Scissors"]
    let random = Math.floor(Math.random() * 3);
    console.log(random)
    return computerChoice[random]
}

console.log(getComputerChoice())