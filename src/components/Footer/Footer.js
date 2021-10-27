import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return(
    <footer>
      <Container fluid>
        <Row>
          <Col xl="8" lg="10" md="10" sm="9" xs="9" className="text-footer">
            <p> &copy; 2000 - { new Date().getFullYear() } EML S.A.S. Todos los derechos reservados. Política de privacidad.</p>
          </Col>
          <Col xl="4" lg="2" md="2" sm="2" xs="2" className="img-footer" style={{ height: 20 }}>
            <a target="_blank" href="https://co.linkedin.com/company/eml-publicidad?trk=similar-pages_result-card_full-click">
              <img src="img/linkedin.png" alt="Linkedin Logo"/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;