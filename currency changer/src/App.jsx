import { useState } from 'react'

import './App.css'
import Inputbox from './component/Inputbox'
import useCurrencyChanger from './hooks/usecurrencychanger'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamonut] = useState(0)
  const currencyinfo = useCurrencyChanger(from)

  const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedamonut(amount)
    setamount(convertedamount)

  }
 const convert = ()=>{
   setconvertedamonut(amount * currencyinfo[to])
 }  

  return (
   <>

   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    // style={backgroundImage: url("https://images.unsplash.com/photo-1750711642160-efc6e052751a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D")}
    >
       <div className='w-full ' >
           <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30' >
              <form
               onSubmit={(e)=>{
                e.preventDefault();
                convert();

              }}>
                   <div className='w-full mb-1 ' >
                     <Inputbox
                        label="form"
                        amount={amount}
                        currencyoption={options}
                        onCurrencychange={(currency)=>setamount(amount)}
                        selectCurrency={from}
                        onAmountchange={(amount)=>{
                          setamount(amount)
                        }}
                      />  

                   </div>
                   <div className='relative w-full h-0.5' >
                      <button
                        type='button'
                        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                      >swap</button>

                   </div>
                   <div className='w-full mt-1 mb-4' >
                     <Inputbox
                        label="to"
                        amount={convertedamount}
                        currencyoption={options}
                        onCurrencychange={(currency)=>setto(currency)}
                        selectCurrency={from}
                        amountDisable
                        
                      /> 
                   </div>
                   <button type='submit' className='w-full bg-blue-500 text-white px-4 py-3 rounded-lg'  >
                    convert {from.toUpperCase()} to {to.toUpperCase()}
                   </button>

                </form> 

           </div>

       </div>

   </div>
   </>
  )
}

export default App
