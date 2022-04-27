import React from 'react'

const Modal = ({title, content, modal, setModal}) => {

  return (
    <div className="modal" style={{ display: modal === true ? 'flex' : 'none' }}>
      <section className="modal-main">
        <h4>{ title }</h4>
        <span>{ content }</span>
        <button type="button" onClick={(e) => setModal(false)} >De acuerdo</button>
      </section>
    </div>
  )
}

export default Modal
