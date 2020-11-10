import React from "react";
import { Container, Dropdown, Row, Col, Card, Button, Pagination, Table } from "react-bootstrap"

export default function ReservationTemplate() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
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
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>2</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>3</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>4</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>5</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>6</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>7</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
            <tr>
              <td>8</td>
              <td>October 13, 2020</td>
              <td>Fajar Septian</td>
              <td>Gaming Monitor</td>
              <td style={{ color: "red" }}>Waiting for Approval</td>
            </tr>
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
