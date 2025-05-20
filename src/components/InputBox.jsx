import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",



}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex gap-2 ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor="currency">
          {label}
        </label>
        <input
          type="number"
          className="w-full outline-none bg-transparent py-1.5"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          name=""
          id="currency"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          name=""
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 bg-gray-100 cursor-pointer outline-none py-1"
          disabled={currencyDisabled}
          id=""
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
