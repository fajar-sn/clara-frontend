import React from "react";
import { Button, Container, Navbar, Form, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "utils/auth";

const HomePage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (email || password) {
      setError(false);
    }
    return () => {};
  }, [email, password]);

  const _onSubmit = () => {
    if (email === "clara@email.com" && password === "123456") {
      login({
        email: email,
      });
      setIsLoggedIn(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {isLoggedIn && <Redirect to="/dashboard" />}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand color="white">Log In</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Form>
          <Alert variant="primary">
            <span style={{ fontWeight: "bold" }}>Email: </span>
            clara@email.com,
            <span style={{ fontWeight: "bold" }}> Password: </span>
            123456
          </Alert>
          {error && <Alert variant="danger">Email atau password salah!</Alert>}

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={_onSubmit}>
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default HomePage;
