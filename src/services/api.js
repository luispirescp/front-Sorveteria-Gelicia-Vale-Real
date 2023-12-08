import axios from "axios";

const env = "https://sorveteria-deploy-render.onrender.com";
// const env = "http://localhost:8080";

// Configuração da API principal
export const api = axios.create({
  baseURL: env //"https://sorveteria-deploy-render.onrender.com"
});

// Função para buscar um produto por ID
export const getProductById = (id) => {
  return axios.get(`${env}/${id}`);
};

export const updateProduct = async (id, updatedProductData) => {
  try {
    const response = await axios.put(`${env}/${id}`, updatedProductData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o produto');
  }
};

export const searchProductByName = async (name) => {
  try {
    const response = await axios.get(`${env}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o produto');
  }
};