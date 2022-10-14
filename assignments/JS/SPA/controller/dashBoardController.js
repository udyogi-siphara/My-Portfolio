$('#btnSearchOrder').click(function (){
    for (var search of orderArray) {
        let searchOrder = $('#searchOrder').val();
        let chooseOrderType = $('#chooseOrderType').val();
        if (chooseOrderType === "Code") {

            if (searchOrder === search.ordId) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);

            }
        } else if(chooseOrderType === "1") {

            if (searchOrder === search.cusName) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);
            }
        }else if (chooseOrderType === "2"){

            if (searchOrder === search.ordDate) {
                $('#txtOrdId').val(search.ordId);
                $('#txtOrdDate').val(search.ordDate);
                $('#txtOrdName').val(search.cusName);
                $('#txtOrdDis').val(search.dis);
                $('#txtOrdCost').val(search.cost);
            }
        }
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
        let ordCost = $(this).children(':eq(3)').text();
        $('#txtOrdCost').val(ordCost);
    });
}