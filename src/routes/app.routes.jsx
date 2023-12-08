import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import EditProduct from '../components/Form/Form';
import { Estock } from "../pages/Estock";
import { Config } from "../pages/Config";


export function AppRoutes() {

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/:id" element={<EditProduct />} /> 
      <Route path="/stock" element={<Estock />} /> 
      <Route path="/config" element={<Config />} /> 
    </Routes>
  );
}
