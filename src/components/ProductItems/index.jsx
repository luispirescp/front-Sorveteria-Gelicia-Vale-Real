// Styling Imports
import { Section } from "../Section";
import { Container } from "./styles";

// Components Imports


// Strategic Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function ProductItems({ searchValue }) {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function handleEditProduct() {
    navigate("/editproduct");
  }

  useEffect(() => {
    async function handleProducts() {
      const response = await api.get(`/todos-produtos?name=${searchValue}`);
      setProducts(response.data);
    }

    handleProducts();
  }, [products])

  return (
    <Container>
      <Section title="Produtos">
        <div className="cards">
          {
            products.map(product => (
              <div className="card" key={product.id}>
                <img src={`${api.defaults.baseURL}/public/${product.image}`} />

                <div className="details">
                  <div>
                    <h2>{product.name}</h2>
                    <p className="price">Preço: R$ {product.price}</p>
                  </div>
                  <button onClick={handleEditProduct}>Editar produto</button>
                </div>
              </div>
            ))
          }
        </div>
      </Section>
    </Container>
  );
}
