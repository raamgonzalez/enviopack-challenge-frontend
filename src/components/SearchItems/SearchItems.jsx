import './SearchItems.css'
import { useItems } from '../../hooks/useItems'

export function SearchItems () {
  // const { error } = useSearch()
  const { handleSubmit, handleChange, search } = useItems()
  // const [keyword, setKeyword] = useState

  // const debouncedGetMovies = useCallback(debounce(search => {
  //   getItems({ search })
  // }, 500), [])

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
