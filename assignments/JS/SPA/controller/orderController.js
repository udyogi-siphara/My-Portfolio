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

$('#btnAddToCart').click(function (){
   let itmCode = $('#itemCodeOrd').val();
   let itmName = $('#itemNameOrd').val();
   let itmPrice = $('#itemPriceOrd').val();
   let orderQty = $('#orderQty').val();
   let total = itmPrice * orderQty;

   var orderItm = {
       ordItmId : itmCode,
       orItmName : itmName,
       orItmPrice : itmPrice,
       ordQty : orderQty,
       ordTotal : total
   }

   tempAddToCart.push(orderItm);
   addToCart();
   console.log(tempAddToCart);
});

/*FUNCTION*/
function addToCart(){
    $("#tblAddToCart> tr").detach();
    for (var i of tempAddToCart){
        $('#tblAddToCart').append('<tr><td>'+i.ordItmId+'</td>'+'<td>'+i.orItmName+'</td>'+'<td>'+i.orItmPrice+'</td>'+'<td>'+i.ordQty+'</td>'+'<td>'+i.ordTotal+'</td></tr>');
    }
}