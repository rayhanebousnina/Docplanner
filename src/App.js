import Navigation from './components/navbar';
import CardOne from './components/card1';
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
      <Container>
        <Row>
          <Col md={3}><div className="partners">We are a global company with local culture</div></Col>
          <Col md={9}>
            <img src="images/znany-lekarz.c42c63b0.png"></img>
            <img className="doctoralia" src="images/logo-default-group-en.svg"></img>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default App;
