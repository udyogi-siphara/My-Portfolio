function loadAllCustomerId(){
    $('#customerIdOrd').empty();
    for (let customerId of customerArray){
        $('#customerIdOrd').append(`<option>${customerId.id}</option>`);
    }
}

function loadAllItemCode(){
    $('#itemCodeOrd').empty();
    for (let itemCode of itemArray){
        $('#itemCodeOrd').append(`<option>${itemCode.code}</option>`);
    }
}

$('#customerIdOrd').on('change',function (){
   let customerId = searchCustomer($('#customerIdOrd').val());

    $('#customerNameOrd').val(customerId.name);
    $('#customerAddressOrd').val(customerId.address);
    $('#customerSalaryOrd').val(customerId.salary);
});

$('#itemCodeOrd').on('change',function (){
   let itemCode = searchItem($('#itemCodeOrd').val());

    $('#itemNameOrd').val(itemCode.name);
    $('#itemPriceOrd').val(itemCode.price);
    $('#itemQtyOrd').val(itemCode.qty);
});