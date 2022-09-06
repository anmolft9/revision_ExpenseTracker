import Table from "react-bootstrap/Table";

export const Transactiontable = ({ transaction }) => {
  const total = transaction.reduce((acc, { type, amount }) => {
    return type === "Income" ? acc + amount : acc - amount;
  }, 0);
  console.log(total);
  return (
    <>
      {console.log(transaction)}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>{item.title}</td>
              <td className="text-danger">
                {item.type === "expense" && " - " + item.amount}
              </td>
              <td className="text-success">
                {item.type === "Income" && item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">Total : {total} </div>
    </>
  );
};
