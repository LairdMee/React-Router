import React from "react";
import PropTypes from "prop-types";

const InvoiceForm = ({
  submitBtnText,
  submitForm,
  invoice,
  setInvoice,
  description,
}) => {
  function updateInput(e) {
    const updatedInvoice = {
      ...invoice,
      [e.target.name]: e.target.value,
    };
    setInvoice(updatedInvoice);
  }

  return (
    <form onSubmit={submitForm} className="invoice-form">
      <div>
        <h5 className="invoice-form-label">Invoice Title</h5>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={invoice.title}
          onChange={updateInput}
        />
      </div>
      <div>
        <h5 className="invoice-form-label">Year</h5>
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={invoice.year}
          onChange={updateInput}
        />
      </div>
      <div>
        <h5 className="invoice-form-label">Amount</h5>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={invoice.amount}
          onChange={updateInput}
        />
      </div>
      <div>
        <h5 className="invoice-form-label">Due</h5>
        <input
          type="text"
          name="due"
          placeholder="Due"
          value={invoice.due}
          onChange={updateInput}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "20px",
        }}
      >
        <button type="submit">{submitBtnText}</button>
      </div>
      <div style={{ height: "50px", background: "white", marginTop: "20px" }}>
        {description}
      </div>
    </form>
  );
};

InvoiceForm.defaultProps = {
  description: "This is an Invoice Form",
};

InvoiceForm.propTypes = {
  submitBtnText: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired,
  setInvoice: PropTypes.func.isRequired,
  description: PropTypes.string,
};

export default InvoiceForm;
