import React from 'react';
import { Col, Container } from 'reactstrap';

const Clients = () => {
  return (
    <React.Fragment>
      <Container fluid className="mt-4 p-0" id="clientes">
        <Col lg="12" md="12" sm="12" xs="12" className="p-0">
          <h2 className="text-center">
            Clientes que han<span className="cliente_text"> confiado en nosotros</span>
          </h2>
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="p-0">
          <div className="contenedor-slider p-0">
            <div className="one_slider"></div>
            <div className="two_slider"></div>
            <div className="three_slider"></div>
          </div>
        </Col>
      </Container>
    </React.Fragment>
  );
}

export default Clients;