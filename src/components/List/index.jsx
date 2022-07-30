import Card from "../Card";

function List({ listTransactions }) {
  if (listTransactions.length < 0) {
    return `Você ainda não possui nenhum lançamento`;
  }
  return listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
}

export default List;
