import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import { ITEMS_PER_PAGE, INITIAL_PAGE } from '../utils/paginationConfig'

export function useItems (search, setSearch) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const [index, setIndex] = useState(0) // Estado paginator
  const [orderBy, setOrderBy] = useState('0') // Estado para el orden seleccionado
  const [sortedItems, setSortedItems] = useState([]) // Estado para los elementos ordenados

  // Peticion a getItems
  useEffect(() => {
    setLoading(true)
    getItems(search) // Si en vez de ponerle search lo hardcodeo con la palabra 'motorola' me lo toma
      .then(productos => {
        setProducts(productos)
        setSortedItems(productos)
        setLoading(false)
      })
  }, [search])

  // Manejadores del form
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  // PrevPage
  const prevHandlerPage = () => {
    const prevPage = currentPage - 1

    if (prevPage < 0) return
    setIndex(prevPage * ITEMS_PER_PAGE)
    setCurrentPage(prevPage)
    return index
  }

  // NextPage
  const nextHandlerPage = () => {
    const nextPage = currentPage + 1

    if (nextPage > (products.length) / ITEMS_PER_PAGE) return
    setIndex(nextPage * ITEMS_PER_PAGE)
    setCurrentPage(nextPage)
    return index
  }

  // Función para ordenar los elementos según la opción seleccionada
  const sortItems = (items, order) => {
    const sorted = [...items]

    if (order === '0') return sorted

    if (order === '1') {
      // Ordenar de mayor a menor
      sorted.sort((a, b) => b.price - a.price)
    } else if (order === '2') {
      // Ordenar de menor a mayor
      sorted.sort((a, b) => a.price - b.price)
    } else {
      return sorted
    }
    return sorted
  }

  // Manejar el cambio en la selección del orden
  const handleOrderByChange = (e) => {
    const selectedOrder = e.target.value
    setOrderBy(selectedOrder)

    const sorted = sortItems(products, selectedOrder)
    setSortedItems(sorted)
  }

  // Paginator
  const paginatorItems = (sortedItems) => {
    return sortedItems.slice(index, index + ITEMS_PER_PAGE)
  }
  const filteredItems = paginatorItems(sortedItems)

  return {
    handleOrderByChange,
    orderBy,
    products,
    filteredItems,
    nextHandlerPage,
    prevHandlerPage,
    handleSubmit,
    handleChange,
    loading,
    currentPage,
    ITEMS_PER_PAGE
  }
}
