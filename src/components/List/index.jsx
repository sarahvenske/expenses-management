import Card from "../Card";

function List({ listTransactions, removeItem }) {
  if (listTransactions.length < 0) {
    return `Você ainda não possui nenhum lançamento`;
  }
  return listTransactions.map((transaction, index) => (
    <Card transaction={transaction} removeItem={removeItem} key={index} />
  ));
}

export default List;
