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
    let tableHead = <thead>
        <tr>
            {detailsObject.header.map((cell)=>{
                return <th>{cell}</th>
            })}
        </tr>
    </thead>

    let tableBody = <tbody>
        {detailsObject.body.map((row)=>{
            return <tr> {row.map((cell)=>{
                return <td>{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</td>
            })} </tr>
        })}
    </tbody>

    let tableFoot = <tfoot>
        <tr>
        {detailsObject.totals.map((cell)=>{
                return <td>{isNaN(cell) ? cell : cell===0 ? "" : cell.toFixed(2)}</td>
            })}            
        </tr>
    </tfoot>    
    return ( <table>
        {tableHead}
        {tableBody}
        {tableFoot}
    </table>);
}

export default Details;