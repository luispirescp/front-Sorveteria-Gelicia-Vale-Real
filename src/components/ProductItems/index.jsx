import React, { useState, useEffect } from 'react';
import { Section } from '../Section';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import {
  searchProductByName,
  getAllProduct,
  buyProductsByIds // supondo que existe um serviço para comprar produtos por IDs
} from '../../services/api';

export function ProductItems({ searchValue }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Estado para armazenar o preço total

  function handleEditProduct(id) {
    navigate(`/${id}`);
  }
  const handleSearch = (event) => {
    const searchInput = event.target.value.toLowerCase(); // Obtém o valor do input e converte para minúsculas
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchInput) || // Filtra pelo nome do produto
        product.barcode.toLowerCase().includes(searchInput) // Ou pelo código de barras, etc.
    );
    setProducts(filteredProducts); // Define os produtos filtrados no estado
  };
  const handleCheckboxChange = (productId) => {
    const isSelected = selectedProducts.includes(productId);

    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
      console.log(`Produto com ID ${productId} desmarcado.`);
    } else {
      setSelectedProducts([...selectedProducts, productId]);
      console.log(`Produto com ID ${productId} marcado.`);
    }
  };

  const handleBuyProducts = async () => {
    try {
      if (selectedProducts.length > 0) {
        
        // Chamar o serviço para comprar produtos com os IDs selecionados
        const response = await buyProductsByIds(selectedProducts);
        
        // Lógica adicional após a compra (redirecionamento, atualização de estado, etc.)
        console.log('Produtos comprados:', response);

        // Por exemplo, se desejar limpar os produtos selecionados após a compra
        setSelectedProducts([]);
        window.location.reload();
      } else {
        console.log('Nenhum produto selecionado para compra.');
      }
    } catch (error) {
      console.error('Erro ao comprar produtos:', error);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;

    // Iterar pelos produtos selecionados e somar seus preços
    selectedProducts.forEach(productId => {
      const product = products.find(item => item.id === productId);
      if (product) {
        total += product.price;
      }
    });

    // Definir o preço total calculado no estado
    setTotalPrice(total);
  };

  useEffect(() => {
    // Chamada da função ao mudar a lista de produtos selecionados ou a lista de produtos
    calculateTotalPrice();
  }, [selectedProducts, products]);

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

  return (
    <>
      <div >
        <input 
        className='input-pesquisa'
          // style={{
          //  
          // }}
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
          onClick={handleSearch}
        >
          Pesquisar
        </button>
      </div>
      <div className='total-compras'>
        <button className="button-comprar" onClick={handleBuyProducts}>
          Comprar Produtos Selecionados
        </button>
        <p className='total'>Total: R$ {totalPrice.toFixed(2)}</p>
      </div>
      <Container>
        <Section title="Produtos">
          <div className="cards">
            {
              products.map(product => (
                <div className="card" key={product.id}>
                 
                  <img className="imagem" src={product.image} alt="Product" />
                  <div className="details">
                    <div>
                      <h2 className="name">{product.name}</h2>                      
                      <p className="price">Preço: R$ {product.price}</p>
                      <p className="estock">Estoque: {product.quantity}</p>
                    </div>
                    
                    <button className="editar" onClick={() => handleEditProduct(product.id)}>Editar produto</button>
                    <div className="comprar">
                    <label className="checkbox-label">
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                    Comprar
                  </label>
                  </div>
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
