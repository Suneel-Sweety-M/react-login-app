import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Home from "./Home";

function App() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" && <Login onFormSwitch={toggleForm} /> 
      }
      {
        currentForm === "register" && <Register onFormSwitch={toggleForm} />
      }
      {
        currentForm === "home" && <Home onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;