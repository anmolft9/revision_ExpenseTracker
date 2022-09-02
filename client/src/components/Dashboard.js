import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { TransactionForm } from "./form/TransactionForm";
import { MainLayout } from "./layout/MainLayout";

export const Dashboard = () => {
  return (
    <MainLayout>
      <h3 className="mt-4 text-center">Dashboard</h3>
      <Row>
        {/* <h3 className="mt-5">Dashboard</h3> */}
        <TransactionForm />
      </Row>

      {/* form section */}

      {/* table section */}
    </MainLayout>
  );
};
