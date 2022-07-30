import { useState } from "react";

function Form({ updateList }) {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeInput, setTypeInput] = useState("");

  function saveTransaction() {
    updateList({
      description: descriptionInput,
      type: valueInput,
      value: typeInput,
    });
    setDescriptionInput("");
    setValueInput("");
    setTypeInput("");
  }

  return (
    <form action="" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label for="description">Descrição</label>
        <input
          type="text"
          value={descriptionInput}
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescriptionInput(event.target.value)}
        />
      </div>
      <div>
        <label for="value">Valor</label>
        <input
          type="text"
          id="value"
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />
        <label for="value_type">Tipo de valor</label>
        <select
          name="value_type"
          id="value_type"
          value={typeInput}
          onChange={(event) => setValueInput(event.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saída">Saída</option>
        </select>
      </div>
      <button onClick={saveTransaction}>Inserir Valor</button>
    </form>
  );
}

export default Form;
