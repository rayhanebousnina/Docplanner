import {Navbar, Nav} from 'react-bootstrap';
import {navbar} from '../css/navbar.css';
function Navigation() {
    return (
        <div>
            <Navbar expand="lg" className="navigation pb-5 px-5">
                <Navbar.Brand href="#home"><img class="logo-docplanner" src="images/logo-default-group-en.svg" alt="Docplanner Group"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="link" href="#home">About us</Nav.Link>
                        <Nav.Link className="link" href="#career">Career</Nav.Link>     
                        <Nav.Link className="link" href="#departments">Departments</Nav.Link>             
                    </Nav>                
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;