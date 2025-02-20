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
        let headerRow = ["", "Qty", "Rate", "Cost"].concat(headersToCalculate);

        let totalQty = formulaCopy.reduce((total, item)=>{return total+item.qty}, 0);
        let totalCost = formulaCopy.reduce((total, item)=>{return total + (item.qty*item.rate)}, 0);
        let costPerKg = totalCost/totalQty || 0;
        let totalsRow = ["Total", totalQty, costPerKg, totalCost].concat(Array(headersToCalculate.length).fill(0));;
        let totalsRowAdjusted = ["Total Adjusted (1000Kg)", 1000, costPerKg, costPerKg*1000].concat(Array(headersToCalculate.length).fill(0));;
        
        let tableBody = formulaCopy.map((item)=>{
            let row = [item.item.label, item.qty, item.rate, item.rate*item.qty];
            headersToCalculate.forEach((header, index)=>{
                let value = item.item[header]/1000*item.qty || 0;
                row.push(value);
                //also add value to total. to prevent looping again
                totalsRow[index+4] += value;
                totalsRowAdjusted[index+4] += item.item[header]/1000*item.qty/totalQty*1000 || 0;
            })
            return row
        })

        return{
            header: headerRow,
            body: tableBody,
            totals: totalsRow,
            adjusted: totalsRowAdjusted
        }
    }
    
    let detailsObject = calculateDetails(formula);
    let tableHead = <thead>
        <tr>{detailsObject.header.map((cell)=>{
                return <th className="bg-gray-200 text-right pr-4 w-24 sm:w-44">{cell}</th>
            })}</tr>
    </thead>

    let tableBody = <tbody>
        {detailsObject.body.map((row)=>{
            return <tr>{row.map((cell)=>{
                return <td className="border bg-gray-50 text-right pr-4">{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</td>
            })}</tr>
        })}
    </tbody>

    let tableFoot = <tfoot>
        <tr>{
            detailsObject.totals.map((cell)=>{
                return <td className="bg-gray-50 text-right pr-4">{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</td>
            })}</tr>
            <tr>{
            detailsObject.adjusted.map((cell)=>{
                return <td className="bg-gray-200 font-bold text-right pr-4">{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</td>
            })}</tr>
    </tfoot>    
    return ( <div>
    <h2 className="text-2xl mt-5 mb-2 font-bold">Details</h2>
    <div className="w-full overflow-x-scroll mb-5 border rounded-md">
    <table className="table-fixed w-full font-mono text-xs sm:text-base">
        {tableHead}{tableBody}{tableFoot}
    </table>
    </div>
    </div>
    );
}

export default Details;