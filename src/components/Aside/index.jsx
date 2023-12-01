// Styling Imports
import { Container } from "./styles";

// Components Imports


// Strategic Imports
import { useNavigate } from "react-router-dom"

// Icons Imports

import { BsBarChartLine } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

// Image Imports
import logo from "../../assets/logo-sorveteria.png";

export function Aside() {

  const navigate = useNavigate();

  function handleNavigateHome() {
    navigate("/");
  }

  function handleNavigateProducts() {
    navigate("/products");
  }

  function handleNavigateConfig() {
    navigate("/config");
  }

  return (
    <Container>
      <div className="info">
        <a href="/">
          <img src={logo} />
          Sorveteria
        </a>

        <div>
          <img src="https://github.com/KevinSilvaa.png" />
          <h2>Kevin Silvaa</h2>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <button onClick={handleNavigateHome}>
              <BsBarChartLine />
              Dashboard
            </button>
          </li>

          <li>
            <button onClick={handleNavigateProducts}>
              <MdProductionQuantityLimits />
              Produtos
            </button>
          </li>

          <li>
            <button onClick={handleNavigateConfig}>
              <IoSettingsOutline />
              Configurações
            </button>
          </li>
        </ul>

        <button className="logout">
          <FiLogOut />
          Logout
        </button>
      </nav>
    </Container>
  );
}
