import React from 'react';
import {
  Button,
  Container,
  Nav,
  Navbar,
  Jumbotron,
  Image,
  Dropdown,
  DropdownButton

} from "react-bootstrap";
import { logout } from "utils/auth";

class ClaraNavbar extends React.Component{
	currentPage = this.props.currentPage;
	home = 'Home';
	asset = 'Asset';
	reservation = 'Reservation';

	constructor(props){
		super(props);
		if(this.props.currentPage.toUpperCase() == this.home.toUpperCase()){
			this.home = this.boldingText(this.home);
		} else if (this.props.currentPage.toUpperCase() == this.asset.toUpperCase()){
			this.asset = this.boldingText(this.asset);
		} else if (this.props.currentPage.toUpperCase() == this.reservation.toUpperCase()){
			this.reservation = this.boldingText(this.reservation);
		} 
	}

	boldingText(text){
		return <b>{text}</b>;
	}

	//<Navbar bg="light" className="d-flex">
	render(){
		return(
			<Navbar className="d-flex shadow-sm" expand="lg">
				<Nav.Link href="/home">
		            <Navbar.Brand color="white">
		            	<Image alt="Clara" src={require("./ClaraLogo.png")}/>
		            </Navbar.Brand>
	          	</Nav.Link>
	          	
            	<Nav.Link href="/home" className="text-primary">{this.home}</Nav.Link>
            	<Nav.Link href="/asset" className="text-primary">{this.asset}</Nav.Link>
            	<Nav.Link className="mr-auto text-primary" href="/reservation">{this.reservation}</Nav.Link>
            	<Navbar.Text className="mr-2 title"><Image src={require("./DefaultProfile.png")} roundedCircle /></Navbar.Text>
	            <Navbar.Text className="mr-2 text-primary"><b>Nama Anda</b><br/>2110181000</Navbar.Text>
	            <Dropdown drop="left" key="down">
	            	<Dropdown.Toggle className="navbar-button">
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="/">Log Out</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
	      	</Navbar>
		)
	}
}

export default ClaraNavbar;