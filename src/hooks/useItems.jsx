import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'

export function useItems () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

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

  return {
    products,
    loading
  }
}
