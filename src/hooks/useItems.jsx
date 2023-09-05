import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'
import { ITEMS_PER_PAGE, INITIAL_PAGE } from '../utils/paginationConfig'

export function useItems (search, setSearch) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const [index, setIndex] = useState(0)
  const [orderBy, setOrderBy] = useState('1') // Estado para el orden seleccionado
  const [sortedItems, setSortedItems] = useState([]) // Estado para los elementos ordenados

  // Peticion a getItems
  useEffect(() => {
    setLoading(true)
    getItems(search) // Si en vez de ponerle search lo hardcodeo con la palabra 'motorola' me lo toma
      .then(productos => {
        setProducts(mapAddImage(productos))
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

  const mapAddImage = (productos) => {
    return productos.map(producto => {
      return { ...producto, img: imageProduct }
    })
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

  // Paginator
  const paginatorItems = (sortedItems) => {
    return products.slice(index, index + ITEMS_PER_PAGE)
  }
  const filteredItems = paginatorItems(sortedItems)

  // Función para ordenar los elementos según la opción seleccionada
  const sortItems = (items, order) => {
    // Copiamos el array original para no modificarlo directamente
    const sorted = [...items]

    if (order === '0') return items

    if (order === '1') {
      // Ordenar de mayor a menor
      sorted.sort((a, b) => b.price - a.price)
    } else if (order === '2') {
      // Ordenar de menor a mayor
      sorted.sort((a, b) => a.price - b.price)
    }
    return sorted
  }

  // Manejar el cambio en la selección del orden
  const handleOrderByChange = (e) => {
    const selectedOrder = e.target.value
    setOrderBy(selectedOrder)

    // Ordenar los elementos y establecer el estado de los elementos ordenados
    const sorted = sortItems(filteredItems, selectedOrder)
    setSortedItems(sorted)
  }

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
