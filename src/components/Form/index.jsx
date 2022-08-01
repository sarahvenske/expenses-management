import { useState } from "react";
import "./style.css"

function Form({ updateList }) {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeInput, setTypeInput] = useState("Entrada");

  function saveTransaction() {
    updateList({
      description: descriptionInput,
      type: typeInput,
      value: parseFloat(valueInput),
    });
    setDescriptionInput("");
    setValueInput("");
    setTypeInput("Entrada");
  }

  return (
    <form action="" onSubmit={(event) => event.preventDefault()}>
      <div className="form_description">
        <label for="description">Descrição</label>
        <input
          type="text"
          value={descriptionInput}
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescriptionInput(event.target.value)}
        />
      </div>
      <div className="form_value_type">
        <div className="form_value">
          <label for="value">Valor</label>
          <input
            type="text"
            id="value"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          />
        </div>
        <div className="form_type">
          <label for="value_type">Tipo de valor</label>
          <select
            name="value_type"
            id="value_type"
            value={typeInput}
            onChange={(event) => setTypeInput(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="form_button" onClick={saveTransaction}>Inserir Valor</button>
    </form>
  );
}

export default Form;
