function orderObject(orderId,orderDate,customerName,discount,subTotal){
    return{
        ordId : orderId,
        ordDate : orderDate,
        cusName : customerName,
        dis : discount,
        cost : subTotal
    };
}