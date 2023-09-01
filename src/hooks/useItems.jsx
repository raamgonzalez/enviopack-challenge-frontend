import { useEffect, useState } from 'react'

export function useItems () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // console.log(items)

    return () => {}
  }, [])

  return {
    products
  }
}
