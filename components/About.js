import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Me</span></h3>
              <p className="text-muted">I make your dreams come true ! (as long as you dream of simple websites)</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Your competitors are hiring me already, don't delay!</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Pricing</h6>
                <p className="text-muted font-weight-light">Contact me for a quote.</p>
              </Col>
              <Col md={6}>
               
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;