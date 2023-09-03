import React from 'react'
import './Paginator.css'

export function Paginator ({ page, prevHandlerPage, nextHandlerPage }) {
  return (
		<nav className='paginator'>
      <button onClick={prevHandlerPage}>Anterior</button>
      <h3>Pagina: 1 de {4}</h3>
      <button onClick={nextHandlerPage}>Siguiente</button>
    </nav>
  )
}
