/* eslint-disable react/prop-types */
import React from 'react'
import './ItemList.css'
import { Item } from './Item'

export function ItemList ({ products }) {
  return (
		<section className='products'>
      {products.length < 1}
      <section className='products__container'>
        {
          products.map(({ title, id, price, sku, img }) => (
            <Item
              key={sku}
              id={id}
              title={title}
              price={price}
              sku={sku}
              img={img}
            />
          ))
        }
      </section>
    </section>
  )
}
