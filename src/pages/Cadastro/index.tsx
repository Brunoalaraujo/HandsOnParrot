import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Logo from "../../assets/images/logoColorido.png";

import "../../styles/global.css";
import "../Login/index";

function Cadastro() {
  return (
    <section className="container">
      <div className="containerForm">
        <div className="head pb-5">
          <img src={Logo} alt="Logo Parrot" />
          <h3>cadastro</h3>
        </div>
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="nome" placeholder="nome" className="text-center" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email" className="text-center"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" className="text-center"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="confirmar senha" className="text-center"/>
          </Form.Group>
          <Form.Group className="mb-3 pb-5" controlId="formBasicPassword">
            <Form.Control type="apto" placeholder="unidade/apartamento" className="text-center"/>
          </Form.Group>
          <Button variant="btn" type="submit">
            entrar
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Cadastro;
