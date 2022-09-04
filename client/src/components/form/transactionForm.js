import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { postNewTransaction } from "../../helpers/axiosHelper";

export const TransactionForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    const user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(user);
    const userId = user._id;
    const { status, message } = await postNewTransaction({ ...form, userId });
    toast[status](message);
  };

  return (
    <div className="mt-5">
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md="2">
            <Form.Select
              defaultValue=""
              name="type"
              onChange={handleOnChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Form.Select>
          </Col>
          <Col md="5">
            <Form.Control
              name="title"
              placeholder="Title"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Form.Control
              type="number"
              name="amount"
              placeholder="Amount"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Button type="submit">Add Transaction</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
