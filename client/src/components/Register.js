import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="login-page d-flex justify-content-center mt-1 mb-5">
      <div className="login-form mt-5 shadow-lg rounded p-5">
        <h3 className="text-center">Welcome</h3>
        <hr />

        <Form>
          <Form.Group className="mb-2" controlId="formbasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="first name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicemail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email please" />
            <Form.Text className="text-muted">
              We will never share your email to anyone
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Password please" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formbasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="email" placeholder="Retype Password please" />
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
