import { useState } from "react";
import { Container } from "./styles";

export default function MenuMobile() {
  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <Container>
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItems">
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Como Funciona</li>
            <li>Preços</li>
            <li>Login App</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
