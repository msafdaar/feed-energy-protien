function Details({formula}) {
    function calculateDetails(formula){
        let formulaCopy = formula.map((item)=>{
            if(item.qty === undefined || item.qty === "" || item.qty === null){
                item.qty = 0;
            }
            if(item.rate === undefined || item.rate === "" || item.rate === null){
                item.rate = 0;
            }
            if(item.item === undefined || item.item === "" || item.item === null){
                item.item = {};
            };
            return item
        });

        let headersToCalculate = [
            "DRY MATTER %",
            "Energy",
            "CP",
            "CF",
            "CALCIUM",
            "P-DIG",
            "P-TOTAL",
            "NA",
            "K",
            "CL",
            "LYSINE",
            "D-LYSINE",
            "METHIONINE",
            "D-METHIONINE",
            "THERIONINE",
            "D-THERIONINE",
            "TRYPTOPHAN",
            "D-TRYPTOPHAN",
            "CYSTINE",
            "D-CYSTINE",
            "M+C",
            "D- M+C",
            "ARGININE",
            "D-ARGININE",
            "VALINE",
            "D-VALINE",
            "ISOLEUCINE",
            "D-ISOLEUCINE",
            "LEUCINE",
            "D-LEUCINE",
            "HISTADINE",
            "D-HISTADINE",
            "PHENYLALANINE",
            "D-PHENYLALANINE"
        ];
        let headerRow = ["Item", "Qty", "Rate", "Cost"].concat(headersToCalculate);

        let numberOfItems = formulaCopy.length;
        let totalQty = formulaCopy.reduce((total, item)=>{return total+item.qty}, 0);
        let totalCost = formulaCopy.reduce((total, item)=>{return total + (item.qty*item.rate)}, 0);
        let costPerKg = totalCost/totalQty || 0;
        let totalsRow = [numberOfItems, totalQty, costPerKg, totalCost].concat(Array(headersToCalculate.length).fill(0));;
        
        let tableBody = formulaCopy.map((item)=>{
            let row = [item.item.label, item.qty, item.rate, item.rate*item.qty];
            headersToCalculate.forEach((header, index)=>{
                let value = item.item[header]/1000*item.qty || 0;
                row.push(value);
                //also add value to total. to prevent looping again
                totalsRow[index+4] += value;
            })
            return row
        })

        return{
            header: headerRow,
            body: tableBody,
            totals: totalsRow
        }
    }
    
    let detailsObject = calculateDetails(formula);
    console.log(detailsObject);
    return ( <div className="w-full overflow-x-auto">
        <div className="flex basis-0">{detailsObject.header.map(cell => {return <div className="border basis-0">{cell}</div>})}</div>
       {detailsObject.body.map((row)=>{
        return <div className="flex basis-0">{row.map((cell)=>{
            return <div className="border basis-0">{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</div>
        })}</div>
       })}
        <div className="flex basis-0">{detailsObject.totals.map(cell => {return <div className="border basis-0">{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</div>})}</div>
    </div> );
}

export default Details;