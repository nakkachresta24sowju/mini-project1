import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/page-1">Page 1</Link>
        <Link to='/Login-Page'>Login Page</Link>
        <Link to='/SignUp-Page'>SignUp Page</Link>
      </header>
    </div>
  );
}

export default App;
