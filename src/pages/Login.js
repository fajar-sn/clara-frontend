import React from "react";
import { Button, Form, Alert, Image, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { login } from "utils/auth";
import { POST_LOGIN } from "constants/urls";
import './Login.css';
import './login.png';
import axios from "axios";
import Cookies from 'js-cookie'

const HomePage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (email || password) {
      setError(false);
    }
    return () => {};
  }, [email, password]);

  const _onSubmit = () => {
    axios.post(POST_LOGIN, {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response.data.token);

      if(response.data.role == "Lecturer") { // Role checking
        login({
          token: response.data.token,
          timeout: response.data.expires_in,
        });

        setIsLoggedIn(true);

        history.push("/dashboard");

      } else {
        setError(true);
      }
    })
    .catch(function (error) {
      setError(true);
    });
  };

  return (
    <div>
      <Container className="login">
        <Row>
          <Col>
            <Image alt="Clara" className="logo" src={require("components/ClaraLogo.png")} />
            <p>Sign into your account!</p>
            <Form>
              <Alert variant="primary">
                <span style={{ fontWeight: "bold" }}>Email: </span>
                triharsono@pens.ac.id,
                <span style={{ fontWeight: "bold" }}> Password: </span>
                password
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
              <p><Link to="/resetPassword">Forgot password?</Link></p>
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
