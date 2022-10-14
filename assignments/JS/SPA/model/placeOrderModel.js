function placeOrderObject(itmCode,itmName,itmPrice,orderQty,total){
    return{
        ordItmId: itmCode,
        orItmName: itmName,
        orItmPrice: itmPrice,
        ordQty: orderQty,
        ordTotal: total
    };
}