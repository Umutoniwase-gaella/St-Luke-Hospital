function Billing() {
  const bills = [
    {
      id: 1,
      patient: "John Doe",
      service: "Consultation",
      amount: 20,
      status: "Pending",
    },
    {
      id: 2,
      patient: "Alice Uwase",
      service: "Laboratory Test",
      amount: 35,
      status: "Paid",
    },
    {
      id: 3,
      patient: "David Mugisha",
      service: "Medicine",
      amount: 15,
      status: "Pending",
    },
    {
      id: 4,
      patient: "Grace Mukamana",
      service: "Consultation",
      amount: 20,
      status: "Paid",
    },
  ];

  return (
    <div className="page">
      <h1>Billing</h1>

      <p>View and manage patient hospital bills and payments.</p>

      <div className="billing-container">
        {bills.map((bill) => (
          <div className="billing-card" key={bill.id}>
            <h2>{bill.patient}</h2>

            <p>
              <strong>Bill ID:</strong> {bill.id}
            </p>

            <p>
              <strong>Service:</strong> {bill.service}
            </p>

            <p>
              <strong>Amount:</strong> ${bill.amount}
            </p>

            <p>
              <strong>Payment Status:</strong> {bill.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;