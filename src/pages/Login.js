import React from "react";
import { Button, Form, Alert, Image, Container, Row, Col } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { login } from "utils/auth";
import { POST_LOGIN } from "constants/urls";
import './Login.css';
import loginPicture from '../assets/login.png';
import axios from "axios";
import claraLogo from '../assets/logo.png'
import googlePlayBadge from '../assets/google-play-badge.svg'
import windowsBadge from '../assets/windows-badge.png'

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

            <Image alt="Clara" className="logo" src={claraLogo} fluid width={"250px"}/>
            <p>Sign into your account!</p>

            <Form className="mb-5">
              {error && <Alert variant="danger">Login Failed. Please check your input again.</Alert>}
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button id="btn-login" variant="primary" onClick={_onSubmit}>
                SIGN IN
              </Button>
            </Form>

            <a rel="noreferrer noopener" target="_blank" href="https://drive.google.com/file/d/15Ql1UN8UbxWw0rx4So4Q25e3lboMFNkc/view?usp=sharing">
            <Image src={googlePlayBadge} width={"160px"} ></Image>
            </a>

            <a rel="noreferrer noopener" target="_blank" href="https://drive.google.com/file/d/1Of0S6u_4cw8xiYWbGhrYMOtSJX_cyPoS/view?usp=sharing">
            <Image src={windowsBadge} width={"155px"} ></Image>
            </a>

          </Col>
          <Col xs={7}>
            <Image alt="Login" className="loginImage" src={loginPicture}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
