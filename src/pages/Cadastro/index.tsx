import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import ContainerHome from "../../components/ContainerHome";
import ContainerForm  from "../../components/BoxForm";
import HeaderForm from "../../components/HeaderForm";

import "../Login/index";


function Cadastro() {
  const [cadastro, setCadastro] = useState<string>("");
  
  return (
    <ContainerHome>
      <ContainerForm>
        <HeaderForm texto="cadastro"/>
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="nome"
              placeholder="nome"
              className="text-center"
              onChange={(event) => setCadastro(event.target.value)}
              value={cadastro}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="email"
              className="text-center"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="senha"
              className="text-center"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="confirmar senha"
              className="text-center"
            />
          </Form.Group>
          <Form.Group className="mb-3 pb-5" controlId="formBasicPassword">
            <Form.Control
              type="apto"
              placeholder="unidade/apartamento"
              className="text-center"
            />
          </Form.Group>
          <Button variant="btn" type="submit">
            entrar
          </Button>
        </Form>
      </ContainerForm>
    </ContainerHome>
  );
}

export default Cadastro;