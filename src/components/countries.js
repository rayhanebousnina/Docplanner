import '../css/countries.css';
import { Card, Row, Col, Container, CardDeck, Button} from 'react-bootstrap';



function Countries(props) {
    return (
        props.pays.map(el => 
            
            <div className="countries mb-5">
         
            <Container>
       
            <CardDeck className="pb-4">
               <Card>
                   <img src={el.src}/>
                   <Card.Body>
                   <Card.Title>
                       <Row>
                       <Col>{el.title}</Col>
                       <Col><Button variant="primary" size="sm">SEE OPENINGS</Button></Col>
                       </Row>
                   </Card.Title>                
                   </Card.Body> 
               </Card>              
            </CardDeck>
            
            </Container>
        </div>

            )

    )
}


export default Countries;