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
        previousNoArray.push(curNum);
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
let prnMin = null;
let countMinBtnClick = 0;
$('#calSub').click(function (){
    countMinBtnClick++;
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        previousNoArray.push(curNum);
        previousNoArray.push(" - ");

        clearCurrNum();

        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }
        /*if (previousNum === "0" || previousNum === null) {
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
            /!*if this is first time*!/
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
        }*/
    }

    if (countMinBtnClick > 2) {
        console.log("Changed sum + to -")
        previousNoArray[previousNoArray.length - 1] = " - ";
        console.log("What is Last Index "+previousNoArray[previousNoArray.length-1]);
        prn = '';
        for (let i = 0; i < previousNoArray.length; i++) {
            prn = prn + previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }
});

let divideCount = 0;
let divCount = 0;
let countDivBtnClick = 0;
$('#calDivide').click(function (){
    countDivBtnClick++;
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        previousNoArray.push(curNum);
        previousNoArray.push(" / ");

        clearCurrNum();

        /*if (previousNum === "0" || previousNum === null) {
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
            /!*if this is first time*!/
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
        }*/

        //for the display previous number
        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }
    }

    //for the display previous number
    if (addCount === 0) { //if is first time
        $('#calPreviousNumber').text(typedText);
        addCount = 1;

    } else { //if isn't first time
        prn = '';
        for (let i = 0; i < previousNoArray.length; i++) {
            prn = prn + previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }

    //value calculate if the array have more than two values
    if (previousNoArray.length > 2) {

        //calculate
        allCalc();

    }

});

let multiCount=0;
let MultiCount = 0;
let countMultiBtnClick = 0;
$('#calMulti').click(function (){
    countMultiBtnClick++;
    let typedText=$('#calCurrentNumber').text();
    if(curNum!==null){
        previousNoArray.push(curNum);
        previousNoArray.push(" * ");

        clearCurrNum();

        /*if (previousNum === "0" || previousNum === null) {
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
        }*/

        //for the display previous number
        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }
    }

    if (countDivBtnClick > 2) {
        console.log("Changed all  to *")
        previousNoArray[previousNoArray.length - 1] = " * ";
        prn = '';
        for (let i = 0; i < previousNoArray.length; i++) {
            prn = prn + previousNoArray[i]
        }
        $('#calPreviousNumber').text(prn);
    }

    /*let preNumArray = previousNum.split(" * ");

    /!*if this is first time*!/
    if(multiCount<1){
        /!*if this is first time*!/
        if(preNumArray.length>2){
            tempValue=parseFloat(preNumArray[0])*parseFloat(preNumArray[1]);

            $('#calCurrentNumber').text(tempValue.toString());
            multiCount=1;
        }
    }else{ //if this Second or higher time

        if(tempValue!==null){ //Check answer null cuz set value for after the clear answer's value
            tempValue*=parseFloat(typedText);
            $('#calCurrentNumber').text(tempValue.toString());

        }else{
            //come to this ,
            //Added value and multiply values Continuously and After the first clear.comes to this.

            tempValue=typedText; //ignore answer  text and assign typed value.
            $('#calCurrentNumber').text(tempValue.toString());
        }
    }*/
});

$('#calEqual').click(function (){
    let typedText = $('#calCurrentNumber').text();

    if (curNum !== null) {

        previousNoArray.push(curNum);
        previousNoArray.push("   ");
        clearCurrNum();

        //for the display previous number
        if (addCount === 0) { //if is first time
            $('#calPreviousNumber').text(typedText);
            addCount = 1;

        } else { //if isn't first time
            prn = '';
            for (let i = 0; i < previousNoArray.length; i++) {
                prn = prn + previousNoArray[i]
            }
            $('#calPreviousNumber').text(prn);
        }

        //value calculate if the array have more than two values
        if (previousNoArray.length > 2) {

            //calculate
            allCalc();

        }
    }
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
    $('#calCurrentNumber').text("");
    curNum=null;
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

let clickCount=0;
let newAns=null;
function allCalc() {
    let tempAns=null;
    let anotherValues=0;

    if(clickCount===0){ //for first two Number
        let no1=previousNoArray[0];
        let no2=previousNoArray[2];
        let operator=previousNoArray[1];

        // console.log("no 1-"+no1+" no2-"+no2+" operator-"+operator);

        /*========Search Operator=======*/
        if(operator===" + "){
            tempAns=parseFloat(no1)+parseFloat(no2);
        }else if(operator===" - "){
            tempAns=parseFloat(no1)-parseFloat(no2);
        }else if(operator===" / "){
            tempAns=parseFloat(no1)/parseFloat(no2);
        }else if(operator===" * "){
            tempAns=parseFloat(no1)*parseFloat(no2);
        }
        newAns=tempAns;

        clickCount=1;
    }

    //iterate and get all values of the array

    console.log("newAns"+newAns);
    let tempNewAns=0;

    let checkFTime=0;
    for(let i=3;i<previousNoArray.length;i++){
        // console.log("Array values "+previousNoArray[i]);

        if(i<previousNoArray.length-2){
            //Search Operators in the array
            if(previousNoArray[i]===" + "){
                // console.log("new Ans->"+newAns+"  want to added =>"+previousNoArray[i+1]);

                //first time (need to added newAns only one time)
                if(checkFTime===0){
                    tempNewAns=newAns+parseFloat(previousNoArray[i+1]);
                    checkFTime=1;

                }else{ //after that want to loop the answer and array value.
                    tempNewAns=tempNewAns+parseFloat(previousNoArray[i+1]);
                }

            }else if(previousNoArray[i]===" - "){
                //first time (need to added newAns only one time)
                if (checkFTime === 0) {
                    tempNewAns = newAns - parseFloat(previousNoArray[i + 1]);
                    checkFTime = 1;

                } else { //after that want to loop the answer and array value.
                    tempNewAns = tempNewAns - parseFloat(previousNoArray[i + 1]);
                }

            }else if(previousNoArray[i]===" / "){
                //first time (need to added newAns only one time)
                if (checkFTime === 0) {
                    tempNewAns = newAns / parseFloat(previousNoArray[i + 1]);
                    checkFTime = 1;

                } else { //after that want to loop the answer and array value.
                    tempNewAns = tempNewAns / parseFloat(previousNoArray[i + 1]);
                }

            }else if(previousNoArray[i]===" * "){

            }
        }
        // console.log("else ekee I="+i+" -> "+previousNoArray[i]);

    }

    if(checkFTime===1){
        $('#calCurrentNumber').text(tempNewAns.toString());
    }else{
        $('#calCurrentNumber').text(newAns.toString());
    }

    console.log("TempNewAns "+tempNewAns);
    console.log("======================");
    // newAns=newAns+anotherValues;

    // console.log("temp ans="+newAns);
    // newAns=tempAns;

}