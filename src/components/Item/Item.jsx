import React from 'react'
import './Item.css'
export function Item ({ id, img, title, price }) {
  return (
    <article className='product' key={id}>
      <img className='product__img' src={img} alt={`Imagen de un celular, modelo ${title}`}/>
      <main className='product__container'>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Agregar al carrito</button>
      </main>
    </article>
  )
}
