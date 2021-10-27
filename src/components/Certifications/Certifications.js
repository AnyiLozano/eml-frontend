import React from "react";
import { Col, Container, Row } from "reactstrap";

const Certifications = () => {
  return (
    <React.Fragment>
      <Container id="certificacion" fluid className="pt-5 p-0">
        <Row className="mr-0 ml-0">
          <Col xl="6" lg="6" md="12" sm="12" xs="12" className="p-0">
            <div className="text-one">
              <h2>Reconocimientos</h2>
            </div>
            <div className="img_certificacion">
              <img src="img/certi_one.jpg" alt="Ganadora Premio Aspid de Oro edición XIX"/>
            </div>
            <div className="text-certificacion">
              <h6>GANAMOS EL PREMIO</h6>
              <p>ASPID DE ORO – EDICIÓN XIX</p>
            </div>
            <div className="bg1"></div>
          </Col>
          <Col xl="6" lg="6" md="12" sm="12" xs="12" className="p-0">
            <div className="text-two">
              <h2>Estamos <span style={{ color: "#fff" }}>certificados en</span></h2>
            </div>
            <Row className="justify-content-center mt-5 ml-0 mr-0 img-certifications-2 pt-2">
              <div className="veeva">
                <img src="img/VEEVA.jpg " className="mt-2" alt="Veeva partner en contenido científico"/>
              </div>
              <div className="others">
                <img src="img/IQVIA.jpg" className="mt-1" alt="Agencia de Marketing Certificada por IQVIA"/>
              </div>
            </Row>
            {/* <div className="bg2"></div> */}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Certifications;