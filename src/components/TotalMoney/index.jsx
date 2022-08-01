import "./style.css"

function TotalMoney({ listTransactions }) {
  const reducedValue = listTransactions.reduce((previousValue, actualValue) => {
    return previousValue + actualValue.value;
  }, 0);
  return (
    <div className="total_container">
      <div className="div_1">
        <h3>Valor Total</h3>
        <div>R$ {reducedValue}</div>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
