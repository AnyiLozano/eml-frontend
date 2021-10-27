import axios from 'axios'
import React, { Children } from 'react'
import Select, { components } from 'react-select'
import {
  Col,
  Container,
  FormGroup,
  Row,
  Form,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import Loading from '../Loading/Loading';
import Axios from "axios";
import Swal from 'sweetalert2';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';

class FormEml extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      lettersRegex: new RegExp('^[a-zA-Z ]+$'),
      modal: false,
      active: false,
      countries: [],
      modal_body: [],
      active1: false,
      active2: false,
      active3: false,
      active4: false
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.validateLetters = this.validateLetters.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getCountries = this.getCountries.bind(this);
    this.aceptTerms = this.aceptTerms.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.changeCode = this.changeCode.bind(this);
    this.getTerms = this.getTerms.bind(this);
  }

  getTerms(){
    this.setState({ active: true });
    Axios.get('https://www.api-prod.eml.co/api/getTerms')
    .then((response) => {
      this.setState({ "modal_body": response.data.data })
      console.log(this.state.terms)
      this.setState({ active: false });
    }).catch((err) => {
      this.setState({ active: false });
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Hubo un problema al momento de obtener los terminos y condiciones."
      });
    })
  }

  sendEmail(){
    let aceptar = document.getElementById('aceptar');
    const { name, last_name, email, code, phone, message } = this.state.user;
    if(!aceptar.checked){
      Swal.fire({
        icon: 'error',
        html: 'Debes aceptar nuestros <b>terminos y condiciones.</b>',
        title: 'Acepta Los Terminos Y Condiciones'
      })
      return false; 
    }else if(name.length > 25){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "El nombre es muy largo"
      })
      return false;
    }else if(last_name.length > 35){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "El apellido es muy largo"
      })
      return false;
    }else if(email.length > 80){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "El correo es muy largo"
      })
      return false;
    }else if(!code){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "Debe seleccionar el indicativo del país"
      })
      return false;
    }else if(phone.length > 11){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "El telefono es muy largo"
      })
      return false;
    }else if(message.length < 30){
      Swal.fire({
        icon: "error",
        title: "Completa los datos",
        text: "El mensaje es muy corto"
      })
      return false;
    }else{
      this.setState({ active: true });
      let data = { name: name, last_name: last_name, country: code, phone: phone, message: message, email: email };
      Axios.post('https://www.api-prod.eml.co/api/sendContact', data)
      .then((res) => {
        if(res.data.transaction.status == true){
          Swal.fire({
            icon: 'success',
            text: 'Gracias por ponerte en contacto con nosotros, pronto nos contactaremos contigo.',
            title: 'Hecho!'
          })
          const { user } = this.state;
          user.name = '';
          user.last_name = '';
          user.email = '';
          user.message ='';
          user.code = '';
          user.phone = ''
          aceptar.checked = false;
          this.setState(user)
          this.setState({ active: false });
        }else{
          this.setState({ active: false });
          Swal.fire({
            icon: 'error',
            text: 'Ocurrio un problema al momento de enviar el mensaje de contacto.',
            title: 'Upppps!'
          })
        }
      }).catch((err) => {
        this.setState({ active: false });
        Swal.fire({
          icon: 'error',
          text: 'Ocurrio un problema al momento de enviar el mensaje de contacto.',
          title: 'Upppps!'
        })
      })
    }
  }

  getActive(id) {
    if(id == 1){
      return this.state.active1;
    }else if(id == 2){
      return this.state.active2;
    }else if(id == 3){
      return this.state.active3;
    }else if(id == 4){
      return this.state.active4;
    }
  }

  getCountry(code){
    const { countries } = this.state;
    countries.find(item => {
      if(item.value == code){
        return item;
      }
    })
  }

  async componentDidMount(){
    await this.getCountries();
    await this.getTerms();
    await loadReCaptcha();
  }

  getCountries(){
    this.setState({ active: true });
    Axios.get('https://www.api-prod.eml.co/api/getCountries')
    .then((response) => {
      this.setState({ countries: response.data.data })
      this.setState({ active: false });
    }).catch((err) => {
      this.setState({ active: false });
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Hubo un problema al momento de obtener los paises."
      });
    })
  }

  aceptTerms(){
    this.setState({ active: true })
    let aceptar = document.getElementById('aceptar');
    if(!aceptar.checked){
      aceptar.checked = true;
    }
    this.setState({ modal: false })
    this.setState({ active: false })
  }

  changeHandler(e) {
    let name = e.target.name
    let value = e.target.value
    let user = this.state.user
    user[name] = value
    this.setState(user)
    console.log(this.state.user)
  }

  validateLetters(e) {
    const { value } = e.target
    const { lettersRegex } = this.state
    console.log(lettersRegex.test(value))
    return lettersRegex.test(value)
  }

  toggle(id){
    switch (id) {
      case 0:
        this.setState({ modal: !this.state.modal })
        break;
      case 1:
        this.setState({ active1: !this.state.active1 })
        break;
      case 2:
        this.setState({ active2: !this.state.active2 })
        break;
      case 3:
        this.setState({ active3: !this.state.active3 })
        break;
      case 4:
        this.setState({ active4: !this.state.active4 })
        break;
      default:
        break;
    }
  }

  changeCode(e){
    console.log(e)
    let name = e.type;
      let user = this.state.user;
      let value = e;
      user.code = value
      this.setState(user);
  }

  render() {
    const { user, active, countries, terms } = this.state

    const dot = (flag = null) => ({
      alignItems: 'center',
      display: 'flex',

      ':before': {
        backgroundImage: `url('${flag}')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        content: '" "',
        display: 'block',
        marginRight: '8px',
        height: '30px',
        width: '30px',
      }
    })

    const placeStyles = () => ({
      color: 'rgba(55, 78, 154, 1)',
      textAlign: 'center'
    })

    const flagStyles = {
      control: styles => ({ ...styles, backgroundImage: null }),
      input: styles => ({ ...styles, ...dot() }),
      placeholder: styles => ({ ...styles, ...dot() }),
      singleValue: (styles, { data }) => ({ ...styles, ...dot(data.flag) })
    }

    return (
      <Loading active={active} spinner>
        <React.Fragment>
          <Container className="container-form" id="contacto">
            <div className="content_text">
              <Row>
                <Col xl="6" lg="6" md="12" sm="12" xs="12" className="mt-5 p-0 d-flex align-items-center">
                  <div className="form_text">
                    <h2>
                      Queremos trabajar <br />
                      con tu marca,{' '}
                      <span>
                        pongámonos
                        <br />
                        en contacto y hablemos
                      </span>
                    </h2>
                    <p>
                      Somos una agencia healthcare con más de 20 años de experiencia desarrollando comunicaciones estratégicas para marcas que generan vida.
                    </p>
                  </div>
                </Col>
                <Col xl="6" lg="6" md="12" sm="12" xs="12" className="p-0">
                  <Form className="registro">
                    <Row className="m-0">
                      <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Nombres"
                            value={user.name}
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                          />
                        </FormGroup>
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Apellidos"
                            value={user.last_name}
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                          />
                        </FormGroup>
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <Select placeholder="Indicativo" name="code" value={user.code} onChange={this.changeCode} options={countries} styles={flagStyles}>
                          </Select>
                        </FormGroup>
                      </Col>
                      <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            placeholder="Telefono"
                            value={user.phone}
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                          />
                        </FormGroup>
                      </Col>
                      <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Correo Electronico"
                            value={user.email}
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                          />
                        </FormGroup>
                      </Col>
                      <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <FormGroup>
                          <Label>*</Label>
                          <textarea
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="Mensaje"
                            value={user.message}
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12">
                        <FormGroup>
                          <input
                            id="aceptar"
                            type="checkbox"
                            name="acept"
                            onChange={this.changeHandler}
                            required
                            onKeyPress={this.validateLetters}
                            style={{ marginRight: 10 }}
                          />
                          <Label className="acept" onClick={ () => this.toggle(0) }>
                            Acepta Política de manejo de datos. Política de
                            privacidad. Términos y condiciones.
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12" className="recao">
                        <ReCaptcha
                          ref={(el) => {this.captchaDemo = el}}
                          size="visible"
                          render="explicit"
                          sitekey="6Lc0avUZAAAAAJwo1Ek6Bdnp4H4XOZab3oT0kOCM"
                        ></ReCaptcha>
                      </Col>
                      <Col lg="12" md="12" sm="12" xs="12">
                        <FormGroup>
                          <Button variant="primary" onClick={this.sendEmail}>Enviar</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  <Modal isOpen={this.state.modal} toggle={() => this.toggle(0)} backdrop="static" size="lg">
                    <ModalHeader toggle={() => this.toggle(0)} cssModule={{'modal-title': 'w-100 text-center'}}>Términos Y Condiciones</ModalHeader>
                    <ModalBody>
                      <Container>
                        <Row className="m-0">
                          
                            {
                              this.state.modal_body.map((item, index) => (
                                <React.Fragment >
                                  <Col xl="6" lg="6" md="12" sm="12" xs="12" style={{ paddingBottom: '1rem', paddingTop: '1rem', borderBottom: '2px solid rgba(245, 161, 26, 1)' }}>
                                    <Col xl="12"key={index}>
                                      { item.id == 3 ? 
                                        <h6 className="title_modal text-center">{item.name}</h6> :
                                        <h6 className="text-center">{item.name}</h6>
                                      }
                                      
                                    </Col>
                                    <Col xl="12">
                                      <img src={item.images[0].url_image} style={{ width: '100%' }} />
                                    </Col>
                                    <Button color="primary" className="btn-aceptar" onClick={() => this.toggle(item.id)}>
                                      Ver más
                                    </Button> 
                                  </Col>
                                  <Modal isOpen={ this.getActive(item.id) } toggle={() => this.toggle(item.id)} backdrop="static" size="lg">
                                    <ModalHeader toggle={() => this.toggle(item.id) } cssModule={{'modal-title': 'w-100 text-center'}}>{ item.name }</ModalHeader>
                                    <ModalBody>
                                      {
                                        item.images.map((i, ind) => (
                                          <img src={ i.url_image } key={ ind } style={{ width: '100%' }}/>
                                        ))
                                      }
                                    </ModalBody>
                                    <ModalFooter>
                                      <Button color="primary" className="btn-aceptar" style={{ visibility: 'hidden' }}>
                                        Ver más
                                      </Button> 
                                    </ModalFooter>
                                  </Modal>
                                </React.Fragment>
                              ))
                            }
                          
                        </Row>
                      </Container>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" className="btn-aceptar" onClick={this.aceptTerms}>
                        Aceptar
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
              </Row>
            </div>
          </Container>
        </React.Fragment>
      </Loading>
    )
  }
}

export default FormEml
