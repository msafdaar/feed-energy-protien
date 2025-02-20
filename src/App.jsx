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
    <div className='w-screen max-w-7xl p-4 m-2 rounded-lg border shadow-sm flex flex-col bg-gray-50'>
    <h1 className='text-xl self-center font-mono font-bold mb-3'>Chicken feed nutrition calculator</h1>
    <div className='bg-green-100 p-2 font-mono mb-8'>
      <h3 className='font-bold text-lg'>Read this first;</h3>
      <p>The nutritional information on this website is a general guide and may not be completely accurate due to factors like ingredient quality, climate variations, and measurement techniques. Use with caution and always consult a qualified veterinary professional before making dietary decisions based on this calculator.</p>
      <p>Coded by <a href='https://github.com/msafdaar/' className='text-purple-500'>Safdar</a></p>
    </div>
    <div className='max-w-7xl flex gap-5 sm:gap-10 flex-col sm:flex-row justify-evenly'>
    <div className=''>
    <h2 className='text-2xl mb-4 font-bold'>Ingredient list</h2>
    <div className='flex gap-1 mb-1'>
      <div className='w-72 font-bold'>Name</div>
      <div className='w-20 font-bold'>Qty</div>
      <div className='w-20 font-bold'>Rate</div>
    </div>
    {formula.map((item, index)=>{
      return <div className='flex gap-1 mb-1 items-center' key={index}>
      <Select className='w-72' options={options} isClearable={true} value={item.item || 0} onChange={(value) => changeHandler({value, index,inputType: "item"})}></Select>
      <input className='w-20 border h-10 rounded-md px-2 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' min="0" value={item.qty ? item.qty.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "qty"})} onFocus={focusHandler}></input>
      <input className='w-20 border h-10 rounded-md px-2 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' min="0" value={item.rate ? item.rate.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "rate"})} onFocus={focusHandler}></input>
      {formula.length>1 && <button className="bg-white h-6 w-6 text-xs text-slate-600 active:ring hover:bg-slate-100 shadow-sm border rounded-full" onClick={()=>removeItem(index)}>X</button>}
      </div>
    })}
    <div className='flex gap-2 mt-2'>
      <button className='bg-gray-200 border p-1 px-2 rounded-md hover:bg-gray-300 active:ring font-semibold text-sm shadow-inner' onClick={()=>{addItem(1)}}>Add row</button>
      <button className='bg-gray-200 border p-1 px-2 rounded-md hover:bg-gray-300 active:ring font-semibold text-sm shadow-inner' onClick={()=>{addItem(5)}}>Add 5 rows</button>
    </div>
   </div>
   <Summary formula= {formula}></Summary>
  </div>
  <Details formula={formula}></Details>
  </div>
  )
}

export default App
