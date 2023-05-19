import { useEffect, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";
import LoginRouter from "./routes/LoginRouter";
import './App.css'

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <div className="App">
    <AuthContext.Provider value={{ log, dispatch }} >
      <LoginRouter  />
    </AuthContext.Provider>
    </div>
  );
};

export default App;