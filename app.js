let box = document.getElementById("box")

let position = 0

function movecube(){
    position = position+ 20;
    box.style.left = position + "px";

    if (position >= innerWidth){
        position = 0;
    }
}

setInterval(movecube,100);