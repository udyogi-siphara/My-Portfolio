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


/*Functions*/
function saveCustomer() {
    $("#tblCustomer> tr").detach();
    for (var i of customerArray) {
        $('#tblCustomer').append('<tr><td>' + i.id + '</td>' + '<td>' + i.name + '</td>' + '<td>' + i.address + '</td>' + '<td>' + i.salary + '</td></tr>');
    }
}
