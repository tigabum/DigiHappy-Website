// src/components/HomePage.js
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Digihappy</h1>
          <Carousel>
            {/* Add customer quotes here */}
            <Carousel.Item>
              <p>"Great service!" - Customer 1</p>
            </Carousel.Item>
            <Carousel.Item>
              <p>"Very satisfied!" - Customer 2</p>
            </Carousel.Item>
            {/* Add more quotes */}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Senioritabletti</h2>
          <p>Information about Senioritabletti</p>
        </Col>
        <Col>
          <h2>Senioripuhelin</h2>
          <p>Information about Senioripuhelin</p>
        </Col>
        <Col>
          <h2>Turvaranneke</h2>
          <p>Information about Turvaranneke</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
