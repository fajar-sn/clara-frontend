import React from "react";
import { Button, Form, Alert, Image, Container, Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "utils/auth";
import './Login.css';
import './login.png';

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
      <Container className="login">
        <Row>
          <Col>
            <Image alt="Clara" className="logo" src={require("components/ClaraLogo.png")} />
            <p>Sign into your account!</p>
            <Form>
              <Alert variant="primary">
                <span style={{ fontWeight: "bold" }}>Email: </span>
                clara@email.com,
                <span style={{ fontWeight: "bold" }}> Password: </span>
                123456
              </Alert>
              {error && <Alert variant="danger">Email atau password salah!</Alert>}
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <p><Link to>Forgot password?</Link></p>
              <Button id="btn-login" variant="primary" onClick={_onSubmit}>
                SIGN IN
              </Button>
            </Form>
          </Col>
          <Col xs={7}>
            <Image alt="Login" className="loginImage" src={require("./login.png")}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
