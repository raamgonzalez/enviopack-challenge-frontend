// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'
import { useItems } from '../hooks/useItems'
import { Spinner } from '../components/ui/Spinner'
import { Paginator } from '../components/Paginator/Paginator'

export function Home () {
  const { products, loading, nextHandlerPage, prevHandlerPage, currentPage, ITEMS_PER_PAGE, productsFromApi } = useItems()
  return (
		<main className='home'>
      <h2>Catálogo</h2>
      {loading ? <Spinner/> : <ItemList products={products}/>}
      <Paginator
        nextHandlerPage={nextHandlerPage}
        prevHandlerPage={prevHandlerPage}
        currentPage={currentPage}
        productsFromApi={productsFromApi}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
    </main>
  )
}
//
