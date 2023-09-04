// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'
import { useItems } from '../hooks/useItems'
import { Spinner } from '../components/ui/Spinner'
import { Paginator } from '../components/Paginator/Paginator'
import { SearchItems } from '../components/SearchItems/SearchItems'

export function Home () {
  const { products, loading, nextHandlerPage, prevHandlerPage, currentPage, filteredItems, ITEMS_PER_PAGE } = useItems()

  return (
		<main className='home'>
      <h2>Catálogo</h2>
      <section>
        <SearchItems />
      </section>
      {loading ? <Spinner/> : <ItemList filteredItems={filteredItems}/>}
      <Paginator
        products={products}
        nextHandlerPage={nextHandlerPage}
        prevHandlerPage={prevHandlerPage}
        currentPage={currentPage}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
    </main>
  )
}
//
