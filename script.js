let enemy =document.getElementById("enemy");

document.getElementById("player").addEventListener("click",()=>{

    if(document.getElementById("player").classList != "jump"){
    document.getElementById("player").classList.add("jump");
    // console.log(document.getElementById("player").getBoundingClientRect());
    // console.log(document.getElementById("enemy").getBoundingClientRect());
}
    setTimeout(() => {
        document.getElementById("player").classList.remove("jump");
    }, 1000);
});
setInterval(() => {
    document.querySelector("#position").innerHTML=` Enemy  ${parseInt(window.getComputedStyle(enemy).getPropertyValue("left"))}`;
    document.querySelector("#position").innerHTML+=` <br/> player ${parseInt(window.getComputedStyle(document.querySelector("#player")).getPropertyValue("top"))}`;
    // document.querySelector("#position").innerHTML+=document.getElementById("player").getBoundingClientRect().left;

    //    document.write()
    // if( < 100 && parseInt(window.getComputedStyle(document.querySelector("#player").getPropertyValue("top")) > 350)){
        let enemyL = parseInt(window.getComputedStyle(document.querySelector("#enemy")).getPropertyValue("left"));
        let playerL = parseInt(window.getComputedStyle(document.querySelector("#player")).getPropertyValue("top"));
        console.clear();
        console.log(enemyL , playerL);
        if(enemyL < 100 && playerL > 350){
            enemy.classList.remove("enemyAnim");
            document.querySelector("#canvas").style.backgroundColor="red";
            document.querySelector("h3").innerText="Game Over!!";
            document.querySelector("#player").classList.remove("jump");
        return;
    }}, 1);
    

    function reload(){
        window.location.reload();
    }
