let curNum = null;
let previousNum = null;
let tempValue = null;
let previousNoArray=[];

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
    tempValue=null;
});

/*Functions*/
let addCount = 0;
let prn=null;
let countAddBtnClick=0;
$('#calAdd').click(function (){
    countAddBtnClick++;
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        previousNoArray.push(curNo);
        previousNoArray.push(" + ");
        clearCurrNum();
        /*if (previousNum === "0" || previousNum === null) {
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
            /!*if this is first time*!/
            if(preNumArray.length>2){
                tempValue=parseFloat(preNumArray[0])+parseFloat(preNumArray[1]);
                $('#calCurrentNumber').text(tempValue.toString());
                addCount=1;
            }
        }else{ //if this Second or higher time
            tempValue+=parseFloat(typedText);
            $('#calCurrentNumber').text(tempValue.toString());
        }*/

        if(addCount===0){ //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount=1;
            prn=typedText;
        }else{ //if isn't first time
            prn='';
            for(let i=0;i<previousNoArray.length;i++){
                prn=prn+previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if(previousNoArray.length>2){

            //calculate
            allCalc();

        }
    }

    //for change the Operator when btn click
    if(countAddBtnClick>2){
        previousNoArray[previousNoArray.length-1]=" + ";
        prn='';
        for(let i=0;i<previousNoArray.length;i++){
            prn=prn+previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }
});

let miniCount = 0;
$('#calSub').click(function (){
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " - ");

            previousNoArray.push(curNum);
            previousNoArray.push(" - ");

            previousNum = (curNum + " - ");
            clearCurrNum();
        } else {
            previousNoArray.push(curNum);
            previousNoArray.push(" - ");

            previousNum = previousNum + (curNum + " - ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
        let preNumArray = previousNum.split(" - ");

        if(miniCount<1){
            /*if this is first time*/
            if(preNumArray.length>2){
                tempValue=parseFloat(preNumArray[0])-parseFloat(preNumArray[1]);
                $('#calCurrentNumber').text(tempValue.toString());
                miniCount=1;
            }
        }else{ //if this Second or higher time

            if(tempValue !== null){
                tempValue -= parseFloat(typedText);
                $('#calCurrentNumber').text(tempValue.toString());
            }else{
                tempValue=typedText;
                $('#calCurrentNumber').text(tempValue.toString());
            }
        }
    }
});

let divideCount = 0;
$('#calDivide').click(function (){
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " / ");

            previousNoArray.push(curNum);
            previousNoArray.push(" / ");

            previousNum = (curNum + " / ");
            clearCurrNum();
        } else {
            previousNoArray.push(curNum);
            previousNoArray.push(" / ");

            previousNum = previousNum + (curNum + " / ");
            $('#calPreviousNumber').text(previousNum);

            clearCurrNum();
        }
        let preNumArray = previousNum.split(" / ");

        if(divideCount<1){
            /*if this is first time*/
            if(preNumArray.length>2){
                tempValue=(parseFloat(preNumArray[0])/parseFloat(preNumArray[1])).toFixed(2);
                $('#calCurrentNumber').text(tempValue.toString());
                divideCount=1;
            }
        }else{ //if this Second or higher time
            if (tempValue!==null){
                tempValue/=parseFloat(typedText).toFixed(2);
                $('#calCurrentNumber').text((tempValue.toFixed(2)).toString());
            }else{
                tempValue = typedText;
                $('#calCurrentNumber').text(tempValue.toString());
            }
        }
    }

});

let multiCount=0;
$('#calMulti').click(function (){
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        if (previousNum === "0" || previousNum === null) {
            $('#calPreviousNumber').text(curNum + " * ");

            previousNoArray.push(curNum);
            previousNoArray.push(" * ");

            previousNum = (curNum + " * ");
            clearCurrNum();
        } else {
            previousNoArray.push(curNum);
            previousNoArray.push(" * ");

            previousNum = previousNum + (curNum + " * ");
            $('#calPreviousNumber').text(previousNum);
            clearCurrNum();
        }
    }

});

$('#calEqual').click(function (){
    let typedText=$('#calCurrentNumber').text();
    if (tempValue === null){
        operator = previousNum.charAt(parseInt(previousNum.length-2));

        let prevNum =  previousNum.split(""+operator+"");
        let firstNum = prevNum[0];

        equalLogics(firstNum,typedText,operator);
        $('#calCurrentNumber').text(tempValue);

    }else{
        $('#calCurrentNumber').text(tempValue);
    }

    curNum=null
    previousNum=null;
    tempValue=null;
    $('#calPreviousNumber').text("0");
});

$('#calDot').click(function (){
    let tempCurrentIndex = $('#calCurrentNumber').text();

    /*Search . is in the Word*/
    if (!tempCurrentIndex.includes('.')) {
        if (curNum !== null) {
            curNum += ".";
            $("#calCurrentNumber").text(curNum);
        } else {
            curNum = "0.";
            $("#calCurrentNumber").text(curNum);
        }
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

function equalLogics(numb1,numb2,operator){
    if (operator === "+"){
        tempValue = parseFloat(numb1)  +  parseFloat(numb2);
        console.log(tempValue);
    }else if (operator === "-"){
        tempValue = parseFloat(numb1)  -  parseFloat(numb2);
    }else if (operator === "/"){
        tempValue = parseFloat(numb1)  /  parseFloat(numb2);
    }else if (operator === "*"){
        tempValue = parseFloat(numb1)  *  parseFloat(numb2);
    }
}

function allCalc (){

}