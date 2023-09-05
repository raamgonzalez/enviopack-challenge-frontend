import React, { useContext, useState } from 'react'
import './Item.css'
import { Button } from '../ui/Button'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export function Item ({ product }) {
  const [irACarrito, setIrACarrito] = useState(false)
  const { onAddProduct } = useContext(CartContext)

  const onAdd = () => {
    setIrACarrito(true)
    onAddProduct({ product })
  }

  return (
    <article className='card' key={product.id}>
      <img className='product__img' src={product.img} alt={`Imagen de un celular, modelo ${product.title}`}/>
      <main className='product__container'>
        <h2 className='product__h2'>{product.title}</h2>
        <p className='product__p'>$ {product.price}</p>
        <Button onClick={onAdd}>{irACarrito ? <Link to='/cart'>Ver Carrito</Link> : 'Agregar al carrito'}</Button>
      </main>
    </article>
  )
}
