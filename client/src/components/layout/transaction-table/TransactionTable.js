import Table from "react-bootstrap/Table";

export const Transactiontable = ({ transaction }) => {
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
            <tr>
              <td>1</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>{item.title}</td>
              <td>{item.type === "income" && item.amount}</td>
              <td>{item.type === "expense" && item.amount}</td>
            </tr>
          ))}
          <td>22-08-2022</td>
          <td>{}</td>
          <td></td>
          <td className="text-success">$900</td>
        </tbody>
      </Table>
      <div className="text-end">Total : $ 300</div>
    </>
  );
};
