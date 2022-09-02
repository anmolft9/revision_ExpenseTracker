import Table from "react-bootstrap/Table";

export const Transactiontable = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>22-08-2022</td>
            <td>Salary</td>
            <td></td>
            <td className="text-success">$900</td>
          </tr>
          <tr>
            <td>2</td>
            <td>22-08-2022</td>
            <td>Shopping</td>
            <td className="text-danger">$500</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end">Total : $ 300</div>
    </>
  );
};
