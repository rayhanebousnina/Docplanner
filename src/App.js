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
      <Row className="d-flex justify-content-center pt-5">        
        <div className="title h1">
          Making the healthcare experience more human
        </div>
      </Row>
      <Container>
        <Row className="my-5">
            <Col md={6}><p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p></Col>
            <Col md={6}><p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p></Col>
        </Row>
      </Container>

      <Container>     
        <Row className="">
          <Col><CardOne/></Col>
          <Col><CardOne/></Col>
          <Col><CardOne/></Col>
        </Row>
      </Container>
    </div>

  )
}

export default App;
