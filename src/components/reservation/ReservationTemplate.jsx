import React from "react";
import { Container, Dropdown, Row, Col, Card, Button, Pagination, Table } from "react-bootstrap"

export default function ReservationTemplate(props) {
  const reservationList = props.reservationList;

  console.log(reservationList);

  let active = reservationList.current_page;
  let totalPage = reservationList.last_page;
  let items = [];

  const getPaginationItem = () => {
    if(totalPage < 6) {
      items.push(<Pagination.First disabled />);

      for(let number = 1; number <= totalPage; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }

      items.push(<Pagination.Last disabled />);
    } else {
      items.push(<Pagination.First />);

      for (let number = active - 1; number <= active + 1; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }

      items.push(<Pagination.Last />);
    }
  }


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

  const reservationListMap = () => {
    const result = reservationList.data.map((reservation, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{reservation.begin}</td>
          <td>{reservation.user.full_name}</td>
          <td>{reservation.asset.name}</td>
          {getStatusColor(reservation)}
          <td style={{ color: getStatusColor(reservation.status)}}>{reservation.status}</td>
        </tr>
      ));
      return result;
  }

  return (
    <div className="reservation-template mt-4">
      <Container>
        <div className="header d-flex align-items-center">
          <span className="mr-auto h3">
            Reservation
            </span>

          <span className="ml-auto">
            Show :
            </span>

          <Dropdown className="ml-2">
            <Dropdown.Toggle className="border border-secondary font-weight-bold" variant="white" id="dropdown-basic">
              Item
              </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Item</Dropdown.Item>
              <Dropdown.Item >Room</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

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
            {reservationListMap()}
          </tbody>
        </Table>
      </Container>
      <Container className="mt-4">
        <Pagination className="float-right">{items}</Pagination>
      </Container>
      <br />
    </div>
  )
}
