// import { productos } from '../mocks/products.json'
import { ItemList } from '../components/Item/ItemList'
import { useItems } from '../hooks/useItems'
import { Spinner } from '../components/ui/Spinner'
import { Paginator } from '../components/Paginator/Paginator'
import { SearchItems } from '../components/SearchItems/SearchItems'
import { useEffect, useState } from 'react'

export function Home () {
  const [search, setSearch] = useState('')
  const { products, filteredItems, loading, nextHandlerPage, prevHandlerPage, currentPage, ITEMS_PER_PAGE, handleSubmit, handleChange, orderBy, handleOrderByChange } = useItems(search, setSearch)

  useEffect(() => {}, [search, products])

  function noItemsResults () {
    return (
      <div className='home'>
        <section className='home__container'>
          <h1 className=''>No hay resultados</h1>
          <p className=''>Intente con otra búsqueda</p>
        </section>
      </div>
    )
  }

  return (
		<main className='home'>
      <h2>Catálogo</h2>
      <section className='home__search'>
        <SearchItems
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ul>
          <select
            id='selectOrden'
            className='home__selected'
            aria-label='.form-select-sm example'
            value={orderBy} // Establecer el valor seleccionado en el estado
            onChange={handleOrderByChange} // Manejar el cambio de selección
          >
            <option value='0'>Ordenar por:</option>
            <option value='1'>Mayor a menor</option>
            <option value='2'>Menor a mayor</option>
          </select>
        </ul>
      </section>
      <section className='home__container'>
        {loading && <Spinner/>}
        { filteredItems.length > 0
          ? <ItemList filteredItems={filteredItems}/>
          : noItemsResults()
        }
        <Paginator
          products={products}
          nextHandlerPage={nextHandlerPage}
          prevHandlerPage={prevHandlerPage}
          currentPage={currentPage}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        />
      </section>
    </main>
  )
}
//
