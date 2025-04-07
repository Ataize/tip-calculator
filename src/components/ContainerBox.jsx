import React from "react";
import iconDollar from "../assets/icon-dollar.svg";
import Fieldset from "./Fieldset";
import ContainerInput from "./ContainerInput";
import { useState } from "react";

const ContainerBox = ({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
  customTip,
  setCustomTip,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  function formatBill(value) {
    const number = Number(value);
    if (isNaN(number)) return "0.00";

    return number.toFixed(2);
  }

  const handleInput = (e) => {
    let raw = e.target.value.replace(/\D/g, "");
    let numeric = raw ? parseFloat(raw) / 100 : 0;

    setBill(numeric);
  };

  return (
    <div className="container-box">
      <div className="container-input">
        <label htmlFor="bill-input">Bill</label>
        <div className={"input-box" + (isFocused ? " focused" : "")}>
          <img src={iconDollar} alt="Icon Dollar" />
          <input
            type="text"
            id="bill-input"
            placeholder="0.00"
            value={formatBill(bill)}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.target.blur();
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
      <Fieldset
        tip={tip}
        setTip={setTip}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <ContainerInput people={people} setPeople={setPeople} />
    </div>
  );
};

export default ContainerBox;
