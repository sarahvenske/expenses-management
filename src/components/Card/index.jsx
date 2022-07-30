function Card({ transaction }) {
  return (
    <div>
      <div>
        <h3>{transaction.description}</h3>
        <div>{transaction.value}</div>
        <button>Excluir</button>
      </div>
      <div>{transaction.type}</div>
    </div>
  );
}

export default Card;

//Adicionar condicional de cores no card (verde e cinza)
