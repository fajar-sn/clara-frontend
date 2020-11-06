 import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import ClaraNavbar from "../components/Navbar";
import ClaraFooter from "../components/Footer";

class ReservationDetail extends React.Component{
	render(){
		return (
			<div>
				<ClaraNavbar currentPage='Reservation'/>
				<Container className="container-page">
					<Row>
						<Col md={12}>
							<div className="title-page">Reservation Detail</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<Image alt="picture" src={require("./Field.jpg")} className="img-responsive w-100"/>
						</Col>
						<Col md={8}>
							<Container>
								<Row><h1>Lapangan Merah</h1></Row>
							</Container>
						</Col>
					</Row>
				</Container>
				<ClaraFooter />
			</div>
		);
	}

  
};

export default ReservationDetail;
