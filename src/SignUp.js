import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import app from "./firebase.init";
import SocialLogin from "./SocialLogin";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/home");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setError("your two password dosenot match");
      return;
    }
    if (password.length < 5) {
      setError("password must 6 characters");
    }
    createUserWithEmailAndPassword(email, password);
    varifyEmail();
  };

  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("send email varifacation");
    });
  };

  return (
    <div>
      <div className="w-50 mx-auto">
        <h1>Sign Up</h1>
        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {/* this is for confarm pass */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleConfirmPasswordBlur}
              type="password"
              placeholder=" Confarm Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p style={{ color: "red" }}>{error}</p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Alrady have an account <Link to="/login"> Login Now</Link>
        </p>
        <hr />
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
