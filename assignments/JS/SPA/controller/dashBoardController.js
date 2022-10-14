$('#btnSearchOrder').click(function (){
    for (var search of orderArray) {
        let searchOrder = $('#searchOrder').val();
        let chooseOrderType = $('#chooseOrderType').val();
        if (chooseOrderType === "ID") {

            if (searchOrder === search.ordId) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);
                console.log("id"+search.dis+"=="+search.cost);

            }
        } else if(chooseOrderType === "1") {

            if (searchOrder === search.cusName) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);

                console.log("name"+search.dis+"=="+search.cost);
            }
        }else if (chooseOrderType === "2"){

            if (searchOrder === search.ordDate) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);

                console.log("date"+search.dis+"=="+search.cost);
            }
        }
    }
});

$('#btnClearOrd').click(function (){
    $('#txtOrdId').val("");
    $('#txtOrdDate').val("");
    $('#txtOrdName').val("");
    $('#txtOrdDis').val("");
    $('#txtOrdCost').val("");
});

$('#btnDeleteOrd').click(function (){
    let deleteOrderId = $('#txtOrdId').val();

    if (deleteOrder(deleteOrderId)){
        alert("Order Successfully Deleted....");
        setOrderTextfieldValues("", "", "", "","");
    }else{
        alert("No such Order to delete. please check the id");
    }
});






/*FUNCTIONS*/
function blindOrderRowClickEvent(){
    $('#tblOrder>tr').click(function (){
        let ordId = $(this).children(':eq(0)').text();
        $('#txtOrdId').val(ordId);
        let ordDate = $(this).children(':eq(1)').text();
        $('#txtOrdDate').val(ordDate);
        let ordName = $(this).children(':eq(2)').text();
        $('#txtOrdName').val(ordName);
        let ordDis = $(this).children(':eq(3)').text();
        $('#txtOrdDis').val(ordDis);
        let ordCost = $(this).children(':eq(4)').text();
        $('#txtOrdCost').val(ordCost);
    });
}

function searchOrder(orderId){
    for(var i of orderArray){
        if (i.ordId === orderId){
            return i;
        }
    }
    return null;
}

function deleteOrder(orderId){
    let ordObj = searchOrder(orderId);

    if (ordObj != null){
        let indexNumber = orderArray.indexOf(ordObj);
        orderArray.splice(indexNumber,1);
        loadAllOrder();
        return true;
    }else {
        return false;
    }
}

function setOrderTextfieldValues(orderId,date,name,dis,cost){
    $('#txtOrdId').val(orderId);
    $('#txtOrdDate').val(date);
    $('#txtOrdName').val(name);
    $('#txtOrdDis').val(dis);
    $('#txtOrdCost').val(cost);
}