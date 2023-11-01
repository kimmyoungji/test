import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [res, setRes] = useState("");

  async function onClickHandler() {
    if (res) {
      setRes(undefined);
      return;
    }
    const result = await axios.get("http://localhost:5002", {
      method: "GET", // *GET, POST, PUT, DELETE 등
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        Origin: "http://localhost:3001",
        credentials: "include",
        withCredentials: true,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    setRes(result.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>띵거의 블로그!</h2>
        <p>호호호호호호호호호호호호호호</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClickHandler}>눌러봐라잉!</button>
        <p>{res}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
