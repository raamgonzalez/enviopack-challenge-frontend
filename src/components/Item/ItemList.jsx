import React from 'react'
import { useItems } from '../../hooks/useItems'
import { Spinner } from '../ui/Spinner'
import './ItemList.css'

export function ItemList () {
  const { products, loading } = useItems()
  console.log('items', products)

  return (
		<main className='products'>
      {products.length < 1}
      {loading && <Spinner/>}
      <section className='products__container'>
        {!loading && products.length > 0
          ? products.map(({ title, id, price, sku, img }) => (
            <article key={id}>
              <img src={img} alt={`Imagen de un celular, modelo ${title}`}/>
              <main>
                <h2>{title}</h2>
                <p>{price}</p>
              </main>
            </article>
          ))
          : !loading && products.length < 1 && (<h1 className= "text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)}
      </section>
    </main>
  )
}
