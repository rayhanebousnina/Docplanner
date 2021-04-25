import { Card1 } from '../css/card1.css';
import { Card, Row, Col } from 'react-bootstrap';


function CardOne() {
    return (
        <div>
            <Row className="">
                <Col xs={12} md={4}>
                    <Card className="card1 mb-5 mx-4">
                        <Card.Body className="cbody">
                            <img className="pb-2" src="images/icon-patients.svg"></img>
                            <Card.Title className="ctitle">For patients</Card.Title>
                            <Card.Text className="ctext pb-5 mb-5">
                                Find a doctor, book a visit and solve any health-related doubt
                            </Card.Text>
                            <Card.Link href="#">Choose country</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="card2 mb-5 mx-4">
                        <Card.Body className="cbody">
                            <img className="pb-2" src="images/icon-doctors.svg"></img>
                            <Card.Title className="ctitle">For doctors</Card.Title>
                            <Card.Text className="ctext pb-5 mb-5">
                                Save time managing visits and cut no-shows by half
                            </Card.Text>
                            <Card.Link href="#">Choose country</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="card3 mb-5 mx-4">
                        <Card.Body className="cbody">
                            <img className="pb-2" src="images/icon-clinics.svg"></img>
                            <Card.Title className="ctitle">For clinics</Card.Title>
                            <Card.Text className="ctext pb-5 mb-5">
                                Deliver an exceptional patient experience in your clinic
                            </Card.Text>
                            <Row className="pl-4"><Card.Link href="#">2 to 20 specialists</Card.Link></Row>
                            <Row className="pl-4"><Card.Link href="#">More than 20 specialists</Card.Link></Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardOne;