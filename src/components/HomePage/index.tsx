import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Link to="/page-1">Page 1</Link></div>
        <div><Link to='/Login-Page'>Login Page</Link></div>
        <div><Link to='/SignUp-Page'>SignUp Page</Link></div>
        <div><Link  to='Button'>Button</Link></div>
      </header>
    </div>
  );
}

export default App;
