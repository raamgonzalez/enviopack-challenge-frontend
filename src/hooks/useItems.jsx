import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

const ITEMS_PER_PAGE = 6
const INITIAL_PAGE = 0

export function useItems () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  const prevHandlerPage = () => { console.log('PrevPage') }
  const nextHandlerPage = () => { console.log('NextPage') }

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
    page,
    prevHandlerPage,
    nextHandlerPage
  }
}
