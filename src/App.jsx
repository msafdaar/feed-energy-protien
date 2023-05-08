import { useState } from 'react'
import Select from 'react-select'
import options from './base.json'
import Summary from './Summary';
import Details from './Details';
function App() {
  let [formula, setFormula] = useState([{}]);
  function changeHandler (values){
    let newState = formula.map((item,index) =>{
      if(index === values.index){
        item[values.inputType] = values.value;
        return item;
      } else {
        return item;
      }
    })
    setFormula(newState);
  }
  function addItem(num){
    if(num === 1){
      setFormula(formula.concat([{}]));
    }else if (num === 5){
      setFormula(formula.concat([{},{},{},{},{}]));
    }
  }
  function removeItem(target){
    let newState = formula.filter((value, index)=> {
      return index !== target
    })
    setFormula(newState);
  }
  function focusHandler(event){
    event.target.select()
  }
  return (
    <div className='w-screen max-w-3xl p-4'>
    <div className=' bg-fuchsia-50 border border-fuchsia-700 shadow-md p-5 rounded-md flex gap-5 sm:gap-10 flex-col sm:flex-row'>
    <div className=''>
    <h2 className='text-2xl mb-2'>Formula items</h2>
    <div className='flex gap-1 mb-1'>
      <div className='w-4/6'>Item</div>
      <div className='w-1/6'>Qty</div>
      <div className='w-1/6'>Rate</div>
    </div>
    {formula.map((item, index)=>{
      return <div className='flex gap-1 mb-1 items-center' key={index}>
      <Select className='w-4/6' options={options} isClearable={true} value={item.item || 0} onChange={(value) => changeHandler({value, index,inputType: "item"})}></Select>
      <input className='w-1/6 border h-10 rounded-md px-2 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' min="0" value={item.qty ? item.qty.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "qty"})} onFocus={focusHandler}></input>
      <input className='w-1/6 border h-10 rounded-md px-2 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' min="0" value={item.rate ? item.rate.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "rate"})} onFocus={focusHandler}></input>
      {formula.length>1 && <button className="bg-white h-6 w-6 text-xs text-slate-600 active:ring hover:bg-slate-100 shadow-sm border rounded-full" onClick={()=>removeItem(index)}>X</button>}
      </div>
    })}
    <div className='flex gap-2 mt-2'>
      <button className='bg-fuchsia-200 p-1 px-2 rounded-md hover:bg-fuchsia-300 active:ring font-semibold text-sm' onClick={()=>{addItem(1)}}>Add 1 Item</button>
      <button className='bg-fuchsia-200 p-1 px-2 rounded-md hover:bg-fuchsia-300 active:ring font-semibold text-sm' onClick={()=>{addItem(5)}}>Add 5 Items</button>
    </div>
   </div>
   <Summary formula= {formula}></Summary>
  </div>
  <Details formula={formula}></Details>
  </div>
  )
}

export default App
