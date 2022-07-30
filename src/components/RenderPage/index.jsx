import { useState } from "react";

import Form from "../Form";
import List from "../List";
import LoginPage from "../LoginPage";
import TotalMoney from "../TotalMoney";

function RenderPage({ isLoggedIn, logout, login }) {
  const [listTransactions, setListTransactions] = useState([]);

  function updateList(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }

  if (isLoggedIn === true) {
    return (
      <>
        <header>
          <nav>
            <img src="./public/NuKenzie.svg" alt="" />
            <button onClick={logout}>Sair</button>
          </nav>
        </header>
        <main>
          <section>
            <Form updateList={updateList} />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <section>
            <List listTransactions={listTransactions} />
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
