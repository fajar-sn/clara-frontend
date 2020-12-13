import React from "react";
import { Container, Dropdown, Row, Col, Card, Button, Pagination, Table, Image } from "react-bootstrap"
import { IMAGE_URL } from 'constants/urls';

export default function ReservationTemplate(props) {
  const reservation = props.reservation;
  const reservationAsset = reservation.asset;
  const reservationHistory = reservation.history;
  const reservee = reservation.user;

  const assetImage = IMAGE_URL + reservationAsset.image;

  const getStatusUpdateList = () => {
    const result = reservationHistory.map(history => (
          <Col>
            <h3>{history.status}</h3>
            <p>{history.datetime}</p>
          </Col>

      ));
      switch(reservation.status) {
        case "Waiting on approval":
          // <Button>Reject</Button>
          // <Button>Approve</Button>
          break;

        case "On reservation":
          break;

        case "Returned":
          break;

        case "Rejected":
          break;
      }
      return result;
  }

  return (
    <div className="reservation-template mt-4">
      <Container>
        <div className="header d-flex align-items-center">
          <span className="mr-auto h3">
            Reservation Detail
            </span>
        </div>
        <Row>
          <Col xs={8} md={4}>
            <Image src={assetImage} fluid />
          </Col>
          <Col xs={10} md={6}>



            <Row>
              <Col>
                <h2>{reservationAsset.name}</h2>
              </Col>
            </Row>


            <Row>
              <Col>
                <p>Reservee</p>
                <p>Class</p>
                <p>NRP</p>
              </Col>
              <Col className="text-right">
                <p>{reservee.full_name}</p>
                <p>{reservee.class}</p>
                <p>{reservee.nrp}</p>
              </Col>
            </Row>


            <Row>
              <Col>
                <p>Begin date</p>
                <p>Return date</p>
              </Col>
              <Col className="text-right">
                <p>{reservation.begin}</p>
                <p>{reservation.end}</p>
              </Col>
            </Row>

            <Row>
              {getStatusUpdateList()}
            </Row>
          </Col>
          <Col xs={0} md={2} />
        </Row>

      </Container>
      <br />
    </div>
  )
}
