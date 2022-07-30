import "./style.css";
import NuKenzieLogin from '../../images/NuKenzieLogin.svg'
import LoginImage from '../../images/LoginImage.svg'

function LoginPage({ login }) {
  return (
    <main className="loginPageMain">
      <section className="loginSection1">
        <div>
          <img src={NuKenzieLogin} alt="logonukenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <h3>de forma rápida e segura </h3>
          <button onClick={login}>Entrar</button>
        </div>
      </section>
      <section className="loginSection2">
        <img src={LoginImage} alt="imagelogin" />
      </section>
    </main>
  );
}

export default LoginPage;


