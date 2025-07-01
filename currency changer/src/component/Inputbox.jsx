import React from "react"

function Inputbox({label,amount , onAmountchange, onCurrencychange, currencyoption=[],selectCurrency = "usd",amountDisable = false, currencyDisable = false , className=""}){
     

  return(
    <>
    <div className={`bg-white-400 p-3 rounded-md text-sm flex ${className}`} >
        <div className="w-1/2" >
           <label className="text-black/40 mb-2 inline-block">
           {label}
           </label>
           <input
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="amonut"
            disabled= {amountDisable}
            value={amount}
            onChange={(e)=>{onAmountchange && onAmountchange(Number(e.target.value))}}
          
           />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right" >
          <p className="text-black/40 mb-2 w-full" >currency type
          </p>
          <select className="rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e)=>{onCurrencychange && onCurrencychange(e.target.value)}} >
            {currencyoption.map((currency)=>(
                <option value={currency} key={currency}  >{currency}   </option>
            ))}
          </select>

        </div>

    </div>
    </>
  )

}
export default Inputbox