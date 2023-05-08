import { useState } from 'react'
import Select from 'react-select'
import options from './base.json'
import Summary from './Summary';
import Details from './Details';
function App() {
  // let [formula, setFormula] = useState([{}]);
  let [formula, setFormula] = useState([
    {
        "qty": 667,
        "rate": 0,
        "item": {
            "DRY MATTER %": 88,
            "Energy": 3300,
            "CP": 8.25,
            "CF": 2.25,
            "CALCIUM": 0.02,
            "P-DIG": 0.1,
            "P-TOTAL": 0.3,
            "NA": 0.05,
            "K": 0.33,
            "CL": 0.05,
            "LYSINE": 0.25,
            "D-LYSINE": 0.21,
            "METHIONINE": 0.19,
            "D-METHIONINE": 0.17,
            "THERIONINE": 0.31,
            "D-THERIONINE": 0.26,
            "TRYPTOPHAN": 0.07,
            "D-TRYPTOPHAN": 0.05,
            "CYSTINE": 0.19,
            "D-CYSTINE": 0.16,
            "M+C": 0.38,
            "D- M+C": 0.33,
            "ARGININE": 0.42,
            "D-ARGININE": 0.37,
            "VALINE": 0.41,
            "D-VALINE": 0.34,
            "ISOLEUCINE": 0.29,
            "D-ISOLEUCINE": 0.26,
            "LEUCINE": 1.05,
            "D-LEUCINE": 0.84,
            "HISTADINE": 0.26,
            "D-HISTADINE": 0.23,
            "PHENYLALANINE": 0.43,
            "D-PHENYLALANINE": 0.36,
            "label": "Makai 12",
            "value": "Makai 12",
            "urdu": "مکئی / 12 موسچر"
        }
    },
    {
        "qty": 70,
        "rate": 0,
        "item": {
            "DRY MATTER %": 90,
            "Energy": 2200,
            "CP": 44,
            "CF": 7.5,
            "CALCIUM": 0.2,
            "P-DIG": 0.25,
            "P-TOTAL": 0.75,
            "NA": 0.05,
            "K": 2.25,
            "CL": 0.05,
            "LYSINE": 2.76,
            "D-LYSINE": 2.48,
            "METHIONINE": 0.61,
            "D-METHIONINE": 0.55,
            "THERIONINE": 1.73,
            "D-THERIONINE": 1.52,
            "TRYPTOPHAN": 0.6,
            "D-TRYPTOPHAN": 0.43,
            "CYSTINE": 0.66,
            "D-CYSTINE": 0.54,
            "M+C": 1.27,
            "D- M+C": 1.09,
            "ARGININE": 3.35,
            "D-ARGININE": 2.98,
            "VALINE": 2.15,
            "D-VALINE": 1.89,
            "ISOLEUCINE": 2.05,
            "D-ISOLEUCINE": 1.8,
            "LEUCINE": 3.47,
            "D-LEUCINE": 2.98,
            "HISTADINE": 1.21,
            "D-HISTADINE": 0.99,
            "PHENYLALANINE": 2.28,
            "D-PHENYLALANINE": 1.92,
            "label": "Soyabean 44",
            "value": "Soyabean 44",
            "urdu": "سویابین / 44 پروٹین"
        }
    },
    {
        "qty": 81,
        "rate": 0,
        "item": {
            "DRY MATTER %": 90,
            "Energy": 1900,
            "CP": 35,
            "CF": 12,
            "CALCIUM": 0.64,
            "P-DIG": 0.25,
            "P-TOTAL": 0.75,
            "NA": 0.09,
            "K": 1.3,
            "CL": 0.1,
            "LYSINE": 1.89,
            "D-LYSINE": 1.51,
            "METHIONINE": 0.66,
            "D-METHIONINE": 0.59,
            "THERIONINE": 1.52,
            "D-THERIONINE": 1.15,
            "TRYPTOPHAN": 0.45,
            "D-TRYPTOPHAN": 0.34,
            "CYSTINE": 0.83,
            "D-CYSTINE": 0.62,
            "M+C": 1.49,
            "D- M+C": 1.21,
            "ARGININE": 1.98,
            "D-ARGININE": 1.78,
            "VALINE": 1.75,
            "D-VALINE": 1.42,
            "ISOLEUCINE": 1.34,
            "D-ISOLEUCINE": 0.99,
            "LEUCINE": 2.42,
            "D-LEUCINE": 2.13,
            "HISTADINE": 0.92,
            "D-HISTADINE": 0.78,
            "PHENYLALANINE": 1.38,
            "D-PHENYLALANINE": 1.19,
            "label": "Canola Meal",
            "value": "Canola Meal",
            "urdu": "کینولہ میل"
        }
    },
    {
        "qty": 43,
        "rate": 0,
        "item": {
            "DRY MATTER %": 90,
            "Energy": 2750,
            "CP": 48,
            "CF": 0.5,
            "CALCIUM": 4,
            "P-DIG": 2.5,
            "P-TOTAL": 2.5,
            "NA": 0.9,
            "K": 0.6,
            "CL": 0.6,
            "LYSINE": 2.55,
            "D-LYSINE": 2.24,
            "METHIONINE": 1.06,
            "D-METHIONINE": 0.95,
            "THERIONINE": 1.6,
            "D-THERIONINE": 1.38,
            "TRYPTOPHAN": 0.38,
            "D-TRYPTOPHAN": 0.3,
            "CYSTINE": 0.32,
            "D-CYSTINE": 0.24,
            "M+C": 1.38,
            "D- M+C": 1.19,
            "ARGININE": 2.14,
            "D-ARGININE": 1.92,
            "VALINE": 2.08,
            "D-VALINE": 1.83,
            "ISOLEUCINE": 1.88,
            "D-ISOLEUCINE": 1.69,
            "LEUCINE": 2.95,
            "D-LEUCINE": 2.66,
            "HISTADINE": 0.72,
            "D-HISTADINE": 0.63,
            "PHENYLALANINE": 1.67,
            "D-PHENYLALANINE": 1.41,
            "label": "Fish Meal 48",
            "value": "Fish Meal 48",
            "urdu": "فش میل / 48 پروٹین"
        }
    },
    {
        "qty": 12,
        "rate": 0,
        "item": {
            "DRY MATTER %": 92,
            "Energy": 2100,
            "CP": 39,
            "CF": 13,
            "CALCIUM": 0.15,
            "P-DIG": 0.2,
            "P-TOTAL": 0.6,
            "NA": 0.05,
            "K": 1.5,
            "CL": 0.09,
            "LYSINE": 1.62,
            "D-LYSINE": 1.3,
            "METHIONINE": 0.42,
            "D-METHIONINE": 0.33,
            "THERIONINE": 1.21,
            "D-THERIONINE": 0.81,
            "TRYPTOPHAN": 0.62,
            "D-TRYPTOPHAN": 0.44,
            "CYSTINE": 0.48,
            "D-CYSTINE": 0.34,
            "M+C": 0.9,
            "D- M+C": 0.67,
            "ARGININE": 4.77,
            "D-ARGININE": 4.29,
            "VALINE": 1.35,
            "D-VALINE": 0.99,
            "ISOLEUCINE": 1.16,
            "D-ISOLEUCINE": 0.84,
            "LEUCINE": 2.24,
            "D-LEUCINE": 1.61,
            "HISTADINE": 0.98,
            "D-HISTADINE": 0.73,
            "PHENYLALANINE": 1.5,
            "D-PHENYLALANINE": 1.27,
            "label": "Guar Meal",
            "value": "Guar Meal",
            "urdu": "گوار میل"
        }
    },
    {
        "qty": 110,
        "rate": 0,
        "item": {
            "DRY MATTER %": 96,
            "Energy": 0,
            "CP": 0,
            "CF": 0,
            "CALCIUM": 38,
            "P-DIG": 0,
            "P-TOTAL": 0,
            "NA": 0,
            "K": 0,
            "CL": 0,
            "LYSINE": 0,
            "D-LYSINE": 0,
            "METHIONINE": 0,
            "D-METHIONINE": 0,
            "THERIONINE": 0,
            "D-THERIONINE": 0,
            "TRYPTOPHAN": 0,
            "D-TRYPTOPHAN": 0,
            "CYSTINE": 0,
            "D-CYSTINE": 0,
            "M+C": 0,
            "D- M+C": 0,
            "ARGININE": 0,
            "D-ARGININE": 0,
            "VALINE": 0,
            "D-VALINE": 0,
            "ISOLEUCINE": 0,
            "D-ISOLEUCINE": 0,
            "LEUCINE": 0,
            "D-LEUCINE": 0,
            "HISTADINE": 0,
            "D-HISTADINE": 0,
            "PHENYLALANINE": 0,
            "D-PHENYLALANINE": 0,
            "label": "Chips",
            "value": "Chips",
            "urdu": "چپس"
        }
    },
    {
        "qty": 8,
        "rate": 0,
        "item": {
            "DRY MATTER %": 85,
            "Energy": 0,
            "CP": 0,
            "CF": 0,
            "CALCIUM": 22,
            "P-DIG": 16,
            "P-TOTAL": 16,
            "NA": 0.04,
            "K": 0.07,
            "CL": 0.01,
            "LYSINE": 0,
            "D-LYSINE": 0,
            "METHIONINE": 0,
            "D-METHIONINE": 0,
            "THERIONINE": 0,
            "D-THERIONINE": 0,
            "TRYPTOPHAN": 0,
            "D-TRYPTOPHAN": 0,
            "CYSTINE": 0,
            "D-CYSTINE": 0,
            "M+C": 0,
            "D- M+C": 0,
            "ARGININE": 0,
            "D-ARGININE": 0,
            "VALINE": 0,
            "D-VALINE": 0,
            "ISOLEUCINE": 0,
            "D-ISOLEUCINE": 0,
            "LEUCINE": 0,
            "D-LEUCINE": 0,
            "HISTADINE": 0,
            "D-HISTADINE": 0,
            "PHENYLALANINE": 0,
            "D-PHENYLALANINE": 0,
            "label": "DCP",
            "value": "DCP",
            "urdu": "ڈی سی پی"
        }
    },
    {
        "qty": 1,
        "rate": 0,
        "item": {
            "DRY MATTER %": 0,
            "Energy": 0,
            "CP": 0,
            "CF": 0,
            "CALCIUM": 0,
            "P-DIG": 0,
            "P-TOTAL": 0,
            "NA": 27,
            "K": 0,
            "CL": 0,
            "LYSINE": 0,
            "D-LYSINE": 0,
            "METHIONINE": 0,
            "D-METHIONINE": 0,
            "THERIONINE": 0,
            "D-THERIONINE": 0,
            "TRYPTOPHAN": 0,
            "D-TRYPTOPHAN": 0,
            "CYSTINE": 0,
            "D-CYSTINE": 0,
            "M+C": 0,
            "D- M+C": 0,
            "ARGININE": 0,
            "D-ARGININE": 0,
            "VALINE": 0,
            "D-VALINE": 0,
            "ISOLEUCINE": 0,
            "D-ISOLEUCINE": 0,
            "LEUCINE": 0,
            "D-LEUCINE": 0,
            "HISTADINE": 0,
            "D-HISTADINE": 0,
            "PHENYLALANINE": 0,
            "D-PHENYLALANINE": 0,
            "label": "Soda",
            "value": "Soda",
            "urdu": "سوڈا"
        }
    },
    {
        "qty": 1.6,
        "rate": 0,
        "item": {
            "DRY MATTER %": 0,
            "Energy": 0,
            "CP": 0,
            "CF": 0,
            "CALCIUM": 0,
            "P-DIG": 0,
            "P-TOTAL": 0,
            "NA": 39,
            "K": 0,
            "CL": 61,
            "LYSINE": 0,
            "D-LYSINE": 0,
            "METHIONINE": 0,
            "D-METHIONINE": 0,
            "THERIONINE": 0,
            "D-THERIONINE": 0,
            "TRYPTOPHAN": 0,
            "D-TRYPTOPHAN": 0,
            "CYSTINE": 0,
            "D-CYSTINE": 0,
            "M+C": 0,
            "D- M+C": 0,
            "ARGININE": 0,
            "D-ARGININE": 0,
            "VALINE": 0,
            "D-VALINE": 0,
            "ISOLEUCINE": 0,
            "D-ISOLEUCINE": 0,
            "LEUCINE": 0,
            "D-LEUCINE": 0,
            "HISTADINE": 0,
            "D-HISTADINE": 0,
            "PHENYLALANINE": 0,
            "D-PHENYLALANINE": 0,
            "label": "Namak",
            "value": "Namak",
            "urdu": "نمک"
        }
    },
    {
        "qty": 6.15,
        "rate": 0,
        "item": {
            "DRY MATTER %": 0,
            "Energy": 0,
            "CP": 0,
            "CF": 0,
            "CALCIUM": 0,
            "P-DIG": 0,
            "P-TOTAL": 0,
            "NA": 0,
            "K": 0,
            "CL": 0,
            "LYSINE": 0,
            "D-LYSINE": 0,
            "METHIONINE": 0,
            "D-METHIONINE": 0,
            "THERIONINE": 0,
            "D-THERIONINE": 0,
            "TRYPTOPHAN": 0,
            "D-TRYPTOPHAN": 0,
            "CYSTINE": 0,
            "D-CYSTINE": 0,
            "M+C": 0,
            "D- M+C": 0,
            "ARGININE": 0,
            "D-ARGININE": 0,
            "VALINE": 0,
            "D-VALINE": 0,
            "ISOLEUCINE": 0,
            "D-ISOLEUCINE": 0,
            "LEUCINE": 0,
            "D-LEUCINE": 0,
            "HISTADINE": 0,
            "D-HISTADINE": 0,
            "PHENYLALANINE": 0,
            "D-PHENYLALANINE": 0,
            "label": "Premix",
            "value": "Premix",
            "urdu": "پری مکس"
        }
    }
]);
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
    <div>

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
      <button className="bg-white h-6 w-6 text-xs text-slate-600 active:ring hover:bg-slate-100 shadow-sm border rounded-full" onClick={()=>removeItem(index)}>X</button>
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
