let itemArray = [];

$('#btnItemSave').click(function (){
   let itemCode = $('#txtItemId').val();
   let itemName = $('#txtItemName').val();
   let itemPrice = $('#txtItemPrice').val();
   let itemQty =  $('#txtItemQty').val();

   var item = {
       code : itemCode,
       name : itemName,
       price : itemPrice,
       qty   : itemQty
    }

    itemArray.push(item);
    console.log(itemArray);
    saveItem();
});

$('#btnSearchItem').click(function (){
    let searchItemCode = $('#searchItem').includes();
    for (searchItemCode of itemArray[0]){
        console.log(searchItemCode.code);
        $('#txtItemId').val(searchItemCode.code);
        $('#txtItemName').val(searchItemCode.name);
        console.log(searchItemCode.name);
        $('#txtItemPrice').val(searchItemCode.price);
        $('#txtItemQty').val(searchItemCode.qty);

    }
});


/*Functions*/
function saveItem(){
    for (var i of itemArray){
        $('#tblItem').append('<tr><td>'+i.code+'</td>'+'<td>'+i.name+'</td>'+'<td>'+i.price+'</td>'+'<td>'+i.qty+'</td></tr>')
    }
}