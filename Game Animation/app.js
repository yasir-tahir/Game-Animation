var adonPosition = 20;
var adonForward = false;
var adonBackward = false;
var adonFight = false;
var adonJump = false;
var adonDown = false;

var hanzuPosition = 20;
var hanzuForward = false;
var hanzuBackward = false;
var hanzuFight = false;
var hanzuJump = false;
var hanzuDown = false;


var adon = document.getElementById('adon');
var hanzu = document.getElementById('hanzu');

function movehanzu(type) {
    
    
    if (type === 'hanzuForward') {
        hanzuBackward = false;
        hanzuPosition += 5;
        hanzu.style.right = hanzuPosition + 'px'
        if (!hanzuForward) {
            hanzu.src = "images/hanzu-back.gif";
        }
        hanzuForward = true;
        
    }

    if (type === 'hanzuBackward') {
        hanzuForward = false;
        hanzuPosition -= 5;
        hanzu.style.right = hanzuPosition + 'px'
        if (!hanzuBackward) {
            hanzu.src = "images/hanzu-back.gif";
        }
        hanzuBackward = true;
        
    }
    if(type === "hanzuFight") {
        if (!hanzuFight) {
            hanzu.src = "images/hanzu-fight.gif";
        }
        hanzuFight = true;
    }
    if(type === "hanzuJump") {
        if (!hanzuJump) {
            hanzu.src = "images/hanzu-jump.gif";
        }
        hanzuJump = true;
    }
    if(type === "hanzuDown") {
        if (!hanzuDown) {
            hanzu.src = "images/hanzu-down.gif";
        }
        hanzuDown = true;
    }
}


function moveadon(type) {
    
    
    if (type === 'adonForward') {
        adonBackward = false;
        adonPosition += 5;
        adon.style.left = adonPosition + 'px'
        if (!adonForward) {
            adon.src = "images/adon-go.gif";
        }
        adonForward = true;
        
    }

    if (type === 'adonBackward') {
        adonForward = false;
        adonPosition -= 5;
        adon.style.left = adonPosition + 'px'
        if (!adonBackward) {
            adon.src = "images/adon-back.gif";
        }
        adonBackward = true;
        
    }
    if(type === " ") {
        if (!adonFight) {
            adon.src = "images/adon-fight.gif";
        }
        adonFight = true;
    }
    if(type === "adonJump") {
        if (!adonJump) {
            adon.src = "images/adon-jump.gif";
        }
        adonJump = true;
    }
    if(type === "adonDown") {
        if (!adonDown) {
            adon.src = "images/adon-down.gif";
        }
        adonDown = true;
    }
}


function action(event) {
    console.log(event.key)
    if(event.key === 'd') {
        moveadon("adonForward");
    }
    else if (event.key === 'a') {
        moveadon("adonBackward");
    }
    else if (event.key === " ") {
        moveadon(" ");
    }
    else if (event.key === 'w') {
        moveadon("adonJump");
    }
    else if (event.key === "s") {
        moveadon("adonDown");
    }
    else if (event.key === 'ArrowLeft') {
        movehanzu("hanzuForward");
    }
    else if (event.key === "ArrowRight") {
        movehanzu("hanzuBackward");
    }
    else if (event.key === "Enter") {
        movehanzu("hanzuFight");
    }
    else if (event.key === "ArrowUp") {
        movehanzu("hanzuJump");
    }
    else if (event.key === "ArrowDown") {
        movehanzu("hanzuDown");
    }

}



window.addEventListener('keydown', action);


function resetAction() {
    adon.src = "images/adon.gif";
    hanzu.src = "images/hanzu.gif";

    adonForward = false;
    adonBackward = false;
    adonFight = false;
    adonJump = false;
    adonDown = false;

    hanzuForward = false;
    hanzuBackward = false;
    hanzuFight = false;
    hanzuJump = false;
    hanzuDown = false;

}

window.addEventListener('keyup', resetAction)










