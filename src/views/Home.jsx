// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'
import { useItems } from '../hooks/useItems'
import { Spinner } from '../components/ui/Spinner'

export function Home () {
  const { products, loading } = useItems()
  return (
		<main className='home'>
      <h2>Catálogo</h2>
      {loading ? <Spinner/> : <ItemList products={products}/>}
    </main>
  )
}
//
