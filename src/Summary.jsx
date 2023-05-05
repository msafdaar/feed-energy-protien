function Summary({formula}) {
    let summaryArray = makeSummary(formula);
    console.log(formula)
    return ( <div className=' bg-violet-50 border border-violet-700 shadow-md p-5 rounded-md mt-5'>
    <h2 className='text-2xl mb-2'>Quick Report</h2>
    {summaryArray.map((item, index)=>{
        return <div key={index}>
            <div>{item[0]}</div>
            <div>{item[1]}</div>
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
        //Dry matter
        let dryMatter = getFieldTotal("DRY MATTER %", formulaCopy);
        //protien
        let protien = getFieldTotal("CP", formulaCopy);
        //energy
        let energy = getFieldTotal("Energy", formulaCopy);
        return [
            ["Items Count", numberOfItems.toFixed(2)],
            ["Total Weight", totalQty.toFixed(2)],
            ["Total Cost", totalCost.toFixed(2)],
            ["Cost per 50Kg", costPer50Kg.toFixed(2)],
            ["Dry Matter %", dryMatter.toFixed(2)],
            ["Protien %", protien.toFixed(2)],
            ["Energy", energy.toFixed(2)],

        ]
    }
}

export default Summary;