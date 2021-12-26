import React, { FC, useState } from 'react';
import '../../app/App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const AddLicenceModal: FC = () => {
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
        <h2>Add new licence</h2>
        <div>Licence Form</div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  )
}

export default AddLicenceModal