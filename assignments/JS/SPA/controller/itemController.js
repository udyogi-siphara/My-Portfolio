/*let itemArray = [];*/

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
    loadAllItemCode();
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

const itmCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itmNameRegEx = /^[A-z ]{5,50}$/;
const itmQtyRegEx = /^[0-9]{2,}$/;
const itmPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let itemValidation = [];
itemValidation.push({reg: itmCodeRegEx, field: $('#txtItemId'), error: 'Item Code Pattern is Wrong : I00-001'});
itemValidation.push({reg: itmNameRegEx, field: $('#txtItemName'), error: 'Item Name Pattern is Wrong : A-z 5-50'});
itemValidation.push({reg: itmQtyRegEx, field: $('#txtItemQty'), error: 'Item Quantity Pattern is Wrong : 0-9'});
itemValidation.push({reg: itmPriceRegEx, field: $('#txtItemPrice'), error: 'Unit Price Pattern is Wrong : 100 or 100.00'});

$('#txtItemId,#txtItemName,#txtItemQty,#txtItemPrice').on('keydown',function (){
    if (event.key === 'Tab'){
        event.preventDefault();
    }
});

$('#txtItemId,#txtItemName,#txtItemQty,#txtItemPrice').on('keyup',function (){
    checkValidation();
});

$('#txtItemId,#txtItemName,#txtItemQty,#txtItemPrice').on('blur',function (){
    checkValidation();
});

$('#txtItemId').on('keydown',function (event){
    if (event.key === 'Enter' && check(itmCodeRegEx,$('#txtItemId'))) {
        $('#txtItemName').focus();
    }
});

$('#txtItemName').on('keydown',function (event){
    if (event.key === 'Enter' && check(itmNameRegEx,$('#txtItemName'))){
        focusText($('#txtItemPrice'));
    }
});

$('#txtItemPrice').on('keydown',function (event){
    if (event.key === 'Enter' && check(itmPriceRegEx,$('#txtItemPrice'))){
        focusText($('#txtItemQty'));
    }
});

$("#txtItemQty").on('keydown', function (event) {
    if (event.key == "Enter" && check(itmQtyRegEx, $("#txtItemQty"))) {
        let response = confirm("Do you want to add this Item.?");
        if (response) {
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
            blindRowClickEvent();
            clearAllText();

        }
    }
});







/*Functions*/
function saveItem(){
    $("#tblItem> tr").detach();
    for (var i of itemArray){
        $('#tblItem').append('<tr><td>'+i.code+'</td>'+'<td>'+i.name+'</td>'+'<td>'+i.qty+'</td>'+'<td>'+i.price+'</td></tr>')
    }
    blindRowClickEvent();
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

/*Validations functions*/

function checkValidation(){
    let errorCount=0;
    for (validation of itemValidation){
        if (check(validation.reg, validation.field)){
            setTextSuccess(validation.field,"");
        }else{
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex,textField){
    let inputValue = textField.val();
    return regex.test(inputValue)? true : false ;
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function setTextError(textField,error){
    if (textField.val().length <= 0){
        defaultText(textField,"");
    }else{
        textField.css("border", "1px solid red");
        textField.parent().children('span').text(error);
    }
}

function setTextSuccess(textField,error){
    if (textField.val().length <= 0){
        defaultText(textField,"");
    }else{
        textField.css("border", "1px solid green");
        textField.parent().children('span').text(error);
    }
}

function focusText(textField){
    textField.focus();
}

function setButtonState(value){
    if (value>0){
        $('#btnItemSave').attr('disabled',true);
    }else{
        $('#btnItemSave').attr('disabled',false);
    }
}

function clearAllText(){
    $("#txtItemId").focus();
    $('#txtItemId,#txtItemName,#txtItemQty,#txtCustomerPrice').val("");
    checkValidation();
}