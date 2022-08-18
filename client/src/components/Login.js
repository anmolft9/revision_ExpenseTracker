import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
  };

  return (
    <div className="login-page d-flex justify-content-center mt-5">
      <div className="login-form mt-5 shadow-lg rounded p-5">
        <h3 className="text-center">Welcome</h3>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Your Email ID please"
            />
            <Form.Text className="text-muted">
              We will never share your email with others,secret
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formbasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              ref={passwordRef}
              type="password"
              placeholder="Password please"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="p-1 ">
            Login
          </Button>
          <div className="text-end">
            Not registered?<Link to="/register">Registration</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
