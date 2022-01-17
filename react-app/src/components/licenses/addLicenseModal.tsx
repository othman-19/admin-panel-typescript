import React, { FC, useState } from 'react';
import '../../app/App.css';
import Modal from 'react-modal';
import AddLicenseForm from './addLicenseForm';

Modal.setAppElement('#root')

const AddLicenseModal: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        className="btn btn-primary my-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        New license
      </button>
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