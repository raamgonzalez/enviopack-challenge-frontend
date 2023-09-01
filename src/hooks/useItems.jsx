import { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'
import imageProduct from '../assets/products/image-product.jpg'
import json from '../mocks/products.json'

export function useItems () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const mapAddImage = (productos) => {
    return productos.map(producto => {
      return { ...producto, img: imageProduct }
    })
  }

  console.log('JSON PRODUCTOS', json.productos)
  console.log('JSON MODIFICADO', mapAddImage(json.productos))

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
