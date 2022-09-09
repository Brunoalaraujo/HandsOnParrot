import {FormHead} from './styles'

import Logo from "../../assets/images/logoColorido.png";

interface HeaderProps {
    texto: string
}

function HeaderForm(props: HeaderProps) {
    return(
        <FormHead>
          <img src={Logo} alt="Logo Parrot" className="pb-2" />
          <h3 className="pb-5">{props.texto}</h3>
        </FormHead>
    )
}

export default HeaderForm