/*let customerArray = [];*/

$('#btnCusSave').click(function () {
    let customerId = $('#txtCustomerId').val();
    let customerName = $('#txtCustomerName').val();
    let customerAddress = $('#txtCustomerAddress').val();
    let customerSalary = $('#txtCustomerSalary').val();

    var customer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }

    customerArray.push(customer);
    saveCustomer();
    loadAllCustomerId();
    clearCustomer();
    blindRowCustomerClickEvent();
    console.log(customerArray);
});

$('#btnCustomerSearch').click(function () {
    for (var searchIdOrName of customerArray) {
        let searchCustomer = $('#searchIdOrName').val();
        let chooseType = $('#chooseCusTyp').val();
        if (chooseType === "ID") {

            if (searchCustomer === searchIdOrName.id) {
                $('#txtCusID').val(searchIdOrName.id);
                $('#txtCusName').val(searchIdOrName.name);
                console.log(searchIdOrName.name);
                $('#txtCusAddress').val(searchIdOrName.address);
                $('#txtCusSalary').val(searchIdOrName.salary);

            }
        } else if(chooseType === "1") {

            if (searchCustomer === searchIdOrName.name) {
                $('#txtCusID').val(searchIdOrName.id);
                $('#txtCusName').val(searchIdOrName.name);
                console.log(searchIdOrName.name);
                $('#txtCusAddress').val(searchIdOrName.address);
                $('#txtCusSalary').val(searchIdOrName.salary);

            }
        }
    }
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('keydown',function (){
   if (event.key === 'Tab'){
       event.preventDefault();
   }
});

$('#txtCustomerId').on('keyup',function (){
   if (event.key === 'Enter'){
       $('#txtCustomerName').focus();
   }
});

$('#txtCustomerName').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#txtCustomerAddress').focus();
    }
});

$('#txtCustomerAddress').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#txtCustomerSalary').focus();
    }
});

$('#txtCustomerSalary').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#btnCusSave').focus();
    }
});

$('#btnCusSave').on('keyup',function (){
    if (event.key === 'Enter'){
        $('#tblCustomer').focus();
    }
});

$('#btnCusClear').click(function (){
    $('#txtCusID').val("");
    $('#txtCusName').val("");
    $('#txtCusAddress').val("");
    $('#txtCusSalary').val("");
});

$('#btnCusDelete').click(function (){
   let deleteID = $('#txtCusID').val();
   if(deleteCustomer(deleteID)){
       alert("Customer Successfully Deleted....");
       setTextfieldValuesCustomer("", "", "", "");
   }else{
       alert("No such customer to delete. please check the id");
   }
});

$('#btnCusUpdate').click(function (){
   let updateID = $('#txtCusID').val();
   let response = updateCustomer(updateID);

   if (response){
       alert("Customer Successfully Updated....");
       setTextfieldValuesCustomer("", "", "", "");
   }else{
       alert("Update Failed");
   }
});

/*$("#txtCustomerId").focus();*/
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidation = [];
customerValidation.push({reg: cusIDRegEx, field: $('#txtCustomerId'), error: 'Customer ID Pattern is Wrong : C00-001'});
customerValidation.push({reg: cusNameRegEx, field: $('#txtCustomerName'), error: 'Customer Name Pattern is Wrong : A-z 5-20'});
customerValidation.push({reg: cusAddressRegEx, field: $('#txtCustomerAddress'), error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'});
customerValidation.push({reg: cusSalaryRegEx, field: $('#txtCustomerSalary'), error: 'Customer Salary Pattern is Wrong : 100 or 100.00'});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('keydown',function (){
   if (event.key === 'Tab'){
       event.preventDefault();
   }
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('keyup',function (){
    checkValidationCustomer();
});

$('#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').on('blur',function (){
    checkValidationCustomer();
});

$('#txtCustomerId').on('keydown',function (event){
   if (event.key === 'Enter' && checkCustomer(cusIDRegEx,$('#txtCustomerId'))) {
       $('#txtCustomerName').focus();
   }
});

$('#txtCustomerName').on('keydown',function (event){
    if (event.key === 'Enter' && checkCustomer(cusNameRegEx,$('#txtCustomerName'))){
        focusTextCustomer($('#txtCustomerAddress'));
    }
});

$('#txtCustomerAddress').on('keydown',function (event){
    if (event.key === 'Enter' && checkCustomer(cusAddressRegEx,$('#txtCustomerAddress'))){
        focusTextCustomer($('#txtCustomerSalary'));
    }
});

$("#txtCustomerSalary").on('keydown', function (event) {
    if (event.key == "Enter" && checkCustomer(cusSalaryRegEx, $("#txtCustomerSalary"))) {
        let response = confirm("Do you want to add this customer.?");
        if (response) {
            let customerId = $('#txtCustomerId').val();
            let customerName = $('#txtCustomerName').val();
            let customerAddress = $('#txtCustomerAddress').val();
            let customerSalary = $('#txtCustomerSalary').val();

            var customer = {
                id: customerId,
                name: customerName,
                address: customerAddress,
                salary: customerSalary
            }

            customerArray.push(customer);
            saveCustomer();
            clearAllTextCustomer();

        }
    }
});




/*Functions*/
function saveCustomer() {
    $("#tblCustomer> tr").detach();
    for (var i of customerArray) {
        $('#tblCustomer').append('<tr><td>' + i.id + '</td>' + '<td>' + i.name + '</td>' + '<td>' + i.address + '</td>' + '<td>' + i.salary + '</td></tr>');
    }
    blindRowCustomerClickEvent();
}

function clearCustomer(){
    $('#txtCustomerId').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerSalary').val("");
}

function blindRowCustomerClickEvent(){
    $('#tblCustomer>tr').click(function (){
        let id = $(this).children(':eq(0)').text();
        $('#txtCusID').val(id);
        let name = $(this).children(':eq(1)').text();
        $('#txtCusName').val(name);
        let address = $(this).children(':eq(2)').text();
        $('#txtCusSalary').val(address);
        let salary = $(this).children(':eq(3)').text();
        $('#txtCusAddress').val(salary);
    });
}

function searchCustomer(cusId){
    for(var i of customerArray){
        if (i.id === cusId){
            return i;
        }
    }
    return null;
}

function deleteCustomer(customerId){
    let customerObj = searchCustomer(customerId);

    if (customerObj != null){
        let indexNumber = customerArray.indexOf(customerObj);
        customerArray.splice(indexNumber,1);
        saveCustomer();
        return true;
    }else {
        return false;
    }
}

function updateCustomer(customerId){
    let customerObj = searchCustomer(customerId);

    if (customerObj != null){
       customerObj.id = $('#txtCusID').val();
       customerObj.name = $('#txtCusName').val();
       customerObj.address = $('#txtCusAddress').val();
       customerObj.salary = $('#txtCusSalary').val();
        saveCustomer();
        return true;
    }else {
        return false;
    }
}

function setTextfieldValuesCustomer(id,name,address,salary){
    $('#txtCustomerId').val(id);
    $('#txtCustomerName').val(name);
    $('#txtCustomerAddress').val(address);
    $('#txtCustomerSalary').val(salary);
}

/*Validations functions*/

function checkValidationCustomer(){
    let errorCount=0;
    for (validation of customerValidation){
        if (checkCustomer(validation.reg, validation.field)){
            setTextSuccessCustomer(validation.field,"");
        }else{
            errorCount=errorCount+1;
            setTextErrorCustomer(validation.field,validation.error);
        }
    }
    setButtonStateCustomer(errorCount);
}

function checkCustomer(regex,textField){
    let inputValue = textField.val();
    return regex.test(inputValue)? true : false ;
}

function defaultTextCustomer(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function setTextErrorCustomer(textField,error){
    if (textField.val().length <= 0){
        defaultTextCustomer(textField,"");
    }else{
        textField.css("border", "1px solid red");
        textField.parent().children('span').text(error);
    }
}

function setTextSuccessCustomer(textField,error){
    if (textField.val().length <= 0){
        defaultTextCustomer(textField,"");
    }else{
        textField.css("border", "1px solid green");
        textField.parent().children('span').text(error);
    }
}

function focusTextCustomer(textField){
    textField.focus();
}

function setButtonStateCustomer(value){
    if (value>0){
        $('#btnCusSave').attr('disabled',true);
    }else{
        $('#btnCusSave').attr('disabled',false);
    }
}

function clearAllTextCustomer(){
    $("#txtCustomerID").focus();
    $('#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary').val("");
    checkValidationCustomer();
}
