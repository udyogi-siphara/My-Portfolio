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
    for (var searchCodeOrName of itemArray) {
        let searchItem = $('#searchItem').val();
        let chooseType = $('#chooseItemTyp').val();
        if (chooseType === "Code") {

            if (searchItem === searchCodeOrName.code) {
                $('#itemCode').val(searchCodeOrName.code);
                $('#itemName').val(searchCodeOrName.name);
                $('#itemPrice').val(searchCodeOrName.price);
                $('#itemQty').val(searchCodeOrName.qty);

            }
        } else if(chooseType === "1") {

            if (searchItem === searchCodeOrName.name) {
                $('#itemCode').val(searchCodeOrName.code);
                $('#itemName').val(searchCodeOrName.name);
                $('#itemPrice').val(searchCodeOrName.price);
                $('#itemQty').val(searchCodeOrName.qty);

            }
        }
    }
});


/*Functions*/
function saveItem(){
    for (var i of itemArray){
        $('#tblItem').append('<tr><td>'+i.code+'</td>'+'<td>'+i.name+'</td>'+'<td>'+i.price+'</td>'+'<td>'+i.qty+'</td></tr>')
    }
}