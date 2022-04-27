import React from 'react'

const Loader = () => {
  return (
    <div className="loading-elm">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Cargando productos...</span>
      </div>
      <strong>Cargando productos...</strong>
    </div>
  )
}

export default Loader
