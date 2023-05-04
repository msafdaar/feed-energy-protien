function Summary({formula}) {
    console.log(formula)
    return ( <div className=' bg-violet-50 border border-violet-700 shadow-md p-5 rounded-md mt-5'>
    <h2 className='text-2xl mb-2'>Quick Report</h2>
    <div>Total Cost = {formula[0].qty * formula[0].rate}</div>
    </div> );
}

export default Summary;