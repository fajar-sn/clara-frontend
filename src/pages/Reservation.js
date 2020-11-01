import React from "react";
import {
  Container,
  Jumbotron,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import ClaraNavbar from "components/Navbar";
import ClaraFooter from "components/Footer";

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

  return (
    <div>
      <ClaraNavbar currentPage='Reservation'/>
      <Jumbotron>
        <Container className="p-3" fluid={true}>
          <h1>Clara</h1>
          <p>
            Aplikasi Peminjaman Barang dan Lab Kampus
          </p>
        </Container>
      </Jumbotron>
      <ClaraFooter />
    </div>
  );
};

export default Reservation;
