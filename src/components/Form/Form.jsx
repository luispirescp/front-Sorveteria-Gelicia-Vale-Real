import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/api';
import { useNavigate } from "react-router-dom";


import { 
  FormContainer,
  FormGroup,
  InputField,
  TextAreaField,
  SubmitButton
} from './styles';

const EditProduct = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProduct() {
      try {

        
        const response = await getProductById(id);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const { name, description, image, price, quantity } = product;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        
      await updateProduct(id, product);
      navigate('/products');
      // Lógica adicional após a atualização, redirecionamento, etc.
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  return (
    
    <FormContainer>    
      <h2>Editar Produto {id}</h2>
      <form onSubmit={handleFormSubmit}>
        <FormGroup>
          <label htmlFor="name">Nome:</label>
          <InputField
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </FormGroup>
  
        <FormGroup>
          <label htmlFor="description">Descrição:</label>
          <TextAreaField
            id="description"
            name="description"
            value={description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </FormGroup>
  
        <FormGroup>
  <label htmlFor="image">Imagem:</label>
  <InputField
    type="text"
    id="image"
    name="image"
    value={image}
    onChange={(e) => setProduct({ ...product, image: e.target.value })}
  />
  {/* Renderizando a imagem se o campo image não estiver vazio */}
  {image && (
    <img src={image} alt="Imagem do Produto" style={{ maxWidth: '200px' }} />
  )}
</FormGroup>
  
        <FormGroup>
          <label htmlFor="price">Preço:</label>
          <InputField
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="quantity">Quantidade:</label>
          <InputField
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
        </FormGroup>
        <SubmitButton type="submit">Salvar</SubmitButton>        
      </form>
    </FormContainer>
    
  );
};

export default EditProduct;
