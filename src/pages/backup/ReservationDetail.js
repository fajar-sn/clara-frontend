import React from "react";
import {
	Container,
	Jumbotron,
	Row,
	Col,
	Image,
	Badge,
	ListGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import ClaraNavbar from "../components/Navbar";
import ClaraFooter from "../components/Footer";
import './ReservationDetail.css';

class ReservationDetail extends React.Component {
	render() {
		return (
			<div>
				<ClaraNavbar currentPage='Reservation' />
				<Container className="container-page">
					<Row>
						<Col md={12}>
							<div className="title-page">Reservation Detail</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Image alt="picture" src={require("./Field.jpg")} className="img-responsive w-100" />
						</Col>
						<Col md={8}>
							<Container>
								<Row>
									<h5><Badge variant="secondary">Room</Badge>{' '}</h5>
								</Row>
								<Row>
									<h1>Lapangan Merah</h1>
								</Row>
								<Row>
									<Col className="tulisan1">
										<h5>Reservee</h5>
										<h5>Class</h5>
										<h5>NRP</h5>
									</Col>
									<Col className="tulisan2">
										<h5>Fajar Septian</h5>
										<h5>3 D4 IT B</h5>
										<h5>2110181042</h5>
									</Col>
								</Row>
							</Container>
							<Row>
								<Col className="tulisan1">
									<h5>Begin Date</h5>
									<h5>Return Date</h5>
								</Col>
								<Col className="tulisan2">
									<h5>October 21, 2020    08:00 AM</h5>
									<h5>October 23, 2020    16:00 PM</h5>
									<Badge className="badge1"><h5>REJECT</h5></Badge>{' '}
									<Badge className="badge2"><h5>ACCEPT</h5></Badge>{' '}
								</Col>
							</Row>
							<div>
							
							</div>
						</Col>
					</Row>
				</Container>
				<ClaraFooter />
			</div>
		);
	}


};

export default ReservationDetail;
