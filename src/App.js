import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <body>
          <p>test</p>
        </body>
      </div>
    </div>
  );
}

export default App;
