import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleImputCange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSumbit = async (e) => {
    console.log("email:", formData.email)
    console.log("name:", formData.name)
    console.log("password:", formData.password)
  }

  return (
    <div className="center-form">
        <Form onSubmit={handleSumbit}>
        <h1>Signup</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleImputCange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicname">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleImputCange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicpassword">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleImputCange}
          />
        </Form.Group>
        <Button variant="dark" type="sumbit" className="w-100">
          Signup
        </Button>
        </Form> 
    </div>
  );
};

export default Signup;
