//Main Goal is to render a table where each item has its own row
//first column is item name
//then all other columns come in.
//example: makai, protien contribution, energy contribution and all other columns like this
//the final row should have a total of all those values\
//optional: try to make first row and col sticky
function Details({formula}) {
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
    
    let numberOfItems = formulaCopy.length;
    let totalQty = formulaCopy.reduce((total, item)=>{return total+item.qty}, 0);
    let totalCost = formulaCopy.reduce((total, item)=>{return total + (item.qty*item.rate)}, 0);
    let costPerKg = totalCost/totalQty || 0;
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
    let totalsRow = [numberOfItems, totalQty, costPerKg, totalCost].concat(Array(headersToCalculate.length).fill(0));;
    let headerRow = ["Item", "Qty", "Rate", "Cost"].concat(headersToCalculate);
    let tableBody = formulaCopy.map((item)=>{
        let row = [item.item.label, item.qty, item.rate, item.rate*item.qty];
        headersToCalculate.forEach((header, index)=>{
            let value = item.item[header]/1000*item.qty || 0;
            row.push(value);
            //also add value to total. to prevent map again
            totalsRow[index+4] += value;
        })
        return row
    })
    tableBody.unshift(headerRow);
    tableBody.push(totalsRow);
    console.log(tableBody);


    return ( "hi" );
}

export default Details;