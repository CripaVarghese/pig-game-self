//  < >  ()=>{}

const player0=document.getElementById("name-0");
const player1=document.getElementById("name-1");
const score0=document.getElementById("score-0");
const score1=document.getElementById("score-1");
const current0=document.getElementById("current-0");
const current1=document.getElementById("current-1");
const btnRoll=document.querySelector(".btn-roll");
const btnHold=document.querySelector(".btn-hold");

const dice1=document.getElementById("dice-1");
// const score1=document.getElementById("score-1");
// const score1=document.getElementById("score-1");

//default
var currentScore0=0;
var currentScore1=0;
var totalScore0=0;
var totalScore1=0;
dice1.style.display="none";
current0.innerHTML=0;
current1.innerHTML=0;
score0.innerHTML=0;
score1.innerHTML=0;      

const roll= () => {
    btnRoll.addEventListener("click", ()=>{
            const diceNumber=Math.floor(Math.random()*6+1);
            dice1.src=`dice-${diceNumber}.png`;
            dice1.innerHTML=`dice-${diceNumber}.png`;        
            dice1.style.display="block";    
            console.log("hii");
    });
};
roll();

const firstPlayer = (dice) => {
    

    if (dice!=1) {
        currentScore0=currentScore0+dice;
        current0.innerHTML=currentScore0;
        console.log(currentScore0);
        
        btnHold.addEventListener("click", ()=>{
            console.log(currentScore0);        
            score0.innerHTML=currentScore0;        
            current0.innerHTML=0;
            secondPlayer();
        });
    } else if(diceNumber==1) {
        score0.innerHTML=0;        
        current0.innerHTML=0;
        secondPlayer();
    }
   
};

firstPlayer();
 

// const secondPlayer = (dice) => {
//     if (dice!=1) {
//         currentScore1=currentScore1+dice;
//         current1.innerHTML=currentScore1;
//         console.log(currentScore1);
        
//         btnHold.addEventListener("click", ()=>{
//             console.log(currentScore1);        
//             score1.innerHTML=currentScore1;        
//             current1.innerHTML=0;
//             secondPlayer();
//         });
//     } else if(dice==1) {
//         score1.innerHTML=0;        
//         current1.innerHTML=0;
//         secondPlayer();
//     };

//  };



















//initial values

// let name =[0,1];
