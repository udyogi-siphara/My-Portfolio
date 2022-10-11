let customerArray = [];

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
    clearCustomer();
    blindRowClickEvent();
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
       setTextfieldValues("", "", "", "");
   }else{
       alert("No such customer to delete. please check the id");
   }
});

$('#btnCusUpdate').click(function (){
   let updateID = $('#txtCusID').val();
   let response = updateCustomer(updateID);
   if (response){
       alert("Customer Successfully Updated....");
       setTextfieldValues("", "", "", "");
   }else{
       alert("Update Failed");
   }
});




/*Functions*/
function saveCustomer() {
    $("#tblCustomer> tr").detach();
    for (var i of customerArray) {
        $('#tblCustomer').append('<tr><td>' + i.id + '</td>' + '<td>' + i.name + '</td>' + '<td>' + i.address + '</td>' + '<td>' + i.salary + '</td></tr>');
    }
    blindRowClickEvent();
}

function clearCustomer(){
    $('#txtCustomerId').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerSalary').val("");
}

function blindRowClickEvent(){
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

function setTextfieldValues(id,name,address,salary){
    $('#txtCustomerId').val(id);
    $('#txtCustomerName').val(name);
    $('#txtCustomerAddress').val(address);
    $('#txtCustomerSalary').val(salary);
}
