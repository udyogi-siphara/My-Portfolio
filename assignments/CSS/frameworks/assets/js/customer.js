let customerArray = [];

$('#btnCusSave').click(function (){
    let customerId = $('#txtCustomerId').val();
    let customerName = $('#txtCustomerName').val();
    let customerAddress = $('#txtCustomerAddress').val();
    let customerSalary = $('#txtCustomerSalary').val();

    var customer ={
        id : customerId,
        name : customerName,
        address : customerAddress,
        salary : customerSalary
    }

    customerArray.push(customer);
    saveCustomer();
    console.log(customerArray);
});

$('#btnSearchCustomer').click(function (){
   let searchIdOrName = $('#searchIdOrName').includes();
   for (searchIdOrName of customerArray[0]){
        console.log(searchIdOrName.id);
       $('#txtCusId').val(searchIdOrName.id);
       $('#txtCusName').val(searchIdOrName.name);
       console.log(searchIdOrName.name);
       $('#txtCusAddress').val(searchIdOrName.address);
       $('#txtCusSalary').val(searchIdOrName.salary);

   }
});






/*Functions*/
function saveCustomer(){
    for (var i of customerArray){
        $('#tblCustomer').append('<tr><td>'+i.id+'</td>'+'<td>'+i.name+'</td>'+'<td>'+i.address+'</td>'+'<td>'+i.salary+'</td></tr>');
    }
}

