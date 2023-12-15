import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import EditProduct from '../components/FormEdicao/Form';
import FormCricao from '../components/FormCriacao/Form';
import { Relatorio } from "../pages/Relatorio";
import { Config } from "../pages/Config";
import { Login  } from "../pages/Login";


export function AppRoutes() {

  return (
    <Routes>      
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/criate" element={<FormCricao />} /> 
      <Route path="/:id" element={<EditProduct />} /> 
      <Route path="/relatorio" element={<Relatorio />} /> 
      <Route path="/config" element={<Config />} /> 
      <Route path="/login" element={<Login />} />      
    </Routes>
  );
}
