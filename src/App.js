import Navigation from './components/navbar';
import CardOne from './components/card1';
import CardTwo from './components/card2';
import Countries from './components/countries';
import Footer from './components/footer';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (

    <div>
      <Navigation/>
      <Row className="d-flex justify-content-center"><img src="images/sygnet.png"></img></Row>
      <Row className="pt-5">        
        <div className="container title h1 text-center">
          Making the healthcare experience more human
        </div>
      </Row>
      <Container>
        <Row className="my-5">
            <Col md={6} className="pb-4"><p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p></Col>
            <Col md={6}><p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p></Col>
        </Row>
      </Container>

      <Container>    
          <CardOne/>     
      </Container>
      <Container className="py-3">
        <Row>
          <Col className="pl-5" md={4}><div className="partners">We are a global company with local culture</div></Col>
          <Col className="pt-2" md={8}>
            <Row className="pb-5">
              <Col md={3}><img className="partner-znany" src="images/znanylekarz.png"></img></Col>
              <Col md={3}><img className="partner" src="images/logo-default-es.svg"></img></Col>
              <Col md={3}><img className="partner" src="images/logo-default-it.svg"></img></Col>
              <Col md={3}><img className="partner" src="images/logo-default-tr.svg"></img></Col>
            </Row>
            <Row>
              <Col md={3}><img className="partner" src="images/logo-default-cz.svg"></img></Col>
              <Col md={3}><img className="partner" src="images/logo-tuotempo.svg"></img></Col>
              <Col className="text-center" md={2}><img className="partner-gipo" src="images/logo-gipo.svg"></img></Col>
              <Col md={2}><img className="partner-clinicloud" src="images/logo-clinicloud.svg"></img></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="container-fluid chiffres my-5">
        <Row>
          <Col md={1}></Col>
          <Col md={4}><div className="t pt-5 pb-4">The world's biggest healthcare platform</div><p>We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</p>
          <Row className="pt-5 mt-5"><img src="images/star.png"></img></Row>
          </Col>
          <Col className="my-3" md={7}><CardTwo/></Col>
        </Row>
      </div>
      <div className="container">
        <Countries/>
      </div>
      <Container>
      <Footer/>
      </Container>
     
    </div>

  )
}

export default App;
