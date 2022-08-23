import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postNewUser } from "../helpers/axiosHelper.js";
import { toast } from "react-toastify";

export const Register = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPass: "",
  };
  const [form, setForm] = useState(initialState);
  const [resp, setResp] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Register");
    // console.log(form);
    const { confirmPass, ...rest } = form;
    if (confirmPass != rest.password) {
      return alert("password doesnot match");
    }
    const { status, message } = await postNewUser(rest);
    setResp({ status, message });

    toast[status](message);
    status === "success" && setForm(initialState);
  };

  return (
    <div className="login-page d-flex justify-content-center mt-1 mb-5">
      <div className="login-form mt-5 shadow-lg rounded p-5">
        <h3 className="text-center">Register New User</h3>
        <hr />

        <Form onSubmit={handleOnSubmit}>
          {resp.message && (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          )}

          <Form.Group className="mb-2" controlId="formbasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="fname"
              onChange={handleOnChange}
              name="fname"
              value={form.fname}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="lname"
              onChange={handleOnChange}
              name="lname"
              value={form.lname}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicemail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email please"
              onChange={handleOnChange}
              name="email"
              value={form.email}
            />
            <Form.Text className="text-muted">
              We will never share your email to anyone
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password please"
              onChange={handleOnChange}
              name="password"
              value={form.password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              name="confirmPass"
              type="password"
              placeholder="Retype Password please"
              onChange={handleOnChange}
              value={form.confirmPass}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="p-1 ">
            Register
          </Button>
          <div className="text-end">
            Already registered?<Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
