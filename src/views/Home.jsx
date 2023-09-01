import { useEffect } from 'react'
// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'

export function Home () {
  return (
		<main className='products'>
      <ItemList/>
    </main>
  )
}
