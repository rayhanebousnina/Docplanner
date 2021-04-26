import Navigation from './components/navbar';
import CardOne from './components/card1';
import CardTwo from './components/card2';
import Countries from './components/countries';
import Footer from './components/footer';
import {Row, Col, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const cities = [
  {title :"Warsaw" , src :"images/1.png"},
  {title :"Barcelona" , src :"images/2.png"},
  {title :"Istanbul" , src :"images/3.png"},
  {title :"Rome" , src :"images/4.png"},
  {title :"Bologna" , src :"images/5.png"},
  {title :"Curitiba" , src :"images/6.png"},
  {title :"Mexico City" , src :"images/7.png"},
]

function App() {
  return (

    <div>
      <Container>
      <Navigation/>
      </Container>
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
              <Col md={3} xs={6}><img className="partner-znany" src="images/znanylekarz.png"></img></Col>
              <Col md={3} xs={6}><img className="partner" src="images/logo-default-es.svg"></img></Col>
              <Col md={3} xs={6}><img className="partner" src="images/logo-default-it.svg"></img></Col>
              <Col md={3} xs={6}><img className="partner" src="images/logo-default-tr.svg"></img></Col>
            </Row>
            <Row className="pl-2">
              <Col md={3} xs={6}><img className="partner" src="images/logo-default-cz.svg"></img></Col>
              <Col md={3} xs={6}><img className="partner" src="images/logo-tuotempo.svg"></img></Col>
              <Col className="text-center" md={2} xs={6}><img className="partner-gipo" src="images/logo-gipo.svg"></img></Col>
              <Col md={2} xs={6}><img className="partner-clinicloud" src="images/logo-clinicloud.svg"></img></Col>
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
      <Container className="pb-4">
        <Row className="text-center pb-4">
          <Col md={3}></Col>
          <Col md={6}>
              <div className="t2">Improve the lives of millions. Change yours forever</div>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="text-center pb-5">
          <Col md={3}></Col>
          <Col md={6}>
          <p>
          More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.
          </p>
          </Col>
          <Col md={3}></Col>
        </Row>

        <div className="d-flex flex-wrap">
          <Countries pays = {cities}/>
        </div>

        <Row className="text-center mt-5 pb-4">
          <Col md={3}></Col>
          <Col md={6}>
              <div className="t2-turquoise">Sounds interesting? Join us now!</div>
          </Col>
          <Col md={3}></Col>
          </Row>
          <Row className="text-center">
          <Col md={3}></Col>
          <Col md={6}>
              <Button variant="primary">SEE ALL CURRENT OPENINGS</Button>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      
      <Container>
        <Footer/>
      </Container>
     
    </div>

  )
}

export default App;
