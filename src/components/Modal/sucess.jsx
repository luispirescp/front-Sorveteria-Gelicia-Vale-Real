import React from 'react';
import Modal from 'react-modal';

const SuccessModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Sucesso!</h2>
      <p>Os dados foram salvos com sucesso.</p>
    </Modal>
  );
};

export default SuccessModal;
