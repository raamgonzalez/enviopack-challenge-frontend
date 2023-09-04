import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'
import { useSearch } from './useSearch'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const [index, setIndex] = useState(0)
  const [search, setSearch] = useState('')
  // const { error } = useSearch({ search, setSearch })

  const mapAddImage = (productos) => {
    return productos.map(producto => {
      return { ...producto, img: imageProduct }
    })
  }

  const prevHandlerPage = () => {
    const prevPage = currentPage - 1

    if (prevPage < 0) return
    setIndex(prevPage * ITEMS_PER_PAGE)
    setCurrentPage(prevPage)
    return index
  }

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

  // FilteredItems
  const filteredItems = paginatorItems(products)

  useEffect(() => {
    setLoading(true)
    getItems(search) // Si en vez de ponerle search lo hardcodeo con la palabra 'motorola' me lo toma
      .then(productos => {
        setProducts(mapAddImage(productos))
        setLoading(false)
      })
  }, [search, setSearch])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return {
    products,
    setProducts,
    nextHandlerPage,
    prevHandlerPage,
    currentPage,
    filteredItems,
    handleSubmit,
    handleChange,
    search,
    loading,
    ITEMS_PER_PAGE
  }
}
