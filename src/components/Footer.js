import React from 'react';
import { Container, Row, Col, CardGroup, Card, Image } from 'react-bootstrap';

function ClaraFooter(){
    return(
        <footer className="mt-5">
            <Container style={{ backgroundColor: "#000050"}} fluid>
                <Row>
                    <Col style={{ padding: "50px" }}>
                        <Image alt="logo" src={require("./ClaraLogoWhite.png")} />
                    </Col>
                    <Col style={{ color: "white", padding: "50px"}}>
                        <h4>About Us</h4>
                        <p>Clara is a platform to connect college
                            students and college administrative staff
                            on reservation request.
                        </p>
                    </Col>
                    <Col style={{ color: "white", padding: "50px"}}>
                        <h4>Contact Us</h4>
                        <p>You can just contact Ilyas, Fajar, Indra, Tiara, Gebby or
                            Ubai if this platform has bugs that annoy you so much
                            that you have to contact them.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default ClaraFooter;