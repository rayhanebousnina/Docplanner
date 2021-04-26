
import '../css/card2.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

function CardTwo() {
    return (
     <div className="cards-two">
        <Container>
            <Row>
              
            <Col xs={12} md={5}>
            <div className="stats__item mt-5 s1">
                <div className="vert-align">
                    <div>
                        <img src="/images/drapeau.png"></img>
                        <h3>Leader in 12 countries</h3>
                        <p>
                            Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </p>
                    </div>
                </div>
            </div>
                </Col>
<Col xs={12} md={5}>
                <div className="stats__item mt-4">
                                <div className="vert-align">
                                    <div>
                                    <img src="/images/calender.png"></img>
                                        <h3>4.8 million appointments</h3>
                                        <p>
                                            booked last month
                                        </p>
                                    </div>
                                </div>
                            </div>
                </Col>
<Col xs={12} md={5}>
            <div className="stats__item mt-5">
                <div className="vert-align">
                    <div>
                        <img src="/images/users.png"></img>
                        <h3>61.9 mln unique patients</h3>
                        <p>
                        visit our websites each month
                        </p>
                    </div>
                </div>
            </div>
                </Col>
<Col xs={12} md={5}>
                <div className="stats__item mt-4">
                                <div className="vert-align">
                                    <div>
                                    <img src="/images/people.png"></img>
                                        <h3>92.5k active doctors</h3>
                                        <p>
                                        trust our solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                </Col>
               
            </Row>
        </Container>
     </div>
    )
}


export default CardTwo;