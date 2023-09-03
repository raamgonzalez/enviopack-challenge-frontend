import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems () {
  const [productsFromApi, setProductsFromApi] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

  const mapAddImage = (productos) => {
    return productos.map(producto => {
      return { ...producto, img: imageProduct }
    })
  }

  const prevHandlerPage = () => {
    const prevPage = currentPage - 1

    if (prevPage < 0) return
    const firstIndex = prevPage * ITEMS_PER_PAGE
    setProducts(mapAddImage([...productsFromApi].splice(firstIndex, ITEMS_PER_PAGE)))
    setCurrentPage(prevPage)
  }

  const nextHandlerPage = () => {
    const totalItems = productsFromApi.length
    const nextPage = currentPage + 1
    const firstIndex = nextPage * ITEMS_PER_PAGE
    if (firstIndex === totalItems) return

    setProducts(mapAddImage([...productsFromApi].splice(firstIndex, ITEMS_PER_PAGE)))
    setCurrentPage(nextPage)
  }

  useEffect(() => {
    setLoading(true)
    getItems()
      .then(productos => {
        setProductsFromApi(mapAddImage(productos))
        setProducts([...productsFromApi].slice(0), ITEMS_PER_PAGE)
        setLoading(false)
      })

    return () => {}
  }, [])

  return {
    products,
    productsFromApi,
    loading,
    currentPage,
    prevHandlerPage,
    nextHandlerPage,
    ITEMS_PER_PAGE
  }
}
