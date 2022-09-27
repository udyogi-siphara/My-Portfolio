let curNum = null;
let previousNum = null;
let tempValue = null;
let operator = null;

$('#calNumber0').click(function (){
   $('#calCurrentNumber').text("0");

   if (!(curNum===null || curNum==="0")){
       curNum += "0";
       $('#calCurrentNumber').text(curNum);
   }

});

$('#calNumber1').click(function (){
    $('#calCurrentNumber').text("1");

    if (curNum===null){
        curNum = "1";
    }else{
        curNum += "1";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber2').click(function (){
    $('#calCurrentNumber').text("2");

    if (curNum===null){
        curNum = "2";
    }else{
        curNum += "2";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber3').click(function (){
    $('#calCurrentNumber').text("3");

    if (curNum===null){
        curNum = "3";
    }else{
        curNum += "3";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber4').click(function (){
    $('#calCurrentNumber').text("4");

    if (curNum===null){
        curNum = "4";
    }else{
        curNum += "4";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber5').click(function (){
    $('#calCurrentNumber').text("5");

    if (curNum===null){
        curNum = "5";
    }else{
        curNum += "5";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber6').click(function (){
    $('#calCurrentNumber').text("6");

    if (curNum===null){
        curNum = "6";
    }else{
        curNum += "6";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber7').click(function (){
    $('#calCurrentNumber').text("7");

    if (curNum===null){
        curNum = "7";
    }else{
        curNum += "7";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber8').click(function (){
    $('#calCurrentNumber').text("8");

    if (curNum===null){
        curNum = "8";
    }else{
        curNum += "8";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calNumber9').click(function (){
    $('#calCurrentNumber').text("9");

    if (curNum===null){
        curNum = "9";
    }else{
        curNum += "9";
    }
    $('#calCurrentNumber').text(curNum);
});

$('#calClear').click(function (){
    $('#calCurrentNumber').text("0");
    curNum=null;
    $('#calPreviousNumber').text("0");
    previousNum=null;
    tempValue=0;
});

/*Functions*/
let addCount = 0;
$('#calAdd').click(function (){
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " + ");
            previousNum = (curNum + " + ");
            clearCurrNum();
        } else {
            previousNum = previousNum + (curNum + " + ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
        let preNumArray = previousNum.split(" + ");
        if(addCount<1){
            /*if this is first time*/
            if(preNumArray.length>2){
                tempValue=parseFloat(preNumArray[0])+parseFloat(preNumArray[1]);
                $('#calCurrentNumber').text(tempValue.toString());
                addCount=1;
            }
        }else{ //if this Second or higher time
            tempValue+=parseFloat(typedText);
            $('#calCurrentNumber').text(tempValue.toString());
        }
    }
});

$('#calSub').click(function (){
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " - ");
            previousNum = (curNum + " - ");
            clearCurrNum();
        } else {
            previousNum = previousNum + (curNum + " - ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
    }

});

$('#calDivide').click(function (){
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " / ");
            previousNum = (curNum + " / ");
            clearCurrNum();
        } else {
            previousNum = previousNum + (curNum + " / ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
    }

});

$('#calMulti').click(function (){
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " * ");
            previousNum = (curNum + " * ");
            clearCurrNum();
        } else {
            previousNum = previousNum + (curNum + " * ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
    }

});

$('#calEqual').click(function (){
    let tempPreviousIndex = $('#calPreviousNumber').text();;
    let tempCurrentIndex = $('#calCurrentNumber').text();

    if (operator === "+"){
        tempValue = parseInt(tempPreviousIndex)  +  parseInt(tempCurrentIndex);
        console.log(tempValue);
    }else if (operator === "-"){
        tempPreviousIndex = previousNum;
        tempCurrentIndex = curNum;
        tempValue = parseInt(tempPreviousIndex)  -  parseInt(tempCurrentIndex);
    }
    $('#calCurrentNumber').text(tempValue);
    clearPreNum();
});

$('#calDot').click(function (){
    let tempCurrentIndex = $('#calCurrentNumber').text();
    if (!(tempCurrentIndex.includes('.'))){
        if(curNum!==null){
            curNum+=".";
            $('#calCurrentNumber').text(curNum);
        }else{
            curNum="0.";
            $('#calCurrentNumber').text(curNum);
        }
    }else if (tempCurrentIndex.includes('.')){

    }
});








/*Methods*/
function clearCurrNum(){
    $('#calCurrentNumber').text("0");
    curNum=null;
}

function clearPreNum(){
    $('#calPreviousNumber').text("0");
    previousNum=null;
}