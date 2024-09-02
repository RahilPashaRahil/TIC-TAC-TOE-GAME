let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let Msg=document.querySelector("#msg");
let count=0;


// const counting =()=>{
//     for(box of boxes){
//         if(box=""){
//             count++;

//         }
//     }
   

// } 


    


let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
];

boxes.forEach((box) => {
    box.addEventListener("click" , ()=> {
        if(turnO)  {
            box.innerText = "O";
            // counting();
            turnO=false;
        }else{
            box.innerText="X";
            // counting();
            turnO=true;

        }
        box.disabled=true;
        checkwinner();
    });
});

const resetgame =()=>{
    turnO=true;
    Enableboxes();
    msgcontainer.classList.add("hide");
}

const Disableboxes =()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
};

const Enableboxes =()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};


const showwinner =(winner) =>{
    Msg.innerText="You Win";
    msgcontainer.classList.remove("hide");
    Disableboxes();
}
const checkwinner =()=>{
    for( let pattern of winpattern)
    {
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!="")
        if(posval1===posval2 && posval2===posval3)
        {
            showwinner(posval1);
        }else if(box=count){
            Msg.innerText="Game Is Draw";
            msgcontainer.classList.add("hide");


        }
        }
}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);









