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
        <Row>
          <Col>
            <DropdownButton
              id="dropdown-basic-button"
              title="Choose Transaction Type"
            >
              <Dropdown.Item href="#/action-1">Income</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Expense</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          <Col>
            <Button>Add Transaction</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
