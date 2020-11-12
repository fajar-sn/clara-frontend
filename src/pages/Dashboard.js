import React, { useEffect, useState } from "react";
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
import Cookies from 'js-cookie';
import { GET_RESERVATION_COUNT, GET_RESERVATION_LIST } from "constants/urls";
import ClaraNavbar from "../components/Navbar"
import ClaraFooter from "../components/Footer";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [waitingCount, setWaitingCount] = useState();
  const [reservedCount, setReservedCount] = useState();
  const [returnedCount, setReturnedCount] = useState();
  const [reservationList, setReservationList] = useState();

  axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

  React.useEffect(() => {
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
    // .then(() => {
    //   setIsLoading(false);
    // });

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
    // .then(() => {
    //   setIsLoading(false);
    // });

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

  const getStatusColor = (status) => {
    if(status == 'Waiting on approval') {
      return 'red';
    } else if(status == 'On Reservation') {
      return '#ece31f';
    } else if(status == 'Returned') {
      return 'green';
    }else {
      return '';
    }
  }

  const reservationListMap = (reservationList) => {
    if (isLoading) {
      return '';
    } else {
      const result = reservationList.map(reservation => (
          <tr>
            <th>{1}</th>
            <td>{reservation.begin}</td>
            <td>{reservation.user.full_name}</td>
            <td>{reservation.asset.name}</td>
            {getStatusColor(reservation)}
            <td style={{ color: getStatusColor(reservation.status)}}>{reservation.status}</td>
          </tr>
        ));
        return result;
    }
  }

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
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Reservee</th>
            <th>Item / Room reserved</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? ' ' : reservationListMap(reservationList)}
        </tbody>
      </Table>
      </Container>
      <ClaraFooter />
    </div>
  );
};

export default Dashboard;
