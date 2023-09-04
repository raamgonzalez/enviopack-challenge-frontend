import { useEffect, useState } from 'react'
import itemsLength from '../mocks/products.json'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems () {
  const [index, setIndex] = useState(0)
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
    setIndex(prevPage * ITEMS_PER_PAGE)
    setCurrentPage(prevPage)
    return index
  }

  const nextHandlerPage = () => {
    const nextPage = currentPage + 1

    if (nextPage > (itemsLength.productos.length) / ITEMS_PER_PAGE) return
    setIndex(nextPage * ITEMS_PER_PAGE)
    setCurrentPage(nextPage)
    return index
  }

  useEffect(() => {
    setLoading(true)
    getItems({ index, ITEMS_PER_PAGE })
      .then(productos => {
        setProducts(mapAddImage(productos))
        setLoading(false)
      })

    return () => {}
  }, [index])

  return {
    products,
    loading,
    currentPage,
    prevHandlerPage,
    nextHandlerPage,
    ITEMS_PER_PAGE
  }
}
