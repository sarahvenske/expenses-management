import { useState } from "react";

import Form from "../Form";
import List from "../List";
import LoginPage from "../LoginPage";
import TotalMoney from "../TotalMoney";

import "./style.css"
import NuKenzie from '../../images/NuKenzie.svg'

function RenderPage({ isLoggedIn, logout, login }) {
  const [listTransactions, setListTransactions] = useState([]);

  console.log(listTransactions)
  function updateList(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }

  function removeItem(removeItem){
    const removedList = listTransactions.filter((item) => {
      return item !== removeItem;
    })
    setListTransactions(removedList)
  }

  if (isLoggedIn === true) {
    return (
      <>
        <header className="header">
          <img src={NuKenzie}alt="nukenzielogo" />
          <button onClick={logout}>Inicio</button>
        </header>
        <main className="main">
          <section>
              <Form updateList={updateList} />
            <div>
              <TotalMoney listTransactions={listTransactions} />
            </div>
          </section>
          <section>
            <div className="div_nav">
              <h3>Resumo Financeiro</h3>
              <nav>
                <button className="button_all">Todos</button>
                <button className="button_income">Entradas</button>
                <button className="button_outcome">Despesas</button>
              </nav>
            </div>
              <List listTransactions={listTransactions} removeItem={removeItem}/>
          </section>
        </main>
      </>
    );
  }
  return (
    <div>
      <LoginPage login={login} />
    </div>
  );
}

export default RenderPage;
