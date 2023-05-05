function Summary({formula}) {
    //number of items
    let numberOfItems = formula.length;
    //total qty
    let totalQty = formula.reduce((total, item)=>{
        if(item.qty === undefined){
            return total;
        } else {
            return total+item.qty
        }
    }, 0);
    //total cost
    let totalCost = formula.reduce((total, item)=>{
        let qty = item.qty === undefined ? 0 : item.qty;
        let rate = item.rate === undefined ? 0 : item.rate;
            return total + (qty*rate);
    }, 0);
    //cost per bag (50kg)
    let costPer50Kg = totalCost/totalQty*50;

    return ( <div className=' bg-violet-50 border border-violet-700 shadow-md p-5 rounded-md mt-5'>
    <h2 className='text-2xl mb-2'>Quick Report</h2>
    <div>Item Count = {numberOfItems}</div>
    <div>Qty Total = {totalQty}</div>
    <div>Total Cost = {totalCost}</div>
    <div>Per 50kg = {costPer50Kg}</div>
    </div> );
}

export default Summary;