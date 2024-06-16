var timer = 60;
var score = 0;
var hitrn = 0;

// Jispe click karoge wo element par event raise hoga,aur event listener naa milne pr event ke parent par listener dhundega ,waha bhi na milne par  event parent ke parent par listener dhundega 

function InceaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter = "";

for(var i=1;i<=96;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    

}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h2>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        InceaseScore();
        makeBubble();
        getNewHit();
    }
    

})

runTimer();
makeBubble();
getNewHit();

