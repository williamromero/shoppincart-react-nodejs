import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({props, history, product}) => {

  const addToCartHandler = () => {
    props.history.push(`/productos/${product.slug}`)
  }

  return (
    <>
    <div className="card">
      <img src={ product.image } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ product.title }</h5>
        <p className="card-text">{ product.description.substring(0, 50) }</p>
        <Rating rating={product.rating} numReviews={product.numReviews} />

        <button className="btn-product" onClick={ addToCartHandler } >
          <i className="fas fa-shopping-basket"></i>
          Agregar al carrito
        </button>
      </div>
    </div>
    </>
  )
}

export default Product
