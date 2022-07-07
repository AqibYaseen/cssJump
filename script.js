let enemy =document.getElementById("enemy");
let jumpAudio = document.querySelector("#jumpAudio");
let deathAudio = document.querySelector("#deathSound");
let blood = document.querySelector("#blood");
let players = document.querySelector("#players");
blood.style.display="none";
let score=0;

document.querySelector("#mute").addEventListener("click",function(){
    document.querySelector("#bgAudio").pause();
});
document.querySelector("#start").addEventListener("click",function(){
    document.querySelector("#enemy").classList.add("enemyAnim");
    blood.style.display="none";
    document.querySelector("#gameOver").style.display="none";
    
});

document.getElementById("jump").addEventListener("click",()=>{

    if(document.getElementById("player").classList != "jump"){
    document.getElementById("player").classList.add("jump");
    jumpAudio.play();
    // console.log(document.getElementById("player").getBoundingClientRect());
    // console.log(document.getElementById("enemy").getBoundingClientRect());
}
    setTimeout(() => {
        document.getElementById("player").classList.remove("jump");
       
        
    }, 1000);
});
// setInterval(() => {
//     score();
// }, 100);
// function score(){
//     score++;
//     document.querySelector("#score").innerHTML = `Score : ${score}`
// }

setInterval(() => {
    
    document.querySelector("#position").innerHTML=` Enemy  ${parseInt(window.getComputedStyle(enemy).getPropertyValue("left"))}`;
    document.querySelector("#position").innerHTML+=` <br/> player ${parseInt(window.getComputedStyle(document.querySelector("#player")).getPropertyValue("top"))}`;
    // document.querySelector("#position").innerHTML+=document.getElementById("player").getBoundingClientRect().left;

    //    document.write()
    // if( < 100 && parseInt(window.getComputedStyle(document.querySelector("#player").getPropertyValue("top")) > 350)){
        let enemyL = parseInt(window.getComputedStyle(document.querySelector("#enemy")).getPropertyValue("left"));
        let playerL = parseInt(window.getComputedStyle(document.querySelector("#player")).getPropertyValue("top"));
        // console.clear();
        // console.log(enemyL , playerL);
        if(enemyL < 100 && playerL > 250){
            enemy.classList.remove("enemyAnim");
            deathAudio.play();
            blood.style.display="inline-block"
        document.querySelector("#gameOver").style.display="inline-block";

            // document.querySelector("#canvas").style.backgroundColor="red";
            document.querySelector("h3").innerText="Game Over!!";
            document.querySelector("#player").classList.remove("jump");
        return;
    }}, 1);
    
    players.addEventListener("click",function (e){
        console.log(document.getElementById("player")); 
        document.getElementById("player").src= e.target.src;
    });
 