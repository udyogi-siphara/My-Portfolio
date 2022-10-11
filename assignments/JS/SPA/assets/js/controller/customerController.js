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


/*Functions*/
function saveCustomer() {
    $("#tblCustomer> tr").detach();
    for (var i of customerArray) {
        $('#tblCustomer').append('<tr><td>' + i.id + '</td>' + '<td>' + i.name + '</td>' + '<td>' + i.address + '</td>' + '<td>' + i.salary + '</td></tr>');
    }
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
