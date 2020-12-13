import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardDeck,
  Row,
  Col,
} from "react-bootstrap";
import { logout } from "utils/auth";
import axios from "axios";
import Cookies from 'js-cookie';
import { GET_RESERVATION_COUNT, GET_RESERVATION_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";
import { Link } from "react-router-dom";
import ReservationTable from "../components/ReservationTable";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [waitingCount, setWaitingCount] = useState();
  const [reservedCount, setReservedCount] = useState();
  const [returnedCount, setReturnedCount] = useState();
  const [reservationList, setReservationList] = useState();

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  React.useEffect(() => {
    setIsLoading(true);

    axios.get(GET_RESERVATION_LIST, {
      params: {
        limit: '5'
      }
    })
    .then((response) => {
      setReservationList(response.data);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })
    .then(() => {
      setIsLoading(false);
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    axios.get(GET_RESERVATION_COUNT, {
      params: {
        status: 'waiting'
      }
    })
    .then((response) => {
      setWaitingCount(response.data.count);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })

    axios.get(GET_RESERVATION_COUNT, {
      params: {
        status: 'reserve'
      }
    })
    .then((response) => {
      setReservedCount(response.data.count);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })

    axios.get(GET_RESERVATION_COUNT, {
      params: {
        status: 'return'
      }
    })
    .then((response) => {
      setReturnedCount(response.data.count);
    })
    .catch((error) => {
      setError(true);
      console.warn(error);
    })
    .then(() => {
      setIsLoading(false);
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
                  <h1>{isLoading ? '' : waitingCount}</h1>
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
                  <h1>{isLoading ? '' : reservedCount}</h1>
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
                  <h1>{isLoading ? '' : returnedCount}</h1>
                </Card.Text>
              </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </CardDeck>
      <h3 className="lead" style={{ paddingTop: "25px"}}>Recent Reservations</h3>

      { isLoading
        ? ''
        : <ReservationTable reservationList={reservationList} />
      }

      </Container>
      <ClaraFooter />
    </div>
  );
};

export default Dashboard;
