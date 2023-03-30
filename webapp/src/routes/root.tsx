import React from "react";
import logo from "./root.svg";
import "./root.css";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to={`wall`}>Wall</Link>
          <Link to={`chat`}>Chat</Link>
        </header>
      </div>
    </>
  );
}
