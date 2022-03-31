const invoices = [
  {
    id: 1,
    title: "Learning React",
    year: 2022,
    amount: "$10.00",
    due: "19/03/2022",
  },
  {
    id: 2,
    title: "Atomic Habits",
    year: 2020,
    amount: "$20.00",
    due: "19/12/2021",
  },
  {
    id: 3,
    title: "The Garden of the Finzi Continis",
    year: 1940,
    amount: "$14.99",
    due: "21/03/2022",
  },
];

// invoices/
export const getInvoices = () => {
  return invoices;
};

// invoices/<id>
export const getInvoiceById = (id) => {
  return invoices.find((invoice) => invoice.id === id);
};
