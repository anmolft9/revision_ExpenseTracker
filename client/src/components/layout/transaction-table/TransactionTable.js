import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const Transactiontable = ({ transaction, handleOnDelete }) => {
  const total = transaction.reduce((acc, { type, amount }) => {
    return type === "Income" ? acc + amount : acc - amount;
  }, 0);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.title}</td>
              <td className="text-danger">
                {item.type === "expense" && " - " + item.amount}
              </td>
              <td className="text-success">
                {item.type === "Income" && item.amount}
              </td>
              <td className="text-danger">
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">Total : {total} </div>
    </>
  );
};
