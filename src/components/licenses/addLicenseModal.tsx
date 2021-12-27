import React, { FC, useState } from 'react';
import '../../app/App.css';
import Modal from 'react-modal';
import AddLicenseForm from './addLicenseForm';

Modal.setAppElement('#root')

const AddLicenseModal: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div><AddLicenseForm /></div>
          
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => setModalIsOpen(false)}
          >
          </button>
        
        
      </Modal>
    </>
  )
}

export default AddLicenseModal