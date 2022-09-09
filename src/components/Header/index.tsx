import { Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom"

import Logo from "../../assets/images/logoHorizontalColorido.png";

import { Nav, HeaderLogo} from "./stlyes";

function Header() {
  return (
    <Nav>
      <Container>
        <Navbar.Brand>
          <HeaderLogo src={Logo} alt="Logo Parrot" className="headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="textNavbar">
            Olá, usuário | <Link to="/login" className="sair">sair </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Nav>
  );
}

export default Header;
