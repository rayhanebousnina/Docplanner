import '../css/countries.css';
import { Card, Row, Col, Container, CardDeck, Button} from 'react-bootstrap';

function Countries() {
    return (
     <div className="countries mb-5">
         <Container>
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
         <CardDeck className="pb-4">
            <Card>
                <Card.Img variant="top" src="images/1.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Warsaw</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body> 
            </Card>
            <Card>
                <Card.Img variant="top" src="images/2.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Barcelona</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body> 
            </Card>
            <Card>
                <Card.Img variant="top" src="images/3.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Istanbul</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body>               
            </Card>
            </CardDeck>
            <CardDeck className="pb-4">
            <Card>
                <Card.Img variant="top" src="images/4.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Rome</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body> 
            </Card>
            <Card>
                <Card.Img variant="top" src="images/5.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Bologna</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body> 
            </Card>
            <Card>
                <Card.Img variant="top" src="images/6.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Curitiba</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body>               
            </Card>
            </CardDeck>
           
            <Card className="mb-4" style={{ width: '21rem' }}>
                <Card.Img variant="top" src="images/7.png" />
                <Card.Body>
                <Card.Title>
                    <Row>
                    <Col>Mexico City</Col>
                    <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                    </Row>
                </Card.Title>                
                </Card.Body> 
            </Card>
            <Row className="text-center mt-5 pt-5 pb-4">
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
     </div>
    )
}


export default Countries;