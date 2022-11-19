var boy = document.getElementById('boy');
let  idelImageNum = 1;
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

runImageNumder = 1;
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
    console.log(event.key);
    if (event.key === 'Enter'){
        if (runAimatioNumber === 0){
            runAnimationstart();
        }
        if (moveBackgrdAniId === 0){
            moveBackgrdAniId = setInterval(moveBackground,100);
        }
    }



    if (event.key === 'ArrowUp'){
        if (jumpAnimNum === 0){
            jumpAnimationstart();
        }
        if (moveBackgrdAniId === 0){
            moveBackgrdAniId = setInterval(moveBackground,100);
        }

    }
}

/*MOVE boy*/
let backgrounImagePostionX = 0;
let moveBackgrdAniId = 0;

function moveBackground(){

    backgrounImagePostionX = backgrounImagePostionX - 20;

    document.getElementById('background').style.backgroundPositionX = backgrounImagePostionX + "px";
}

/*JUMP boy*/

let jumpAnimNum = 0;
let jumpImageNum = 1;
let boyMarginTop = 408;

 function jumpAnimation(){
     jumpImageNum = jumpImageNum + 1;

     if(jumpImageNum <= 6){
         boyMarginTop = boyMarginTop - 20;
         boy.style.marginTop = boyMarginTop + "px";
     }

     if (jumpImageNum >= 7){
         boyMarginTop = boyMarginTop + 20;
         boy.style.marginTop = boyMarginTop + "px";
     }

     if (jumpImageNum === 11){
         jumpImageNum = 1;
         clearInterval(jumpAnimNum);
         jumpAnimNum = 0;
         runImageNumder=0;
         runAnimationstart();
     }

     boy.src = "assets/image/Jump("+jumpImageNum+").png";
 }

 function jumpAnimationstart(){
     clearInterval(idelanimationNum);
     runImageNumder=0;
     clearInterval(runAimatioNumber);
     jumpAnimNum=setInterval(jumpAnimation,100);
 }






