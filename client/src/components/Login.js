import React from "react";
import { Button, Form } from "react-bootstrap";

export const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center mt-5">
      <div className="login-form mt-5 shadow-lg rounded p-3">
        <h3>Welcome</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Your Email ID please" />
            <Form.Text className="text-muted">
              We will never share your email with others,secret
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Password please" />
          </Form.Group>
          <Button variant="primary" type="submit" className="p-1 ">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
