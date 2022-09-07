import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Logo from "../../assets/images/logoColorido.png";

import "../../styles/global.css"
import "./styles.css";


function Login() {
  return (
    <section className="container">
      <div className="containerForm">
        <div className="head">
          <img src={Logo} alt="Logo Parrot" />
          <h3>login</h3>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
        <a href="">cadastre-se</a>
      </div>
    </section>
  );
}

export default Login;
