import summary from "../assets/icons/resumo.svg";
import sales from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import settings from "../assets/icons/configuracoes.svg";
import contact from "../assets/icons/contato.svg";
import exit from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <NavLink to="/">Summary</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/sales">Sales</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="#">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a href="#">Settings</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a href="#">Contact</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a href="#">Exit</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
