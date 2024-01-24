import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
const [amount ,setAmount]=useState(0);
const [from,setFrom]=useState("usd");
const [to,setTo]=useState("inr");
const [convertedAmount,setConvertedAmount]=useState(0);
const currencyInfo=useCurrencyInfo(from)
const options=Object.keys(currencyInfo)
const swap=()=>{
     const temp=from
     from=to
     to=temp
     setFrom(from)
     setTo(to)
     setConvertedAmount()
} 

  return (
    <>
      
            <h1 className="text-3xl bg-orange-600 ">Currency Convertor</h1>

    </>
  )
}

export default App
