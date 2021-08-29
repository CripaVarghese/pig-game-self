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
let currentScore0=0;
let currentScore1=0;
let totalScore0=0;
let totalScore1=0;
dice1.style.display="none";
current0.innerHTML=0;
current1.innerHTML=0;
score0.innerHTML=0;
score1.innerHTML=0;      

// const roll= () => {
   
// };
// roll(diceNumber);

const firstPlayer = () => {
    
    btnRoll.addEventListener("click", ()=>{
        const diceNumber=Math.floor(Math.random()*6+1);
        dice1.src=`dice-${diceNumber}.png`;
        dice1.innerHTML=`dice-${diceNumber}.png`;        
        dice1.style.display="block";    

        currentScore1=0;
                current1.innerHTML=currentScore1;
                console.log(totalScore1);
        
        if (diceNumber!=1) {
            // console.log(currentScore0)
            currentScore0=currentScore0+diceNumber;
            // console.log(currentScore0)
            current0.innerHTML=currentScore0;
            // console.log(currentScore0)
            
            btnHold.addEventListener("click", ()=>{
                totalScore0=totalScore0+currentScore0;
                score0.innerHTML=totalScore0; 
                console.log(totalScore0)       
                currentScore0=0;
                current0.innerHTML=currentScore0;

                currentScore1=0;
                current1.innerHTML=currentScore1;
                console.log(currentScore1)
                secondPlayer();
                
                
            });
        } 
        // else if(diceNumber==1) {
        //     currentScore0=0;
        //     current0.innerHTML=currentScore0;
        //     totalScore0=0
        //     score0.innerHTML=totalScore0;        
            
        //     secondPlayer();
        // }
    }); 
};

firstPlayer();
 
const secondPlayer = () => {
    dice1.style.display="none";

    currentScore1=0;
                current1.innerHTML=currentScore1;
    
    btnRoll.addEventListener("click", ()=>{
        const diceNumber=Math.floor(Math.random()*6+1);
        dice1.src=`dice-${diceNumber}.png`;
        dice1.innerHTML=`dice-${diceNumber}.png`;        
        dice1.style.display="block";    

        currentScore0=0;
        current0.innerHTML=currentScore0;

        console.log(currentScore1)

        
        if (diceNumber!=1) {

            
            console.log(currentScore1)
            console.log(diceNumber);
            currentScore1=currentScore1+diceNumber;
            console.log(diceNumber)
            console.log(currentScore1)
            current1.innerHTML=currentScore1;
            
            btnHold.addEventListener("click", ()=>{
                totalScore1=totalScore1+currentScore1;
                score1.innerHTML=totalScore1; 
                console.log()       
                currentScore1=0;
                current1.innerHTML=currentScore1;

                firstPlayer();
            });
        } 
        // else if(diceNumber==1) {
        //     currentScore1=0;
        //     current1.innerHTML=currentScore1;
        //     totalScore1=0
        //     score1.innerHTML=totalScore1;        
            
        //     firstPlayer();
        // }
    }); 
};


















