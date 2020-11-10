import React from 'react';
import {
  Nav,
  Navbar,
  Image,
  Dropdown,
} from "react-bootstrap";
import { logout } from "utils/auth";
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css';

class ClaraNavbar extends React.Component{
	currentPage = this.props.currentPage;
	home = 'Home';
	asset = 'Asset';
	reservation = 'Reservation';

	constructor(props){
		super(props);

		if(this.currentPage.toUpperCase() == this.home.toUpperCase()){
			this.home = this.boldingText(this.home);
		} else if (this.currentPage.toUpperCase() == this.asset.toUpperCase()){
			this.asset = this.boldingText(this.asset);
		} else if (this.currentPage.toUpperCase() == this.reservation.toUpperCase()){
			this.reservation = this.boldingText(this.reservation);
		}
	}

	boldingText(text){
		return <b>{text}</b>;
	}

	onLogout = (e) => {
		e.preventDefault();
		logout();
		this.props.history.push("/");
	};


	//<Navbar bg="light" className="d-flex">
	render(){
		return(
			<Navbar className="d-flex shadow-sm" expand="lg">
				<Link to="/dashboard">
		            <Navbar.Brand color="white">
		            	<Image alt="Clara" src={require("./ClaraLogo.png")}/>
		            </Navbar.Brand>
	          	</Link>

            	<Link to="/dashboard" className="text-primary nav-link">{this.home}</Link>
            	<Link to="/asset" className="text-primary nav-link">{this.asset}</Link>
            	<Link className="mr-auto text-primary nav-link" to="/reservation">{this.reservation}</Link>
            	<Navbar.Text className="mr-2 title"><Image src={require("./DefaultProfile.png")} roundedCircle /></Navbar.Text>
	            <Navbar.Text className="mr-2 text-primary"><b>Nama Anda</b><br/>2110181000</Navbar.Text>
	            <Dropdown key="down">
	            	<Dropdown.Toggle className="navbar-button">
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item to="#/action-1" onClick={this.onLogout}>Logout</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
	      	</Navbar>
		)
	}
}

export default withRouter(ClaraNavbar)
