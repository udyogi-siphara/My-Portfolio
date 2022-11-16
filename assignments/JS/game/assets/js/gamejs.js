var boy = document.getElementById('boy');
let  idelImageNum = 0;
let idelanimationNum = 0;

/*BREATHING boy*/
function idelAnimation(){

    idelImageNum = idelImageNum + 1;

    if (idelImageNum === 11){
        idelImageNum =1;
    }

    boy.src = "assets/image/Idle("+idelImageNum+").png";
}


function idelAnimationstart(){
   idelanimationNum = setInterval(idelAnimation,200);
}

runImageNumder = 0;
runAimatioNumber = 0;

function runanimation(){
    runImageNumder = runImageNumder + 1;

    if (runImageNumder === 11){
        runImageNumder = 1;
    }

    boy.src = "assets/image/Run("+runImageNumder+").png";

}

/*RUN boy*/
function runAnimationstart(){
    runAimatioNumber = setInterval(runanimation,100);
    clearInterval(idelanimationNum);
}

function keyChek(event){
    if (event.key === 'Enter'){
        if (runAimatioNumber === 0){
            runAnimationstart();
        }
    }

    if (moveBackgrdAniId === 0){
        moveBackgrdAniId = setInterval(moveBackground,100);
    }
}

/*MOVE boy*/
let backgrounImagePostionX = 0;
let moveBackgrdAniId = 0;

function moveBackground(){

    backgrounImagePostionX = backgrounImagePostionX - 20;

    document.getElementById('background').style.backgroundPositionX = backgrounImagePostionX + "px";
}


