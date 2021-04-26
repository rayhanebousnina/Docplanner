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
                            <div class="style-select">
                                <select className="switcher" data-id="domain-switcher">
                                    <option>Choose country</option>
                                        <option value="http://www.doctoraliar.com">Argentina</option>
                                        <option value="http://www.doctoralia.com.br">Brazil</option>
                                        <option value="http://www.doctoralia.cl">Chile</option>
                                        <option value="http://www.doctoralia.co">Colombia</option>
                                        <option value="http://www.znamylekar.cz">Czech</option>
                                        <option value="http://www.miodottore.it">Italy</option>
                                        <option value="http://www.doctoralia.com.mx">Mexico</option>
                                        <option value="http://www.doctoralia.pe">Peru</option>
                                        <option value="http://www.znanylekarz.pl">Poland</option>
                                        <option value="http://www.doctoralia.com.pt">Portugal</option>
                                        <option value="http://www.doctoralia.es">Spain</option>
                                        <option value="http://www.doktortakvimi.com">Turkey</option>
                                </select>
						    </div>
                         
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
                            <div class="style-select">
                                <select className="switcher" data-id="domain-switcher">
                                    <option>Choose country</option>
                                        <option value="https://academy.doctoraliar.com">Argentina</option>
                                        <option value="https://academy.doctoralia.com.br">Brazil</option>
                                        <option value="https://academy.doctoralia.cl">Chile</option>
                                        <option value="https://academy.doctoralia.co">Colombia</option>
                                        <option value="https://lekar.znamylekar.cz">Czech</option>
                                        <option value="https://phone.docplanner.de/#/">Germany</option>
                                        <option value="https://dottori.miodottore.it">Italy</option>
                                        <option value="https://academy.doctoralia.com.mx">Mexico</option>
                                        <option value="https://academy.doctoralia.pe">Peru</option>
                                        <option value="https://lekarz.znanylekarz.pl">Poland</option>
                                        <option value="https://academy.doctoralia.es">Spain</option>
                                        <option value="https://uzman.doktortakvimi.com">Turkey</option>
								</select>
						    </div>
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
                            <Row className="pl-4">
                                <select className="switcher" data-id="domain-switcher">
                                    <option>2 to 20 specialists</option>
                                        <option value="http://clinicas.doctoralia.com.br/software-de-gestao-para-clinicas-e-centros">Brazil</option>
                                        <option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
                                        <option value="http://centrimedici.miodottore.it/saas/funzionalita">Italy</option>
                                        <option value="http://clinicas.doctoralia.com.mx/software-gestion-clinicas">Mexico</option>
                                        <option value="http://placowka.znanylekarz.pl/system-od-znanylekarz">Poland</option>
                                        <option value="http://clinicas.doctoralia.es/software-gestion-clinicas">Spain</option>
                                        <option value="http://kurumsal.doktortakvimi.com">Turkey</option>
								</select>
                            </Row>
                            <Row className="pl-4">
                                <select className="switcher" data-id="domain-switcher">
                                    <option>More than 20 specialists</option>
                                        <option value="http://clinicas.doctoralia.com.br/tuotempo">Brazil</option>
                                        <option value="http://centrimedici.miodottore.it/marketplace/funzionalita">Italy</option>
                                        <option value="http://clinicas.doctoralia.com.mx/tuotempo">Mexico</option>
                                        <option value="http://placowka.znanylekarz.pl/poznaj-tuotempo">Poland</option>
                                        <option value="http://clinicas.doctoralia.es/tuotempo">Spain</option>
								</select>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardOne;