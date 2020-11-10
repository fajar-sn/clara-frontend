import React from "react";
import {Container, Dropdown, Row, Col, Card, Button, Pagination} from "react-bootstrap"

export default function AssetTemplate(){
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
    <div className="asset-template mt-4">
        <Container>
          <div className="header d-flex align-items-center">
            <span className="mr-auto h3">
              Asset
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

          <div className="card-section mt-4" >
            <Row>
              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card  className="rounded">
                  <Card.Img variant="top" src="https://www.asus.com/media/global/products/r030kBwEf1RCSGYA/P_setting_000_1_90_end_500.png" />
                  <Card.Body>
                    <Card.Title>Gaming Monitor</Card.Title>
                    <Card.Text>
                      <span>Quantity : </span>
                      <br/>
                      <span>Condition : </span>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </div>

        </Container>

        <Container className="mt-4">
          <Pagination className="float-right">{items}</Pagination>
        </Container>
        <br />
    </div>
  )
}
