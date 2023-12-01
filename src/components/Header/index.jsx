// Styling Imports
import { Container } from "./styles";

// Components Imports
import { InputSearch } from "../InputSearch";

// Strategic Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons Imports
import { IoMenu, IoClose, IoSettingsOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

export function Header() {

  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  function handleOpen() {
    setClick(!click);
  }

  function handleNavigateHome() {
    handleOpen();

    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  function handleNavigateProducts() {
    handleOpen();

    setTimeout(() => {
      navigate("/products");
    }, 500);
  }

  function handleNavigateConfig() {
    handleOpen();

    setTimeout(() => {
      navigate("/config");
    }, 500);
  }

  return (
    <Container>
      <button className={click ? "menu active" : "menu"} onClick={handleOpen}>
        {click ? <IoClose /> : <IoMenu />}
      </button>
      
      <nav className={click ? "navbar active" : "navbar"}>
        
        <ul>
          <li>
            <button onClick={handleNavigateHome}>
              <MdProductionQuantityLimits />
              Dashboard
            </button>
          </li>

          <li>
            <button onClick={handleNavigateProducts}>
              <BsBarChartLine />
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

      <InputSearch
        placeholder="Pesquisar produtos"
      />
    </Container>
  );
}
