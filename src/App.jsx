import { useState } from 'react'
import Select from 'react-select'
import rawData from './base.json'
function App() {
  let options = rawData.map(item=>{
    item.label = item["English Name"];
    item.value = item["English Name"];
    return item
  })
  return (
    <div className='w-96 bg-fuchsia-50 border border-fuchsia-700 shadow-md p-10 rounded-md'>
    <div className='flex w-full'>
    <Select options={options} isClearable={true} onChange={item=>console.log(item)}></Select>
    <input className='w-24 h-12'></input>
    </div>
    </div>
  )
}

export default App
