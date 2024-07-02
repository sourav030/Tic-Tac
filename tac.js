let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg")
let msg=document.querySelector("#msg");
let x=0;
let turnO = true; // player X player O
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame=()=>
{
    x=0;
    turnO=true;
    enabledBosex();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        if(x>=8)
        {
            showWinner(`Match is draw`);
            console.log(x);
        }
        x=x+1;
        console.log(x);
        box.disabled = true;
        checkWinner();
    });
});

const enabledBosex=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const disabledBosex=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const showWinner=(winner)=>
{
    msg.innerText=winner;
    msgContainer.classList.remove("hide");
    disabledBosex();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                showWinner( `winner is ${pos1val}`);
            }
        }
    }
}   

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)