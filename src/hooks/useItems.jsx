import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems (search, setSearch) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const [index, setIndex] = useState(0)

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
  const paginatorItems = (products) => {
    return products.slice(index, index + ITEMS_PER_PAGE)
  }
  const filteredItems = paginatorItems(products)

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

  return {
    products,
    setLoading,
    mapAddImage,
    setProducts,
    getItems,
    nextHandlerPage,
    prevHandlerPage,
    currentPage,
    filteredItems,
    handleSubmit,
    handleChange,
    loading,
    ITEMS_PER_PAGE,
    paginatorItems
  }
}
