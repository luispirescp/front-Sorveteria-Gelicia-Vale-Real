import { Section } from "../Section";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import {
  searchProductByName,  
  getAllProduct
} from "../../services/api";

export function ProductItems({ searchValue }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleEditProduct(id) {
    navigate(`/${id}`);
  }
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getAllProduct();
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);


  const searchProduct = async () => {
    try { 
      
      const inputValue = document.querySelector('input').value;

  if (inputValue.trim() === "") {
  console.log ("clicousel ")
  }
      const results = await searchProductByName(search);      
      setProducts(results);
      if(results.length < 1){
        console.error("Não encontrado");
        handleSearch();
      }
    } catch (error) {
      console.error("Erro ao pesquisar produtos:", error);
    }
  };

  return (
    <>
       <div style={{ display: "flex", alignItems: "center" }}>
       <input
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '8px',
        }}
        placeholder="Pesquisar produtos"
        onChange={handleSearch}
      />
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={searchProduct}
      >
        Pesquisar
      </button>
          </div>

    <Container>
      <Section title="Produtos">
        <div className="cards">
          {
            products.map(product => (
              <div className="card" key={product.id}>
                <img src={product.image} alt="Product" />

                <div className="details">
                  <div>
                    <h2>{product.name}</h2>
                    <p className="barcode">codigo {product.barcode}</p>
                    <p className="price">Preço: R$ {product.price}</p>
                    <p className="estock">Estoque: {product.quantity}</p>
                  </div>
                  <button onClick={() => handleEditProduct(product.id)}>Editar produto</button>
                </div>
              </div>
            ))
          }
        </div>
      </Section>
    </Container>
    </>
  );
}
