import { useCallback, useEffect, useState } from 'react'
import debounce from 'just-debounce-it'
import { useSearch } from '../../hooks/useSearch'
import { getItems } from '../../services/getItems'
import './SearchItems.css'

export function SearchItems () {
  const { search, setSearch, error } = useSearch()
  // const [keyword, setKeyword] = useState

  const debouncedGetItems = useCallback(debounce(search => {
    getItems({ search })
  }, 500), [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    getItems({ search })
  }
  const handleChange = (evt) => {
    const newSearch = evt.target.value
    setSearch(newSearch)
    debouncedGetItems(newSearch)
  }

  return (
		<form className='Search-form' onSubmit={handleSubmit}>
			<input
				className='Search-input'
				type='text'
				placeholder='Buscar productos por nombre'
				onChange={handleChange}
				value={search}
			/>
		</form>
  )
}
