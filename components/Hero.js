import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Welcome!</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">I Will Make YOU a Website if you can provide me with money <span className="text-primary font-weight-medium">GET THAT BAG</span></h1>
              <p className="text-muted mb-4 pb-2">Hey ! I'm just looking to make some side money! Do you have a business that could benefit from a website? Hit me up!</p>
              <a href="#" className="btn btn-warning">
                Get in touch with me! <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/money.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;