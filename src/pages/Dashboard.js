import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";

const Dashboard = () => {
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
      <ClaraNavbar currentPage=''/>
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

export default Dashboard;
