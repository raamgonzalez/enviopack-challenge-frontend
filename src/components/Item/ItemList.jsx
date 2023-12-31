/* eslint-disable react/prop-types */
import React from 'react'
import { Item } from './Item'
import './ItemList.css'

export function ItemList ({ filteredItems }) {
  const products = filteredItems

  return (
		<section className='products'>
      {products.length < 1}
      <section className='products__container'>
        {
          products.map((product) => (
            <Item
              key={product.sku}
              product={product}
            />
          ))
        }
      </section>
    </section>
  )
}
