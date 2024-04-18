import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const BasicExample = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand>Dung Do Do</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>Dung Do Do</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='Users' className='nav-link'>Users</NavLink>
                        <NavLink to='Admins' className='nav-link'>Admins</NavLink>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;