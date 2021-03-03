

const dino = document.getElementById("dino");
function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        },300);
    }

}

let isAlive = setInterval(function(){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")) ;
    let cactusposition = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) ;
    console.log(cactusposition);
if(cactusposition<50 && cactusposition >0 && dinoTop >=140 ){
    alert('Game Over');
}

  },10);

document.addEventListener("keydown",function(event){
    jump();

});