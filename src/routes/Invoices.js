import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
// import { getInvoices } from "../data";

const Invoices = () => {
  const navigate = useNavigate();
  const params = useParams();
  // Step 1: create an empty state for the data
  const [invoices, setInvoices] = useState([]);

  // Step 2: fetch the data from the server once the component mounted
  const fetchInvoices = async () => {
    try {
      const res = await fetch("http://localhost:3001/invoices");
      const data = await res.json();
      setInvoices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // api call
    // fetch("http://localhost:3001/invoices")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setInvoices(data);
    //   })
    //   .catch((error) => console.log(error));
    fetchInvoices();
  }, []);

  // const invoices = getInvoices();
  const removeInvoice = async (e, id) => {
    e.stopPropagation();
    await fetch(`http://localhost:3001/invoices/${id}`, {
      method: "DELETE",
    });
    const invoicesAfter = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(invoicesAfter);
    console.log(params);
    if (id === parseInt(params.invoiceId, 10)) {
      navigate("/invoices");
    }
  };

  const goToEditRoute = (e, id) => {
    e.stopPropagation();
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Title</th>
            <th style={{ textAlign: "left" }}>Due Date</th>
            <th style={{ textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                key={invoice.id}
                onClick={() => navigate(`/invoices/${invoice.id}`)}
              >
                <td>{invoice.title}</td>
                <td>{invoice.due}</td>
                <td>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={(e) => removeInvoice(e, invoice.id)}
                  >
                    Remove
                  </button>
                  <button onClick={(e) => goToEditRoute(e, invoice.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button style={{ marginTop: "20px" }} onClick={() => navigate("/create")}>
        Create New Invoice
      </button>
      <Outlet />
    </>
  );
};

export default Invoices;
