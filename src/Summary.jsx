function Summary({formula}) {
    console.log(formula)
    let summaryArray = makeSummary(formula);
    return ( <div className='flex flex-wrap gap-y-2 sm:flex-col '>
    <h2 className='text-2xl mb-2 w-full'>Summary</h2>
    {summaryArray.map((item, index)=>{
        return <div key={index} className="w-1/3 sm:w-full">
            <div>{item[0]}</div>
            <div className="font-semibold">{item[1]}</div>
            <hr></hr>
        </div>
    })}
    </div> );

    function getFieldTotal(fieldString, formula){
        return formula.reduce((total, current)=>{
            let multiplier = current.item[fieldString]/1000 || 0;
            return total + (current.qty*multiplier)
        }, 0)
    }
    function makeSummary(formula){
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
        //number of items
        let numberOfItems = formulaCopy.length;
        //total qty
        let totalQty = formulaCopy.reduce((total, item)=>{return total+item.qty}, 0);
        //total cost
        let totalCost = formulaCopy.reduce((total, item)=>{return total + (item.qty*item.rate)}, 0);
        //cost per bag (50kg)
        let costPer50Kg = totalCost/totalQty*50 || 0;
        return [
            ["Items Count", numberOfItems.toFixed(2)],
            ["Total Weight", totalQty.toFixed(2)],
            ["Total Cost", totalCost.toFixed(2)],
            ["Cost per 50Kg", costPer50Kg.toFixed(2)],
            ["Dry Matter %", (getFieldTotal("DRY MATTER %", formulaCopy)/totalQty*1000).toFixed(2)],
            ["Protien %", (getFieldTotal("CP", formulaCopy)/totalQty*1000).toFixed(2)],
            ["Energy", (getFieldTotal("Energy", formulaCopy)/totalQty*1000).toFixed(2)],
            ["Calcium %", (getFieldTotal("CALCIUM", formulaCopy)/totalQty*1000).toFixed(2)],
        ]
    }
}

export default Summary;