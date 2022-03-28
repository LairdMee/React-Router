import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="app-nav">
      <h1 id="nav-header">Bookkeeper</h1>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Link className="nav-link" to="/">
          <div>Home</div>
        </Link>
        <Link className="nav-link" to="/invoices">
          Invoices
        </Link>
        <Link className="nav-link" to="/expenses">
          Expenses
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
