import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Col,
  ModalBody,
  Modal,
  Row,
} from 'reactstrap'
import $ from 'jquery'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [modal, setModal] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const hrefScroll = (href) => {
    const { innerWidth } = window
    $(document).ready(function () {
      if (innerWidth < 1200) {
        let $root = $('html, body')
        $root.animate(
          {
            scrollTop: $(`#${href}`).offset().top - 200,
          },
          1000,
        )
      } else {
        let $root = $('html, body')
        $root.animate(
          {
            scrollTop: $(`#${href}`).offset().top - 130,
          },
          1000,
        )
      }
    })
  }
  return (
    <React.Fragment>
      <Col xl="12" lg="12" md="12" sm="12" xs="12" className="header p-0">
        <Col lg="12" md="12" sm="12" xs="12" className="topbar">
          <img src="img/barra_24.png" onClick={() => setModal(!modal)} />
        </Col>
        <Navbar
          color="#fff"
          light
          expand="xl"
          className="justify-content-between"
        >
          <NavbarBrand href="/">
            <img src="img/logo.png" alt="logo" />
          </NavbarBrand>
          {/* <Col md="6" className="space"></Col> */}
          <div className="buttons">
            <Row className="align-items-center">
              <NavLink href="#contacto" className="button-contact-movil">
                <div className="img-menu animate__animated animate__pulse animate__infinite"></div>
              </NavLink>
              <NavbarToggler onClick={toggle} />
            </Row>
          </div>

          <Collapse isOpen={isOpen} navbar className="animate__animated animate__backInRight">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => hrefScroll('nosotros')}>
                  Nosotros
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => hrefScroll('diferencia')}>
                  Lo que nos diferencia
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => hrefScroll('servicios')}>
                  Servicios
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => hrefScroll('clientes')}>
                  Clientes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => hrefScroll('certificacion')}>
                  Certificados y reconocimientos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => hrefScroll('workUs')}>
                  Trabaja con nosotros
                </NavLink>
              </NavItem>
            </Nav>
            <NavLink
              className="button-contact"
              onClick={() => hrefScroll('contacto')}
            >
              <div className="img-menu animate__animated animate__pulse animate__infinite"></div>
            </NavLink>
          </Collapse>
        </Navbar>
      </Col>
      <Modal
        isOpen={modal}
        toggle={() => setModal(!modal)}
        backdrop="static"
        size="lg"
        id="certificaciones"
        centered={true}
      >
        <ModalBody className="d-flex align-items-center">
          <img src="img/modal_1.png" style={{ width: '100%' }} />
          <div className="cerrar" onClick={() => setModal(!modal)}></div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default Header
