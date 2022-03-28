import { Routes, Route, useNavigate } from "react-router-dom";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";
import Expenses from "./routes/Expenses";
import CreateInvoice from "./routes/CreateInvoice";
import EditInvoice from "./routes/EditInvoice";
import Navbar from "./navbar";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Refactor into Navbar component */}
      <Navbar />
      <main style={{ padding: "30px 0" }}>
        <div style={{ padding: "0 60px" }}>
          <button
            style={{
              position: "fixed",
              top: "140px",
              right: "25px",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/invoices">
              <Route index element={<Invoices />} />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/create" element={<CreateInvoice />} />
            <Route path="/edit/:invoiceId" element={<EditInvoice />} />
          </Routes>
        </div>
      </main>
      {/* <footer>My Footer</footer> */}
    </div>
  );
}

export default App;
