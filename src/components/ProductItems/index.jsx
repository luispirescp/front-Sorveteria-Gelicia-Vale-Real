import { Section } from "../Section";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function ProductItems({ searchValue }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleEditProduct(id) {   
    navigate(`/${id}`);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`/todos-produtos`);
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      <Section title="Produtos">
        <div className="cards">
          {
            products.map(product => (
              <div className="card" key={product.id}>
                <img src={product.image} alt="Product"/>

                <div className="details">
                  <div>
                    <h2>{product.name}</h2>                  
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
  );
}
