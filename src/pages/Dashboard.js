import React from "react";
import {
  Container,
  Card,
  CardDeck,
  Table,
  Row,
  Col,
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
      <ClaraNavbar currentPage='Home'/>
      <Container>
      <h1 style={{ paddingTop: "25px" }}> Hello Lecturer </h1>
      <h3 className="lead"> Here are the reservation data recap for this month. </h3>
      <CardDeck>
        <Card>
          <Container>
            <Row>
              <Col style={{ backgroundColor: "red", paddingBottom: "160px"}} xs={1}></Col>
              <Col>
              <Card.Body>
                <Card.Title>Waiting for approval</Card.Title>
                <Card.Text>
                  <h1>5</h1>
                </Card.Text>
              </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
        <Card>
          <Container>
            <Row>
              <Col style={{ backgroundColor: "yellow", paddingBottom: "160px"}} xs={1}></Col>
              <Col>
              <Card.Body>
                <Card.Title>On Reservation</Card.Title>
                <Card.Text>
                  <h1>5</h1>
                </Card.Text>
              </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
        <Card>
          <Container>
            <Row>
              <Col style={{ backgroundColor: "lime", paddingBottom: "160px"}} xs={1}></Col>
              <Col>
              <Card.Body>
                <Card.Title>Returned</Card.Title>
                <Card.Text>
                  <h1>5</h1>
                </Card.Text>
              </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </CardDeck>
      <h3 className="lead" style={{ paddingTop: "25px"}}>Recent Reservations</h3>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Reservee</th>
            <th>Item reserved</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>October 13, 2020</td>
            <td>Fajar Septian</td>
            <td>Gaming Monitor</td>
            <td style={{ color: "red"}}>Waiting for Approval</td>
          </tr>
          <tr>
            <td>2</td>
            <td>October 13, 2020</td>
            <td>Fajar Septian</td>
            <td>Gaming Monitor</td>
            <td style={{ color: "red"}}>Waiting for Approval</td>
          </tr>
          <tr>
            <td>3</td>
            <td>October 13, 2020</td>
            <td>Fajar Septian</td>
            <td>Gaming Monitor</td>
            <td style={{ color: "red"}}>Waiting for Approval</td>
          </tr>
          <tr>
            <td>4</td>
            <td>October 13, 2020</td>
            <td>Fajar Septian</td>
            <td>Gaming Monitor</td>
            <td style={{ color: "red"}}>Waiting for Approval</td>
          </tr>
          <tr>
            <td>5</td>
            <td>October 13, 2020</td>
            <td>Fajar Septian</td>
            <td>Gaming Monitor</td>
            <td style={{ color: "red"}}>Waiting for Approval</td>
          </tr>
        </tbody>
      </Table>
      </Container>
      <ClaraFooter />
    </div>
  );
};

export default Dashboard;
