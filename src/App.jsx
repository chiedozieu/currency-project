import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./components/hooks/useCurrencyInfo.js";

function App() {
  const [ amount, setAmount ] = useState(0)
  const [ from, setFrom ] = useState('usd')
  const [ to, setTo ] = useState('ngn')
  const [ convertedAmount, setConvertedAmount ] = useState(0)


  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  } 


  return (
    <div
      className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat justify-center items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D)",
      }}
    >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className="w-full mb-1">
             <InputBox 
             label="from" 
             amount={amount} 
             onCurrencyChange={(currency) => setFrom(currency)} 
             onAmountChange={(amount)=> setAmount(amount)} 
             currencyOptions={options} 
             selectedCurrency={from} 
             className="border-b border-gray-300"/>
          </div>
          <div className="relative w-full h-0.5 flex justify-center items-center">
            {/* <button className="absolute -top-2.5 px-4 bg-white text-gray-700" type="submit">Swap</button> */}
            <button onClick={swap} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white px-2 py-0.5 cursor-pointer hover:bg-blue-500" type="submit">Swap</button>
          </div>
           <div className="w-full mb-1">
             <InputBox 
             label="to" 
             amount={convertedAmount} 
             onCurrencyChange={(currency) => setTo(currency)}  
             amountDisabled
             currencyOptions={options} 
             selectedCurrency={to} 
             className="border-b border-gray-300"/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-5 cursor-pointer hover:bg-blue-600">Convert</button>
        </form>
      </div>
    </div>
   
    </div>
  );
}

export default App;
