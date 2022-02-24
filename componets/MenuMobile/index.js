import { useState } from "react";
import { Container } from "./styles";

export default function MenuMobile() {
  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <Container>
      <h1>asfasfa</h1>
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItems">
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
