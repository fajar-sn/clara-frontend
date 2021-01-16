import React, { useState, useEffect } from 'react';
import {
  Nav,
  Navbar,
  Image,
  Dropdown,
} from "react-bootstrap";
import { logout, isLogin } from "utils/auth";
import { GET_LOGGED_IN_USER_DATA, USER_LOGOUT } from 'constants/urls';
import { withRouter, Link, useLocation, useHistory } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import claraLogo from '../assets/logo.png'


const ClaraNavbar = (props) => {
  const currentPage = props.currentPage;;
  const location = useLocation();
  const history = useHistory();



  const [loggedInUserData, setLoggedInUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const checkBoldNavbar = (text) => {
    // Temp checking
    if(text == 'Home' && location.pathname == '/dashboard') {
      return <b>{text}</b>;
        // Proper checking
    } else if (location.pathname == `/${text.toLowerCase()}`){
      return <b>{text}</b>;
    } else {
      return text;
    }
  }

  const homeText = checkBoldNavbar('Home');
  const assetText = checkBoldNavbar('Asset');
  const reservationText = checkBoldNavbar('Reservation');

  const onLogout = (e) => {
		e.preventDefault();

    axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

    axios.get(USER_LOGOUT)
      .then((response) => {
        logout();
    		history.push("/");
      })
      .catch((error) => {
        setError(true);
        console.warn(error);
      });
	};

  useEffect(() => {
    if(localStorage.getItem("LOGGED_IN_USER_DATA") === 'true') {
      setLoggedInUserData(JSON.parse(localStorage.getItem("LOGGED_IN_USER_DATA")));
      setIsLoading(false);
    } else {
      axios.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('JWT_TOKEN');

      axios.get(GET_LOGGED_IN_USER_DATA)
        .then((response) => {
          setLoggedInUserData(response.data.user);
          localStorage.setItem("LOGGED_IN_USER_DATA", JSON.stringify(response.data.user));
        })
        .catch((error) => {
          setError(true);
          console.warn(error);
        })
        .then(() => {
          setIsLoading(false);
        });
    }


    return () => {};
  }, []);

  return(
    <Navbar className="d-flex shadow-sm" expand="lg">
      <Link to="/dashboard">
              <Navbar.Brand color="white">
                <Image alt="Clara" src={claraLogo} height="50px"/>
              </Navbar.Brand>
            </Link>

            <Link to="/dashboard" className="text-primary nav-link">{homeText}</Link>
            <Link to="/asset" className="text-primary nav-link">{assetText}</Link>
            <Link className="mr-auto text-primary nav-link" to="/reservation">{reservationText}</Link>
            <Navbar.Text className="mr-2 title"><Image src={require("./DefaultProfile.png")} roundedCircle /></Navbar.Text>
            <Navbar.Text className="mr-2 text-primary"><b>{ isLoading ? '' : loggedInUserData.full_name }</b><br/>{ isLoading ? '' : loggedInUserData.nip }</Navbar.Text>
            <Dropdown key="down">
              <Dropdown.Toggle className="navbar-button">
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item to="#/action-1" onClick={onLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </Navbar>
  )

};

export default withRouter(ClaraNavbar)
