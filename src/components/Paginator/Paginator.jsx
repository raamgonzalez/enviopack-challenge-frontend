import React from 'react'
import './Paginator.css'

export function Paginator ({ currentPage, prevHandlerPage, nextHandlerPage, products, ITEMS_PER_PAGE }) {
  const totalPages = Math.round(products.length / ITEMS_PER_PAGE)
  return (
		<nav className='paginator'>
      <button onClick={prevHandlerPage}>Anterior</button>
      <h3>Pagina: {currentPage + 1} de {totalPages === 0 ? 1 : totalPages}</h3>
      <button onClick={nextHandlerPage}>Siguiente</button>
    </nav>
  )
}
