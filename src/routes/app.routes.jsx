import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import FormEdicao from '../components/FormEdicao/Form';
import FormCricao from '../components/FormCriacao/FormCriacao';
import { Relatorio } from "../pages/Relatorio";
import { Config } from "../pages/Config";
import { Login  } from "../pages/Login";


export function AppRoutes() {

  return (
    <Routes>      
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/criate-produto" element={<FormCricao />} /> 
      <Route path="/:id" element={<FormEdicao />} /> 
      <Route path="/relatorio" element={<Relatorio />} /> 
      <Route path="/config" element={<Config />} /> 
      <Route path="/login" element={<Login />} />      
    </Routes>
  );
}
