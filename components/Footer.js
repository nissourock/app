import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
   
    { id : 2, title : "About Me",
      child : [
          { title : "Contact Me", link : "/" },
          { title : "Frequently Asked Questions", link : "/" },
          { title : "Privacy Stuff", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">anisdemi@outlook.fr</p>
                <h6 className="text-muted font-weight-normal">0658 02 30 44</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">My Adress</h6>
                <p className="text-muted f-14">I don't really think you need to know where I live for me to work for you</p>
                
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Anis. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;