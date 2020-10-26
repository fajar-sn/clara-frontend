/*
  Ini halaman dashboard, sebenernya gak sehat cara setstate kayak gini, harusnya pake useReducer
  karena tiap setState itu komponennya rerender (ngefek ke performa nanti). 
  Cuman karena biar simpel ya gini dulu aja gpp (useReducer agak mbingungi)

  Disini pas baru render component, fungsi didalam useEffect kepanggil, dia ngefetch API dari API-nya
  Studio Ghibli (disclaimer: aku bukan wibu). Fetchnya pake axios biar gampang, terus render sesuai
  kondisi state film / error / loading pake inline conditional.
*/

import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";

const Dashboard = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_FILMS)
      .then((res) => {
        setLoading(false);
        setFilm(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);

  const _onLogout = () => {
    logout();
    history.replace("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="p-3" fluid={true}>
          <Link to="/">
            <Navbar.Brand color="white">Dashboard</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/asset">Asset</Link>
                <Link className="nav-link" to="/reservation">Reservation</Link>
              <Button variant="primary" onClick={_onLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
      <Jumbotron>
        <Container className="p-3" fluid={true}>
          <h1>Clara</h1>
          <p>
            Aplikasi Peminjaman Barang dan Lab Kampus
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Dashboard;
