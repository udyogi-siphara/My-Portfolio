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