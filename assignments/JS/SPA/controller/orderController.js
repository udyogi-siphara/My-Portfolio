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

    let rowExists = searchRowExists(itmCode);
    if(rowExists!=null) {
        let newQty = ((parseInt(rowExists.ordQty)) + (parseInt(orderQty)));

        rowExists.ordQty = newQty;
        rowExists.ordTotal = parseFloat(itmPrice) * newQty;
        addToCart();
    }else {

        var orderItm = placeOrderObject(itmCode,itmName,itmPrice,orderQty,total);

        tempAddToCart.push(orderItm);
        addToCart();
        displayTotal();
        console.log(tempAddToCart);
    }
    lessQtyOnHand();
});

$('#txtDiscount').on('keyup',function (){
   let discount =  $('#txtDiscount').val();
   let total = $('#total').val();
   let totMin = 0;
   let subTotal = 0;

    console.log(discount+"=="+total);

   totMin = parseFloat(total)*(discount/100);

   subTotal = total - totMin ;
   $('#txtSubTotal').val(subTotal);
   console.log("subtotal "+subTotal);
});

$('#txtCash').on('keyup',function (){
   let cash = $('#txtCash').val();
   let subTotal = $('#txtSubTotal').val();

   $('#txtBalance').val(parseFloat(cash) - parseFloat(subTotal));
});

$('#btnPay').click(function (){
    let orderId = $('#ordId').val();
    let orderDate = $('#ordDate').val();
    let customerName = $('#customerNameOrd').val();
    let discount = $('#txtDiscount').val();
    let subTotal = $('#txtSubTotal').val();

    var order = orderObject(orderId,orderDate,customerName,discount,subTotal);

    orderArray.push(order);
    loadAllOrder();
    console.log(orderArray);


});



/*FUNCTION*/
function addToCart(){
    $("#tblAddToCart> tr").detach();
    for (var i of tempAddToCart){
        $('#tblAddToCart').append('<tr><td>'+i.ordItmId+'</td>'+'<td>'+i.orItmName+'</td>'+'<td>'+i.orItmPrice+'</td>'+'<td>'+i.ordQty+'</td>'+'<td>'+i.ordTotal+'</td></tr>');
    }
}

function loadAllOrder(){
    $("#tblOrder> tr").detach();
    for (var i of orderArray){
        $('#tblOrder').append('<tr><td>'+i.ordId+'</td>'+'<td>'+i.ordDate+'</td>'+'<td>'+i.cusName+'</td>'+'<td>'+i.dis+'</td>'+'<td>'+i.cost+'</td></tr>');
    }
}

function displayTotal(){
    var tempTotal = 0;
    for (var i of tempAddToCart){
        tempTotal = tempTotal + i.ordTotal;
    }
    $('#total').val(tempTotal);
}

/*Remove Duplicate Row*/
function searchRowExists(itemCode) {
    for (let tempAdd of tempAddToCart) {
        console.log(tempAdd.ordItmId+"-----"+itemCode);
        if(tempAdd.ordItmId === itemCode){
            return tempAdd
        }
    }
    return null;
}

function lessQtyOnHand(){
    let ordQty = $('#orderQty').val();
    let qtyOnHand = $('#itemQtyOrd').val();
    let itemCode = $('#itemCodeOrd').val();
    let lessQty = 0;

    for (var minQty of itemArray){
        if (minQty.code === itemCode){
           lessQty = qtyOnHand - ordQty;
           console.log("Less Qty "+lessQty);
            $('#itemQtyOrd').val(lessQty);
            minQty.qty = lessQty;
        }

    }
    saveItem();
}
