import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Row } from "react-bootstrap";
import { TransactionForm } from "./form/TransactionForm";
import { Transactiontable } from "./layout/transaction-table/TransactionTable";
import { MainLayout } from "./layout/MainLayout";
import {
  deleteTransaction,
  getTransaction,
  postNewTransaction,
} from "../helpers/axiosHelper";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchDataActionddd } from "../pages/transaction/transactionAction.js";

export const Dashboard = ({ isLoggedIn }) => {
  const [transaction, setTransaction] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataActionddd());
    // console.log(fetchDataActionddd());
  }, []);
  const fetchData = async () => {
    const { status, message, result } = await getTransaction();
    status === "success" && setTransaction(result);
  };

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("somethingELse"));

    const userId = user._id;
    const { status, message } = await postNewTransaction({ ...form, userId });
    status === "success" && fetchData();
    toast[status](message);
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this transaction")) {
      return;
    }
    const { status, message } = await deleteTransaction(_id);
    status === "success" && fetchData();
    toast[status](message);
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <h3 className="mt-4 text-center">Dashboard</h3>
      <Row>
        {/* <h3 className="mt-5">Dashboard</h3> */}
        <TransactionForm postData={postData} />
        <hr className="m-5" />
        <Transactiontable
          transaction={transaction}
          handleOnDelete={handleOnDelete}
        />
      </Row>

      {/* form section */}

      {/* table section */}
    </MainLayout>
  );
};
