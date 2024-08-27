let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("game is draw!, try again");
    msg.innerText="Game is Draw, Please try again"
    msg.style.backgroundColor="#081b31";    

}

showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You Win")
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You Lose")
        msg.innerText =`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
}

const PlayGame=(userChoice)=>{
    console.log("User Choice",userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }

    else{
            let userWin=true;
            if(userChoice==="rock"){
                    userWin=compChoice==="paper" ? false: true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="scissor" ? false: true
            }
            else{
                userWin=compChoice==="rock" ? false: true 
            }
            showWinner(userWin,userChoice,compChoice);
        }
       
};


choices.forEach((choice)=>{
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        PlayGame(userChoice);
    })   
})
