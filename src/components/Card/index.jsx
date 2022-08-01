import "./style.css"
import { MdDelete } from "react-icons/md"
 
function Card({ transaction, removeItem }) {
  return (
    <div className="card_container">
      <div className="card_title">
        <h3>{transaction.description}</h3>
        <div>R$ {transaction.value}</div>
        <button onClick={() => removeItem(transaction)}><MdDelete/></button>
      </div>
      <div className="transaction_type">{transaction.type}</div>
    </div>
  );
}

export default Card;

//Adicionar condicional de cores no card (verde e cinza)
