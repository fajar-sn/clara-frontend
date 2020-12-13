import React from "react";
import { Container, Pagination, Table } from "react-bootstrap"
import { Link } from "react-router-dom";

const ReservationTable = (props) => {
  const reservationList = props.reservationList;

  console.log(reservationList);


  const getStatusColor = (status) => {
    if(status === 'Waiting on approval') {
      return 'red';
    } else if(status === 'On Reservation') {
      return '#ece31f';
    } else if(status === 'Returned') {
      return 'green';
    }else {
      return '';
    }
  }


  const reservationListMap = () => {
    // Check if the props data has pagination data or only the reservation.

    const result = reservationList.data.map((reservation, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{reservation.begin}</td>
          <td>{reservation.user.full_name}</td>
          <td>{reservation.asset.name}</td>
          {getStatusColor(reservation)}
          <td style={{ color: getStatusColor(reservation.status)}}>{reservation.status}</td>
          <td><Link to={{
                pathname: '/reservationDetail',
                state: {
                  reservationID: reservation._id,
                }
              }}>Edit</Link></td>
        </tr>
      ));
      return result;
  }

  return (
    <div className="reservation-template mt-4">
      <Container>
        <Table responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Reservee</th>
              <th>Item / Room reserved</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservationListMap()}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default ReservationTable;
