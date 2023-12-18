import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProduct } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

import {
  FormContainer,
  FormGroup,
  InputField,
  TextAreaField,
  InputFieldCodBarra,
  SubmitButton,
  ButtonVoltar
} from './styles';

const CreateProductForm = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [initialValues, setInitialValues] = useState({
    name: '',
    barcode: '',
    description: '',
    image: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    setInitialValues(prevValues => ({
      ...prevValues,
      image: imageUrl
    }));
  }, [imageUrl]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    barcode: Yup.string().required('O barcode é obrigatório'),    
    price: Yup.number().required('O preço é obrigatório').positive('O preço deve ser positivo'),
    quantity: Yup.number().required('A quantidade é obrigatória').integer('A quantidade deve ser um número inteiro').positive('A quantidade deve ser positiva'),
  });

  const handleFormSubmit = async (values) => {
    try {
      const data = {
        ...values,
        image: imageUrl || values.image, // Use imageUrl se disponível, senão use o valor de values.image
      };

      await createProduct(data);
      navigate('/products');
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
    }
  };

  return (
    <FormContainer>
      <h2>Criar Novo Produto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form>
            <FormGroup>
              <label htmlFor="name">Nome:</label>
              <Field type="text" placeholder="digite o nome do produto" id="name" name="name" as={InputField}/>
              <ErrorMessage name="name" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="barcode">Código de Barras:</label>
              <Field type="text" id="barcode" placeholder="insira o código de barras" name="barcode" as={InputFieldCodBarra} />
              <ErrorMessage name="barcode" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="description">Descrição:</label>
              <Field
                as={TextAreaField} // Defina o tipo de campo a ser renderizado
                id="description"
                name="description"
                placeholder="Descreva sobre"
                rows={4}
                cols={50}
              />
              <ErrorMessage name="description" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="image">Imagem (URL):</label>
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="cole a url da imagem"
                as={InputField}
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
              />
              <ErrorMessage name="image" component="div" />
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Imagem do Produto"
                  style={{ maxWidth: '200px' }}
                />
              )}
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">Preço:</label>
              <Field 
              type="number" 
              id="price" 
              name="price" 
              placeholder="ex:4.45"
              as={InputField} />
              <ErrorMessage name="price" component="div" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="quantity">Quantidade:</label>
              <Field type="number" id="quantity" name="quantity" as={InputField} />
              <ErrorMessage name="quantity" component="div" />
            </FormGroup>

            <SubmitButton id="salvar" type="submit">Salvar</SubmitButton>
            <Link to="/products">
              <ButtonVoltar id="voltar" >Voltar</ButtonVoltar>
            </Link>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default CreateProductForm;
