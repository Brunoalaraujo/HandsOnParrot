import { Link as LinkRoute } from "react-router-dom";

interface LinkProps {
  texto: string;
  redirect: string;
}

export default function Link(props: LinkProps) {
  return <LinkRoute to={props.redirect}>{props.texto}</LinkRoute>;
}
