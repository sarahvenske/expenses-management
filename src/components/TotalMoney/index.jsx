function TotalMoney({ listTransactions }) {
  const reducedValue = listTransactions.reduce((previousValue, actualValue) => {
    return actualValue + previousValue.value;
  }, 0);
  return (
    <div>
      <div>
        <h3>Valor Total</h3>
        <div>{reducedValue}</div>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
