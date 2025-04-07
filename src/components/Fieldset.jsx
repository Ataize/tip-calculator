import React from "react";

const Fieldset = ({ tip, setTip, customTip, setCustomTip }) => {
  const tips = [5, 10, 15, 25, 50];

  const handleRadioChange = (value) => {
    setTip(value);
    setCustomTip("");
  };

  const handleCustomInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCustomTip(value);
    setTip(value ? parseInt(value) : 0);
  };

  const handleBlur = () => {
    if (customTip) {
      setCustomTip(`${parseInt(customTip)}%`);
    }
  };

  const handleFocus = () => {
    setCustomTip((prev) => prev.replace("%", ""));
  };

  return (
    <fieldset>
      <legend>Select Tip %</legend>
      <div className="tip-options">
        {tips.map((tipValue, index) => (
          <label
            key={index}
            className={`radio ${tip == tipValue ? "active" : ""}`}
          >
            <input
              type="radio"
              name="tip"
              value={tipValue}
              checked={tip == tipValue}
              onChange={() => handleRadioChange(tipValue)}
            />
            {tipValue}%
          </label>
        ))}

        <label className={`radio custom ${customTip ? "custom-selected" : ""}`}>
          <input
            className={customTip ? "custom-selected" : ""}
            type="text"
            placeholder="Custom"
            value={customTip}
            onChange={handleCustomInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default Fieldset;
