import React, { useContext, useState } from 'react'
import './Item.css'
import { Button } from '../ui/Button'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

export function Item ({ product }) {
  const [irACarrito, setIrACarrito] = useState(false)
  const { onAddProduct } = useContext(CartContext)
  const navigate = useNavigate()

  const onAdd = () => {
    onAddProduct({ product })
    setIrACarrito(true)
    if (irACarrito) { navigate('/cart') }
  }

  const discountPrice = () => {
    if (product.discount) {
      const discount = product.price * product.discount / 100
      return Math.round(product.price - discount)
    }
    return product.price
  }

  return (
    <article className='card product__article' key={product.id}>
      <img className='product__img' src={product.img} alt={`Imagen de un celular, modelo ${product.title}`}/>
      <main className='product__container'>
        <h2 className='product__h2'>{product.title}</h2>
        <div className='product__discount'>
          <p className='product__p'>$ {discountPrice()}</p>
          {product.discount ? <p className='product__p--discount'>${product.price}<span className='product__p--discount'>{product.discount}%off</span></p> : null}
        </div>
        <Button onClick={onAdd}>{irACarrito ? 'Ver Carrito' : 'Agregar al carrito'}</Button>
      </main>
    </article>
  )
}
