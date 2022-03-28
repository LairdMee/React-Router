import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";

const EditInvoice = () => {
  const { invoiceId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [invoice, setInvoice] = useState({});

  // form submission function
  const submitForm = async (e) => {
    e.preventDefault();
    // make a api request to update the form
    await fetch(`http://localhost:3001/invoices/${invoiceId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(invoice),
    });
    setSubmitted(true);
  };

  // load the form from the server
  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await fetch(`http://localhost:3001/invoices/${invoiceId}`);
        const data = await res.json();
        setInvoice(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInvoice();
    setSubmitted(false);
  }, [invoiceId]);

  return (
    <div>
      {submitted ? (
        <h2>Invoice Updated.</h2>
      ) : (
        <InvoiceForm
          submitBtnText="Save"
          invoice={invoice}
          setInvoice={setInvoice}
          submitForm={submitForm}
          description="This form will update your invoice"
        />
      )}
    </div>
  );
};

export default EditInvoice;
