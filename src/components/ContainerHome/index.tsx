import { HomeContainer } from "./styles";

interface HomeProps {
  children: JSX.Element;
}

function ContainerHome(props: HomeProps) {
  return <HomeContainer>{props.children}</HomeContainer>;
}

export default ContainerHome;
