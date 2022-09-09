import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom"

import ContainerHome from "../../components/ContainerHome";
import ContainerForm  from "../../components/BoxForm";
import HeaderForm from "../../components/HeaderForm";


function Login() {
   return (
    <ContainerHome>
      <ContainerForm>
        <HeaderForm texto="login"/>
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3 pb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="email" className="text-center"/>
          </Form.Group>
          <Form.Group className="mb-3 pb-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" className="text-center"/>
          </Form.Group>
          <Button type='submit'>
            Entrar
          </Button>
        </Form>
        <Link to="/cadastro" className="mt-4">cadastre-se</Link>
      </ContainerForm>
    </ContainerHome>
  );
}

export default Login;