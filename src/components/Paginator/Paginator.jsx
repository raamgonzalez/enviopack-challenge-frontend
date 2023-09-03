import React from 'react'
import './Paginator.css'

export function Paginator ({ currentPage, prevHandlerPage, nextHandlerPage, productsFromApi, ITEMS_PER_PAGE }) {
  const totalPages = Math.round(productsFromApi.length / ITEMS_PER_PAGE)

  return (
		<nav className='paginator'>
      <button onClick={prevHandlerPage}>Anterior</button>
      <h3>Pagina: {currentPage + 1} de {totalPages}</h3>
      <button onClick={nextHandlerPage}>Siguiente</button>
    </nav>
  )
}
