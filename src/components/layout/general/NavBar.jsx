import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './general.css'


const NavBar = () => {
  const navLinks = [
    {
      id: 0,
      link: "/Home",
      label: "Home"
    },
    {
      id: 1,
      link: "/About",
      label: "About Us"
    },
    {
      id: 2,
      link: "/Services",
      label: "Services"
    },
    {
      id: 3,
      link: "/Doctors",
      label: "Doctors"
    },
    {
      id: 4,
      link: "/Articles",
      label: "Articles"
    },
    {
      id: 5,
      link: "/Forum",
      label: "Forum"
    },
    {
      id: 6,
      link: "/Contact",
      label: "Contact Us"
    }
  ]
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(({ label, link, id }) => <Nav.Link key={id}><Link to={link}>{label}</Link></Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}
export default NavBar;