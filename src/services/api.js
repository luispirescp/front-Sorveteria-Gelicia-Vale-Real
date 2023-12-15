import axios from 'axios';

// const env = "http://localhost:8080";
const env = 'https://sorveteria-deploy-render.onrender.com'

const createProduct = (dataCreateProduct) => {
  return axios.post(`${env}/create-produto`, dataCreateProduct);
};

const getValorTotalVendido = () => {
  return axios.get(`${env}/valorTotalVendido`); // Substitua pela URL correta do endpoint
};

const buyProductsByIds = (selectedProducts) => {
  return axios.post(`${env}/reduces-stock`, selectedProducts);
};

const getProductById = (id) => {
  return axios.get(`${env}/${id}`);
};

const getAllProduct = () => {
  return axios.get(`${env}/todos-produtos`);
};

const updateProduct = async (id, updatedProductData) => {
  try {
    const response = await axios.put(`${env}/${id}`, updatedProductData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o produto');
  }
};

const searchProductByName = async (name) => {
  try {
    const response = await axios.get(`${env}/product/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao buscar o produto');
  }
};



export {
  createProduct,
  getProductById,
  searchProductByName,
  updateProduct,
  getAllProduct,
  buyProductsByIds,
  getValorTotalVendido
};
