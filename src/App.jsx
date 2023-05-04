import { useState } from 'react'
import Select from 'react-select'
import options from './base.json'
import uniqid from 'uniqid'
function App() {
  let [formula, setFormula] = useState([{},{},{},{}]);
  function changeHandler (item, target){
    console.log(item)
    console.log(target)
  }

  return (
    <div className=' bg-fuchsia-50 border border-fuchsia-700 shadow-md p-10 rounded-md'>
    <div className='flex gap-1 mb-1'>
      <div className='w-2/4'>Item</div>
      <div className='w-1/4'>Qty</div>
      <div className='w-1/4'>Rate</div>
    </div>
    {formula.map((item, index)=>{
      return <div className='flex gap-1 mb-1' key={uniqid()}>
      <Select className='w-2/4' options={options} isClearable={true} onChange={(value) => changeHandler(value, index)} data-item-index={index} data-input-type = "item"></Select>
      <input className='w-1/4 border rounded-md px-2' type='number' min="0" value={item.qty ? item.qty : 0} onChange={changeHandler} data-item-index={index} data-input-type = "qty"></input>
      <input className='w-1/4 border rounded-md px-2' type='number' min="0" value={item.rate ? item.rate : 0} onChange={changeHandler} data-item-index={index} data-input-type = "rate"></input>
      </div>
    })}
   </div>
  )
}

export default App
