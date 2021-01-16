import React, { useRef } from "react";
import { Container,  Row, Col,  Button,   Image, Form, Alert } from "react-bootstrap"
import { IMAGE_URL } from 'constants/urls';
import './ReservationDetailTemplate.css';

export default function ReservationDetailTemplate(props) {
  const reservation = props.reservation;
  const reservationAsset = reservation.asset;
  const reservationHistory = reservation.history;
  const reservee = reservation.user;
  const reservationID = reservation._id;
  const assetImage = IMAGE_URL + reservationAsset.image;

  const updateReservation = props.onActionButtonClick

  // const [description, setDescription] = React.useState("");
  const description = useRef("");

  const getStatusUpdateList = () => {
    const result = reservationHistory.map(history => (
          <Col md={12}>
            <h3>{history.status}</h3>
            <p>{history.datetime}</p>
          </Col>

      ));

      return result;
  }

  const getActionButtons = () => {
    var approveButton = null;
    var rejectButton = null;
    var returnButton = null;

    switch(reservation.status) {
        case "Waiting on approval":
          approveButton = <Button className="action-button" onClick={() => onActionButtonClick("Approve")}>
                          Approve
                        </Button>
          rejectButton = <Button className="action-button-secondary" onClick={() => onActionButtonClick("Reject")}>
                          Reject
                        </Button>
          break;

        case "On Reservation":
          returnButton = <Button className="action-button" onClick={() => onActionButtonClick("Return")}>
                          Return
                        </Button>
          break;

        case "Returned":
          break;

        case "Rejected":
          break;
      }

    const buttons = <Form.Row>
                      {rejectButton}
                      &nbsp;
                      {approveButton}
                      &nbsp;
                      {returnButton}
                      &nbsp;
                    </Form.Row>;
    return buttons;
  }

  const getDescriptionForm = () => {
    if (reservation.status == "Returned" || reservation.status == "Rejected" || reservation.status == "Denied"){
      return null
    }
    return <Form.Group controlId="formDescription">
                  <Form.Control
                    type="text"
                    placeholder="Action Description"
                    inputRef={description}

                  />
                </Form.Group>
  }
  // LINE 79
  // onChange={(e) => setDescription(e.target.value)}


  const onActionButtonClick = (action) => {
    var newStatus;
    if(action == "Approve"){
      newStatus = "On Reservation";
    } else if (action == "Reject") {
      newStatus = "Rejected";
    } else if (action == "Return") {
      newStatus = "Returned";
    }

    const data = {
      status: newStatus,
      description: description
    }

    updateReservation(data)
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
            <Row>
              <Form>
              <Form.Row>
                {getDescriptionForm()}

              </Form.Row>

                {getActionButtons()}

              </Form>
            </Row>
          </Col>
          <Col xs={0} md={2} />
        </Row>

      </Container>
      <br />
    </div>
  )
}
