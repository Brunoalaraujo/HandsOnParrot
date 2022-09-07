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
          <img src={Logo} alt="Logo Parrot" className="pb-2" />
          <h3 className="pb-5">login</h3>
        </div>
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3 pb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email" className="text-center"/>
          </Form.Group>
          <Form.Group className="mb-3 pb-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" className="text-center"/>
          </Form.Group>
          <Button variant="btn mb-5" type="submit">
            Entrar
          </Button>
        </Form>
        <p>cadastre-se</p>
      </div>
    </section>
  );
}

export default Login;
