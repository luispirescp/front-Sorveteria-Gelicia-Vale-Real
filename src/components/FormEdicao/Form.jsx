import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  FormGroup,
  InputField,
  TextAreaField,
  SubmitButton,
  FieldImg,
  StyledLink
} from './styles';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: '',
  });

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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    description: Yup.string().required('A descrição é obrigatória'),
    image: Yup.string().url('A imagem deve ser uma URL válida').required('A imagem é obrigatória'),
    price: Yup.number().required('O preço é obrigatório').positive('O preço deve ser positivo'),
    quantity: Yup.number()
      .required('A quantidade é obrigatória')
      .integer('A quantidade deve ser um número inteiro')
      .positive('A quantidade deve ser positiva'),
  });

  const handleFormSubmit = async (values) => {
    try {
      await updateProduct(id, values);
      navigate('/products');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  return (
    <FormContainer>
      <h2 className="titulo">Editar Produto {id}</h2>
      <Formik
        enableReinitialize
        initialValues={product}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FormGroup>
              <label htmlFor="name">Nome:</label>
              <InputField type="text" id="name" name="name" placeholder="digite o nome do produto" as={InputField} />
              <ErrorMessage name="name" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="description">Descrição:</label>
              <InputField as="textarea" id="description" name="description" placeholder="digite a descrição do produto" rows={4} cols={50} as={TextAreaField} />
              <ErrorMessage name="description" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="image">Imagem (URL):</label>
              <FieldImg
                type="text"
                id="image"
                placeholder="cole a url da imagem"
                name="image"
                as={InputField}
                onChange={(e) => setFieldValue('image', e.target.value)}
              />
              <ErrorMessage name="image" component="div" />
              {values.image && (
                <img
                  src={values.image}
                  alt="Imagem do Produto"
                  style={{ maxWidth: '200px' }}
                />
              )}
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">Preço:</label>
              <Field type="number" id="price" name="price" as={InputField} />
              <ErrorMessage name="price" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="quantity">Quantidade:</label>
              <Field type="number" id="quantity" name="quantity" as={InputField} />
              <ErrorMessage name="quantity" component="div" />
            </FormGroup>

            <SubmitButton id="salvar" type="submit">Salvar</SubmitButton>
            <StyledLink to="/products">Voltar</StyledLink>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default EditProduct;
