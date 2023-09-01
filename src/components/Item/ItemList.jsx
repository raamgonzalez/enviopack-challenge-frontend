import React from 'react'
import { useItems } from '../../hooks/useItems'

export function ItemList () {
  const { products } = useItems()
  return (
		<div>ItemList</div>
  )
}
