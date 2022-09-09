import { FormContainer } from "./styles";

interface BoxProps {
  children: JSX.Element[];
}

function ContainerForm(props: BoxProps) {
  return <FormContainer>{props.children}</FormContainer>;
}

export default ContainerForm;
