let boxes=document.querySelectorAll(".box");
let restart=document.querySelector("#restart");
let newGame=document.querySelector("#newGame");
let msgbox= document.querySelector(".msg-box");
let msg=document.querySelector("#mess");
// let game=document.querySelector(".game");

let turnO= true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
];
const disablebox= ()=>{
    for (let box of boxes){
        box.disabled= true;
    }
}
const showWinner = (win) => {
    msg.innerText=`Congratulations!!, player ${win} is Winner`;
    msgbox.classList.remove("hide");
    disablebox();
    // game.classList.add("hide");
}
const checkWinner = ()=>{
    for(let pattern of winpattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val !="") {
            if(pos1val=== pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            // turnO= !turnO;
            turnO=false;
        }
        else{
            box.innerText="X";
            // turnO= !turnO;
            turnO=true;
        }
        box.disabled= true;
        checkWinner();
    });
});

const enablebox= ()=>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

const reset = () =>{
    turnO=true;
    enablebox();
    msgbox.classList.add("hide");

}




newGame.addEventListener("click",reset);
restart.addEventListener("click",reset);