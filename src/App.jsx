import "./App.css";
import Header from "./components/Header";
import ContainerBox from "./components/ContainerBox";
import { useState } from "react";
import BoxCalculator from "./components/BoxCalculator";
function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [customTip, setCustomTip] = useState("");

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(1);
    setCustomTip("");
  };

  return (
    <>
      <Header />
      <section className="container">
        <ContainerBox
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
          customTip={customTip}
          setCustomTip={setCustomTip}
          onReset={handleReset}
        />
        <BoxCalculator
          bill={bill}
          tip={tip}
          people={people}
          onReset={handleReset}
        />
      </section>
    </>
  );
}

export default App;
