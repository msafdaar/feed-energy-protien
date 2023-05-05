function Summary({formula}) {
    let formulaCopy = formula.map((item)=>{
        if(item.qty === undefined || item.qty === "" || item.qty === null){
            item.qty = 0;
        }
        if(item.rate === undefined || item.rate === "" || item.rate === null){
            item.rate = 0;
        }
        if(item.item === undefined || item.item === "" || item.item === null){
            item.item = {};
        }
        return item
    })
    console.log(formulaCopy)

    //number of items
    let numberOfItems = formulaCopy.length;
    //total qty
    let totalQty = formulaCopy.reduce((total, item)=>{return total+item.qty}, 0);
    //total cost
    let totalCost = formulaCopy.reduce((total, item)=>{return total + (item.qty*item.rate)}, 0);
    //cost per bag (50kg)
    let costPer50Kg = totalCost/totalQty*50 || 0;
    //Dry matter
    let dryMatter = getFieldTotal("DRY MATTER %", formulaCopy);
    //protien
    let protien = getFieldTotal("CP", formulaCopy);
    //energy
    let energy = getFieldTotal("Energy", formulaCopy);

    function getFieldTotal(fieldString, formula){
        return formula.reduce((total, current)=>{
            let multiplier = current.item[fieldString]/1000 || 0;
            return total + (current.qty*multiplier)
        }, 0)
    }
    return ( <div className=' bg-violet-50 border border-violet-700 shadow-md p-5 rounded-md mt-5'>
    <h2 className='text-2xl mb-2'>Quick Report</h2>
    <div>Item Count = {numberOfItems}</div>
    <div>Qty Total = {totalQty}Kg</div>
    <div>Total Cost = {totalCost}Rs</div>
    <div>Per 50kg = {costPer50Kg}Rs</div>
    <div>Dry Matter = {dryMatter}%</div>
    <div>Energy = {energy}</div>
    <div>Protien = {protien}%</div>
    </div> );
}

export default Summary;