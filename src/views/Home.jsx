import { ItemList } from '../components/Item/ItemList'
import { useItems } from '../hooks/useItems'
import { Spinner } from '../components/ui/Spinner'
import { Paginator } from '../components/Paginator/Paginator'
import { SearchItems } from '../components/SearchItems/SearchItems'
import { useEffect, useState } from 'react'
import { Title } from '../components/ui/Title'
import './Home.css'

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
      <Title>Catálogo</Title>
      <section className='home__search'>
        <SearchItems
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ul className='home__ul'>
          ORDENAR POR:
          <select
            className='home__selected card'
            aria-label='.form-select-sm example'
            value={orderBy} // Establecer el valor seleccionado en el estado
            onChange={handleOrderByChange} // Manejar el cambio de selección
          >
            <option value='0'>Selecionar</option>
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
