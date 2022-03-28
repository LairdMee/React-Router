import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getInvoiceById } from "../data";

const Invoice = () => {
  const [invoice, setInvoice] = useState({});
  const { invoiceId } = useParams();
  const fetchInvoice = async () => {
    try {
      const res = await fetch(`http://localhost:3001/invoices/${invoiceId}`);
      const data = await res.json();
      setInvoice(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInvoice();
  }, [invoiceId]);

  // ternary expression
  return invoice ? (
    <div>
      <h1>Invoice: {invoice.title}</h1>
      <div>id: {invoice.id}</div>
      <div>year: {invoice.year}</div>
      <div>amount: {invoice.amount}</div>
      <div>due: {invoice.due}</div>
    </div>
  ) : (
    <div>Invalid invoice id: {invoiceId}</div>
  );
  // return (
  //   <div>
  //     <h1>Invoice: {invoice.name}</h1>
  //     <div>id: {invoice.id}</div>
  //     <div>year: {invoice.year}</div>
  //     <div>amount: {invoice.amount}</div>
  //     <div>due: {invoice.due}</div>
  //   </div>
  // );
};

export default Invoice;

//The issue encountered at the end was that the ids are stored as integers,
//but when we get the id from the params it is a string.
//So it needs to be converted to an integer before being passed to the getInvoiceById function
