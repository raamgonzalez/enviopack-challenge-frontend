import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

  const prevHandlerPage = () => {
    console.log('prevPage')
  }

  const nextHandlerPage = () => {
    const totalItems = products.length
    console.log('TotalItems', totalItems)
    const nextPage = currentPage + 1
    console.log('NextPage', nextPage)

    const firstIndex = nextPage * ITEMS_PER_PAGE
    console.log('FirstIndex', firstIndex)
    if (firstIndex === totalItems) return

    getItems(productos => {
      setProducts(mapAddImage(productos).splice(firstIndex, ITEMS_PER_PAGE))
    })
    setCurrentPage(nextPage)
  }

  const mapAddImage = (productos) => {
    return productos.map(producto => {
      return { ...producto, img: imageProduct }
    })
  }

  useEffect(() => {
    setLoading(true)
    getItems()
      .then(productos => {
        setProducts(mapAddImage(productos))
        setLoading(false)
      })

    return () => {}
  }, [])

  // useEffect(({ page }) => {
  //   if (page === INITIAL_PAGE) return
  //   getItems()
  // }, [page])

  return {
    products,
    loading,
    currentPage,
    prevHandlerPage,
    nextHandlerPage,
    ITEMS_PER_PAGE
  }
}
