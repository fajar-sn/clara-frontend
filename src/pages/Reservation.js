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
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import ReservationTemplate from "../components/reservation/ReservationTemplate"

const Reservation = () => {
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
      <ClaraNavbar currentPage='Reservation'/>
        <Container>
          <Navbar.Collapse>
            <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
              <Button variant="primary" onClick={_onLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      <ReservationTemplate />
      <ClaraFooter />
    </div>
  );
};

export default Reservation;
