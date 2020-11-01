import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="p-3" fluid={true}>
          <Link to="/">
            <Navbar.Brand color="white">Home</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login">
                <Button variant="primary">
                  {localStorage.getItem("USER") ? "Home" : "Login"}
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron>
        <Container className="p-3" fluid={true}>
          <h1>Clara</h1>
          <p>Aplikasi Peminjaman Barang dan Lab Kampus</p>
        </Container>
      </Jumbotron>
      <ClaraFooter />
    </div>

    
  );
};

export default HomePage;
