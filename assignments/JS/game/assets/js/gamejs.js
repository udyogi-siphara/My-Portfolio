var boy = document.getElementById('boy');
let  idelImageNum = 1;
let idelanimationNum = 0;

/*BREATHING boy*/
/*restartGame();*/
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

        if (barrAnimationId === 0){
            barrAnimationId = setInterval(barrAnimation,100);
        }

    }



    if (event.key === 'ArrowUp'){
        if (jumpAnimNum === 0){
            jumpAnimationstart();
        }
        if (moveBackgrdAniId === 0){
            moveBackgrdAniId = setInterval(moveBackground,100);
        }

        if (barrAnimationId === 0){
            barrAnimationId = setInterval(barrAnimation,100);
        }

    }
}

/*MOVE boy*/
let backgrounImagePostionX = 0;
let moveBackgrdAniId = 0;

/*SCORE line*/
var score = 0;
var level = 1;


function moveBackground(){

    backgrounImagePostionX = backgrounImagePostionX - 20;

    document.getElementById('background').style.backgroundPositionX = backgrounImagePostionX + "px";

    score = score +1;
    document.getElementById('score').innerHTML = score;


    level2();


    /*if (score === 50){
        var modal2 = document.getElementById('gameCompleteModal');
        modal2.style.display = 'block';
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
    }*/
}

/*JUMP boy*/

let jumpAnimNum = 0;
let jumpImageNum = 1;
let boyMarginTop = 390;

 function jumpAnimation(){
     jumpImageNum = jumpImageNum + 1;

     if(jumpImageNum <= 6){
         boyMarginTop = boyMarginTop - 55;
         boy.style.marginTop = boyMarginTop + "px";
     }

     if (jumpImageNum >= 7){
         boyMarginTop = boyMarginTop + 55;
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

 /*BARRIERS*/

let barrMarginLeft = 1540;

function createBarriers(){

    for (var i=0; i<=10; i++){
        var barr = document.createElement('div');
        barr.className = 'barr';
        document.getElementById("background").appendChild(barr);
        barr.style.marginLeft = barrMarginLeft + "px";
        barr.id = "barr"  + i;

        /*barrMarginLeft = barrMarginLeft + 500;*/

        if (i<5){
            barrMarginLeft = barrMarginLeft + 2000;
        }

        if (i>=5){
            barrMarginLeft = barrMarginLeft + 1000;
        }

    }
}

var barrAnimationId = 0;
 function barrAnimation(){
     for (var i =0; i<10; i++){
         var barr = document.getElementById('barr'+i);
         var currentMarginLeft = getComputedStyle(barr).marginLeft;
         var newMargingLeft = parseInt(currentMarginLeft)-35;
          barr.style.marginLeft = newMargingLeft+"px";

         if(newMargingLeft >= -100 & newMargingLeft <= 100){

             if (boyMarginTop > 300){
                 clearInterval(barrAnimationId);

                 clearInterval(runAimatioNumber);
                 runAimatioNumber = -1;

                 clearInterval(jumpAnimNum);
                 jumpAnimNum = -1;

                 clearInterval(moveBackgrdAniId);
                 moveBackgrdAniId = -1;

                deadAnimNum =  setInterval(boyDeathAnim,100);
             }
         }
     }
 }

 /*DEATH boy*/

let deadImageNum = 1;
let deadAnimNum = 0;

function boyDeathAnim(){

    deadImageNum = deadImageNum + 1;

    if (deadImageNum === 11){
        deadImageNum = 10;
    }

    boy.src = "assets/image/Dead("+deadImageNum+").png";

    var modal = document.getElementById('gameOverModal');
    modal.style.display = 'block';
}


/*Game Over*/
$('#restartbutton').click(function (){
    location.reload();
});

/*LEVEL 2*/

function level2(){
    if (score === 10){
        /*var modal2 = document.getElementById('gameCompleteModal');
        modal2.style.display = 'block';*/
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
        if (level === 2){
            document.getElementById('levelTransitionModal').style.display = 'block';
           clearInterval(barrAnimationId);
           clearInterval(runAimatioNumber);
            clearInterval(moveBackgrdAniId);

        }
    }
    if (score === 20){
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
        if (level === 3){
            document.getElementById('levelTransitionModal').style.display = 'block';
            clearInterval(barrAnimationId);
            clearInterval(runAimatioNumber);
            clearInterval(moveBackgrdAniId);

        }
    }

    if (score === 30){
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
        if (level === 4){
            document.getElementById('gameCompleteModal1').style.display = 'block';
            clearInterval(barrAnimationId);
            clearInterval(runAimatioNumber);
            clearInterval(moveBackgrdAniId);

        }
    }
}

$('#levelGo').click(function (){
    document.getElementById('levelTransitionModal').style.display = 'none';
    barrAnimationId = setInterval(barrAnimation,100);
    /*runAimatioNumber = setInterval(runanimation,100);*/
    moveBackgrdAniId = setInterval(moveBackground,100);
});

$('#restartButton1').click(function (){
    location.reload();
});





