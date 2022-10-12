let itemArray = [];

$('#btnItemSave').click(function (){
    let itemCode = $('#txtItemId').val();
    let itemName = $('#txtItemName').val();
    let itemPrice = $('#txtItemPrice').val();
    let itemQty =  $('#txtItemQty').val();

    var item = {
        code : itemCode,
        name : itemName,
        qty   : itemQty,
        price : itemPrice
    }

    itemArray.push(item);
    console.log(itemArray);
    saveItem();
    clearItem();
    blindRowClickEvent();
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

$('#btnItemClear').click(function (){
    $('#itemCode').val("");
    $('#itemName').val("");
    $('#itemPrice').val("");
    $('#itemQty').val("");
});

$('#btnItemDelete').click(function (){
   let deleteCode = $('#itemCode').val();

   if (deleteItem(deleteCode)){
       alert("Item Successfully Deleted....");
       setTextfieldValues("", "", "", "");
   }else{
       alert("No such item to delete. please check the id");
   }
});

$('#btnItemUpdate').click(function (){
    let updateCode = $('#itemCode').val();
    let response = updateItem(updateCode);

    if (response){
        alert("Item Successfully Updated....");
        setTextfieldValues("", "", "", "");
    }else{
        alert("Update Failed");
    }
});

/*for focus*/
$('#txtItemId,#txtItemName,#txtItemPrice,#txtItemQty').on('keydown',function (){
   if (event.key === 'Tab'){
       event.preventDefault();
   }
});

$('#txtItemId').on('keyup',function (){
   if (event.key === 'Enter'){
       $('#txtItemName').focus();
   }
});

$('#txtItemName').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#txtItemPrice').focus();
    }
});

$('#txtItemPrice').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#txtItemQty').focus();
    }
});

$('#txtItemQty').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#btnItemSave').focus();
    }
});

$('#btnItemSave').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#tblItem').focus();
    }
});

/*Functions*/
function saveItem(){
    $("#tblItem> tr").detach();
    for (var i of itemArray){
        $('#tblItem').append('<tr><td>'+i.code+'</td>'+'<td>'+i.name+'</td>'+'<td>'+i.qty+'</td>'+'<td>'+i.price+'</td></tr>')
    }
}

function clearItem(){
    $('#txtItemId').val("");
    $('#txtItemName').val("");
    $('#txtItemPrice').val("");
    $('#txtItemQty').val("");
}

function blindRowClickEvent(){
    $('#tblItem>tr').click(function (){
        let id = $(this).children(':eq(0)').text();
        $('#itemCode').val(id);
        let name = $(this).children(':eq(1)').text();
        $('#itemName').val(name);
        let qty = $(this).children(':eq(2)').text();
        $('#itemQty').val(qty);
        let price = $(this).children(':eq(3)').text();
        $('#itemPrice').val(price);
    });
}

function searchItem(itmCode){
    for(var i of itemArray){
        if (i.code === itmCode){
            return i;
        }
    }
    return null;
}

function deleteItem(itemCode){
    let itemObj = searchItem(itemCode);

    if (itemObj != null){
        let indexNumber = itemArray.indexOf(itemObj);
        itemArray.splice(indexNumber,1);
        saveItem();
        return true;
    }else {
        return false;
    }
}

function updateItem(itemCode){
    let itemObj = searchItem(itemCode);

    if (itemObj != null){
        itemObj.code = $('#itemCode').val();
        itemObj.name = $('#itemName').val();
        itemObj.price = $('#itemPrice').val();
        itemObj.qty = $('#itemQty').val();
        saveItem();
        return true;
    }else {
        return false;
    }
}

function setTextfieldValues(code,name,price,qty){
    $('#itemCode').val(id);
    $('#itemName').val(name);
    $('#itemPrice').val(price);
    $('#itemQty').val(qty);
}