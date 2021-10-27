import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Map = () => {
  return (
    <Container id="map-container">
      <Row>
        <Col xl="3" lg="2" md="6" sm="12" xs="12" className="container-img">
          <img
            src="img/logo-original.png"
            className="img-logo-footer"
            alt="logo_footer"
          />
        </Col>
        <Col xl="6" lg="7" md="6" sm="12" xs="12" className="address-container">
          <div className="address">
            <p>
              Dirección:{' '}
              <span className="direcc">
                Carrera 46 # 103 b –<span className="c">32 Pasadena, Bogotá</span>
              </span>
            </p>
            <p>
              Teléfono:{' '}
              <span className="direcc">
                +57 1 610 93 73 <span> + 57 1 610 93 75 </span>
              </span>{' '}
            </p>
            <p>
              Celular: <span>+57 3108674693</span>
            </p>
            <p>
              Correo electrónico: <span className="correo">eml@eml.co</span>
            </p>
          </div>
        </Col>
        <Col xl="3" lg="3" md="12" sm="12" xs="12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.452033274084!2d-74.06018144974401!3d4.691241396575766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac6b4d1712f%3A0x14007621d46adf4d!2sCra.%2046%20%23103b-32%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1597097405003!5m2!1ses!2sco" width="600" height="410" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Map
