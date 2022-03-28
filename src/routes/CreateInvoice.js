import React, { useState } from "react";
import InvoiceForm from "../components/InvoiceForm";

const CreateInvoice = () => {
  const [submitted, setSubmitted] = useState(false);
  const [newInvoice, setInvoice] = useState({
    title: "",
    year: 2022,
    amount: 0,
    due: "11/03/2022",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    // make a POST request to create the new invoice in the server
    const res = await fetch(`http://localhost:3001/invoices/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newInvoice),
    });
    const data = await res.json();
    console.log("new invoice from server", data);
    setInvoice({
      title: "",
      year: 2022,
      amount: 0,
      due: "",
    });
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h1>Form Submitted Successfully</h1>
          <button onClick={() => setSubmitted(false)}>
            Add Another Invoice
          </button>
        </div>
      ) : (
        <InvoiceForm
          submitBtnText="Create"
          invoice={newInvoice}
          setInvoice={setInvoice}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default CreateInvoice;
