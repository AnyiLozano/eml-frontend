import React from "react";
import { Col, Container, Row } from "reactstrap";
import items from './data/AboutData';

const About = () => {
  return (
    <React.Fragment>
      <Container id="nosotros" className="mt-5 text-center">    
        <Row className="ml-0">
          <Col xl="12" lg="12" md="12" xs="12" sm="12" className="about__title d-flex justify-content-center">
            <h2>Somos una agencia de comunicaciones estratégicas</h2>
          </Col>
          <Col xl="12" lg="12" md="12" xs="12" sm="12" className="about__subtitle d-flex justify-content-center">
            <h3>especializada en el sector healthcare</h3>
          </Col>
          <Col xl="12" lg="12" md="12" xs="12" sm="12" className="about__text d-flex justify-content-center">
            <p>Contamos con un equipo integral de profesionales que enfocan todo su talento en la comunicación de marcas de los siguientes sectores: </p>
          </Col>
          <Col xl="12" lg="12" md="12" xs="12" sm="12" className="about_icons d-flex justify-content-center mt-5">
            <Row className="justify-content-center">
              {items.map(item => <Col xl="4" lg="4" md="6" xs="12" sm="12" key={item.text}>
                <img src={item.img} alt={item.alt}/>
                <h4>{item.text}</h4>
              </Col>)}
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default About;