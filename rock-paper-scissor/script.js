let userScorer= 0;
let compScore= 0;

let choices = document.querySelectorAll(".game_button");
let mess= document.querySelector("#mess");
let cs= document.querySelector("#comp-score");
let us=document.querySelector("#user-score");

const playGame =(userChoice)=> {
    const compChoice= compTurn();
    if(userChoice===compChoice){
        mess.innerText="Draw";
    }
    else{
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                mess.innerText="paper won from rock";
                compScore=compScore+1;
                cs.innerText=compScore;
            }
            else{
                mess.innerText="rock won from scissor";
                userScorer= userScorer+1;
                us.innerText=userScorer;
            }
        }   
        else if(userChoice==="paper"){

            if(compChoice==="rock"){
                mess.innerText="paper won from rock";
                userScorer= userScorer+1;
                us.innerText=userScorer;
            }
            else{
                mess.innerText="Scissor won from paper";
                compScore=compScore+1;
                cs.innerText=compScore;
            }
        }
        else{
            if(compChoice==="rock"){
                mess.innerText="rock won from scissor";
                compScore=compScore+1;
                cs.innerText=compScore;
            }
            else{
                mess.innerText="scissor won from paper";
                userScorer= userScorer+1;
                us.innerText=userScorer;
            }
        }    
    }
};
const compTurn= ()=> {
    const options= ["rock","paper","scissor"];
    let ranidx =Math.floor(Math.random()*3);
    return (options[ranidx]);
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});
