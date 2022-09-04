import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { TransactionForm } from "./form/TransactionForm";
import { Transactiontable } from "./layout/transaction-table/TransactionTable";
import { MainLayout } from "./layout/MainLayout";
import { getTransaction } from "../helpers/axiosHelper";

export const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { status, message, result } = await getTransaction();
    status === "success" && result.length && setTransaction();
    console.log(data);
  };
  return (
    <MainLayout>
      <h3 className="mt-4 text-center">Dashboard</h3>
      <Row>
        {/* <h3 className="mt-5">Dashboard</h3> */}
        <TransactionForm />
        <hr className="m-5" />
        <Transactiontable />
      </Row>

      {/* form section */}

      {/* table section */}
    </MainLayout>
  );
};
