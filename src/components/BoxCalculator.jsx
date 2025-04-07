const BoxCalculator = ({ bill, tip, people, onReset }) => {
  const locale = "en-US";

  const calculateTipPerPerson = () => {
    if (people === 0) {
      return 0;
    }
    return (bill * (tip / 100)) / people;
  };

  const calculateTotalPerPerson = () => {
    if (people === 0) return 0;
    return bill / people + calculateTipPerPerson();
  };

  const formatCurrency = (value) =>
    value.toLocaleString(locale, {
      style: "currency",
      currency: "USD",
    });

  return (
    <form className="box">
      <div className="calculation-box">
        <div>
          <p>Tip Amount</p>
          <small>/ person</small>
        </div>
        <span id="person-value">{formatCurrency(calculateTipPerPerson())}</span>
      </div>
      <div className="calculation-box">
        <div>
          <p>Total</p>
          <small>/ person</small>
        </div>
        <span id="total-value">
          {formatCurrency(calculateTotalPerPerson())}
        </span>
      </div>

      <button
        type="reset"
        onClick={onReset}
        disabled={bill === 0 && tip === 0 && people <= 1}
      >
        Reset
      </button>
    </form>
  );
};

export default BoxCalculator;
