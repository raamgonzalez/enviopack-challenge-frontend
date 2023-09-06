import { Button } from '../ui/Button'
import './Paginator.css'

export function Paginator ({ currentPage, prevHandlerPage, nextHandlerPage, products, ITEMS_PER_PAGE }) {
  const totalPages = Math.round((products.length / ITEMS_PER_PAGE) + 0.20)

  return (
		<nav className='paginator'>
      <Button onClick={prevHandlerPage}>Anterior</Button>
      <h2>Pagina: {currentPage + 1} de {totalPages === 0 ? 1 : totalPages}</h2>
      <Button onClick={nextHandlerPage}>Siguiente</Button>
    </nav>
  )
}
