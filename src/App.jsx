import { useState } from "react";
import RenderPage from "./components/RenderPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <RenderPage
        isLoggedIn={isLoggedIn}
        login={() => setIsLoggedIn(true)}
        logout={() => setIsLoggedIn(false)}
      />
    </div>
  );
}

export default App;
