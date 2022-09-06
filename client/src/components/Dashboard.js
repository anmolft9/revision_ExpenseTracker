import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { TransactionForm } from "./form/TransactionForm";
import { Transactiontable } from "./layout/transaction-table/TransactionTable";
import { MainLayout } from "./layout/MainLayout";
import { getTransaction, postNewTransaction } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { status, message, result } = await getTransaction();
    status === "success" && result.length && setTransaction(result);

    console.log(result);
  };

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(user);
    const userId = user._id;
    const { status, message } = await postNewTransaction({ ...form, userId });
    status === "success" && fetchData();
    toast[status](message);
  };
  return (
    <MainLayout>
      <h3 className="mt-4 text-center">Dashboard</h3>
      <Row>
        {/* <h3 className="mt-5">Dashboard</h3> */}
        <TransactionForm postData={postData} />
        <hr className="m-5" />
        <Transactiontable transaction={transaction} />
      </Row>

      {/* form section */}

      {/* table section */}
    </MainLayout>
  );
};
