ludogame=()=>{

const player1 = Math.floor(Math.random()*6) + 1
const player1Dice = `images/dice${player1}.jpg`;
document.getElementById("check1").setAttribute('src',player1Dice);  

// line3 pe random number generate kar die ab uss number ko image pe changer karna hai randomly
// toh hum line4 uss image pe de die random number jaha generate ho raha tha then line5 ab wo image ko select karna hai aur 
// uske andr sab daalna hai matlab set karna hai

// if humne player1 ka random wala player 2 ko de die toh same op aaega {player1} ye 


const player2 = Math.floor(Math.random()*6) + 1
const player2Dice = `images/dice${player2}.jpg`;


// line 10 me hume kaise bhi karke usss image me ghusna hai toh humne uski ek id de di aur uss id ki help se
// hum uss image ko access karenge setAttribute(name:usske attribute ka jisko select kie hai, value)
//aur attribute matlab jaise img hai uske andr src hai 
//input hai uske andr type="text" jo type hai wo attribute hai


document.getElementById("check2").setAttribute('src',player2Dice);  
if(player1>player2)
{
    document.querySelector("h1").innerHTML="Player1 won:)"
}
else if(player1<player2)
{
    document.querySelector("h1").innerHTML="Player2 won:)"
}
else{
    document.querySelector("h1").innerHTML="tie"
}

}
