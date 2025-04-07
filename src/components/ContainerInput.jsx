import React from "react";
import iconPerson from "../assets/icon-person.svg";
import { useState } from "react";

const ContainerInput = ({ people, setPeople }) => {
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="container-input">
      <label htmlFor="people-number">
        Number of People{" "}
        {error && <span className="error-msg">Can't be zero</span>}
      </label>

      <div className={"input-box" + (isFocused ? " focused" : "")}>
        <img src={iconPerson} alt="Icon Person" />
        <input
          type="text"
          onChange={(e) => {
            let raw = e.target.value.replace(/\D/g, "");
            let numeric = raw ? parseFloat(raw) : 0;

            if (numeric <= 0) {
              setError("Can't be zero");
              console.log("cant be zero");
            } else {
              setError("");
            }
            setPeople(numeric);
            console.log(numeric);
          }}
          value={people}
          name=""
          id="people-input"
          placeholder="1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default ContainerInput;
