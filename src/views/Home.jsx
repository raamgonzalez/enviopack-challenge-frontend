import { useEffect } from 'react'
// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'

export function Home () {
  const getItems = async () => {
    try {
      // setLoading(true)
      const res = await fetch('./src/mocks/products.json')
      const data = await res.json()
      console.log(data.productos)
      // setLoading(false)
    } catch (error) {
      console.log(error.message)
      // setLoading(false)
    }
  }
  getItems()
  return (
		<main className='products'>
      <ItemList/>
    </main>
  )
}
