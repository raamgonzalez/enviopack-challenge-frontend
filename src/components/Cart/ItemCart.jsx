import { useContext } from 'react'
import { Button } from '../ui/Button'
import { CartContext } from '../../context/CartContext'
import './ItemCart.css'

export function ItemCart ({ product }) {
  const { eraseProduct } = useContext(CartContext)
  return (
    <>
      <section className='card product__cart'>
        <section className='cart__container'>
          <img src={product.img}/>
          <p>{product.title}</p>
        </section>
        <section className='cart__price'>
          <span>$ {product.price}</span>
          <Button onClick={() => eraseProduct(product.id)}>X</Button>
        </section>
      </section>
    </>
  )
}
