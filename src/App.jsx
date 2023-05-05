import { useState } from 'react'
import Select from 'react-select'
import options from './base.json'
import Summary from './Summary';
function App() {
  let [formula, setFormula] = useState([{}]);
  function changeHandler (values){
    console.log(values)
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
    console.log(num)
    if(num === 1){
      setFormula(formula.concat([{}]));
    }else if (num === 5){
      setFormula(formula.concat([{},{},{},{},{}]));
    }
  }
  return (
    <div>

    <div className=' bg-fuchsia-50 border border-fuchsia-700 shadow-md p-5 rounded-md'>
    <h2 className='text-2xl mb-2'>Formula items</h2>
    <div className='flex gap-1 mb-1'>
      <div className='w-2/4'>Item</div>
      <div className='w-1/4'>Qty</div>
      <div className='w-1/4'>Rate</div>
    </div>
    {formula.map((item, index)=>{
      return <div className='flex gap-1 mb-1' key={index}>
      <Select className='w-2/4' options={options} isClearable={true} onChange={(value) => changeHandler({value, index,inputType: "item"})} data-item-index={index} data-input-type = "item"></Select>
      <input className='w-1/4 border rounded-md px-2' type='number' min="0" value={item.qty ? item.qty.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "qty"})} ></input>
      <input className='w-1/4 border rounded-md px-2' type='number' min="0" value={item.rate ? item.rate.toString() : 0} onChange={(value) => changeHandler({value: parseFloat(value.target.value)||0, index,inputType: "rate"})} ></input>
      </div>
    })}
    <div className='flex gap-2 mt-2'>
      <button className='bg-fuchsia-200 p-1 rounded-md hover:bg-fuchsia-300 active:ring' onClick={()=>{addItem(1)}}>Add 1 Item</button>
      <button className='bg-fuchsia-200 p-1 rounded-md hover:bg-fuchsia-300 active:ring' onClick={()=>{addItem(5)}}>Add 5 Items</button>
    </div>
   </div>
   <Summary formula= {formula}></Summary>
  </div>
  )
}

export default App
