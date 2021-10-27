import React from "react";
import { Col, Container, Row } from "reactstrap";

const Us = () => {
  return (
    <Container id="workUs" className="container-form mt-5" style={{ backgroundImage: "url('img/fondo.png')" }}>
      <Row>
        <Col xl="6" lg="12" md="12" sm="12" xs="12">
          <div className="text-us">
            <h1>
              <strong>Trabaja con nosotros</strong>
            </h1>
          </div>
        </Col>
        <Col xl="6" lg="12" md="12" sm="12" xs="12">
          <div className="description-us">
            <p>En EML promovemos la ética, el respeto, el amor, la </p>
            <p> excelencia, la creatividad y la buena actitud. Si estás en </p>
            <p>sintonía con la cultura corporativa de nuestra agencia</p>
            <p>te invitamos a ser parte de nuestra familia.</p>
            <h6>Envía tu hoja de vida a <span>eml@eml.co</span></h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Us;