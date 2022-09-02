import React from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";

export const TransactionForm = () => {
  return (
    <div className="mt-5">
      <Form>
        <Row className="g-2">
          <Col md="2">
            <Form.Select defaultValue="">
              <option value="">Choose...</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Form.Select>
          </Col>
          <Col md="5">
            <Form.Control name="title" placeholder="Title" />
          </Col>
          <Col md="2">
            <Form.Control type="number" name="amount" placeholder="Amount" />
          </Col>
          <Col md="2">
            <Button type="submit">Add Transaction</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
