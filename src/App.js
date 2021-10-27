import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import CarouselEml from "./components/CarouselEml/CarouselEml";
import About from "./components/About/About";
import Parallax from "./components/Parallax/Parallax";
import Diferent from "./components/Diferent/Diferent";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Certifications from "./components/Certifications/Certifications";
import FormEml from "./components/Form/FormEml";
import Us from "./components/Us/Us";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import './assets/scss/eml.scss';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

const hide = () => {
    let id = document.getElementById('cookies__box');
    id.classList.add('hide')
}

const hideImage = () => {
    let id = document.getElementById('openImageLeft');
    id.classList.add('hide');
    let id2 = document.getElementById('barra-12');
    id2.classList.remove('hide');
}

const hideImage2 = () => {
    let id = document.getElementById('openImageLeft');
    id.classList.remove('hide');
    let id2 = document.getElementById('barra-12');
    id2.classList.add('hide');
}

function App() {
    return (
        <React.Fragment>
            <Header/>
            <div style={{paddingTop: 120}}>
                <CarouselEml/>
                <About/>
                <Parallax/>
                <Diferent/>
                <Services/>
                <Clients/>
                <Certifications/>
                <FormEml/>
                <Us/>
                <Map/>
                <Footer/>
            </div>
            <div className="cookies__box" id="cookies__box">
                <p className="description__cookies">
                    Este sitio web utiliza cookies para mejorar tu experiencia de
                    navegación. Si no cambias la configuración en tu navegador damos por
                    entendido que aceptas nuestros términos y condiciones.
                </p>
                <button
                    className="cookies__success"
                    id="cookies__success"
                    onClick={() => hide()}
                >
                    Aceptar
                </button>
            </div>
            <div className="container-barra">
                <input type="checkbox" id="btn-social"/>
                <div className="icon-social_arr">
                    <img
                        className="barra-12 animate_animated animate_backInLeft hide"
                        id="barra-12"
                        src="img/logo_veeva.png"
                        alt="Aliados estratégicos de VEEVA e IQVIA"
                        onClick={() => hideImage2()}
                    />
                </div>
                <img src="img/logo-certificacion.png" alt="" id="openImageLeft"
                     className="openImageLeft animate_animated animate_backInLeft" onClick={() => hideImage()}></img>
            </div>
        </React.Fragment>
    );
}

export default App;
