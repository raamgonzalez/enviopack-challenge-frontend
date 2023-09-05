import { useSearch } from '../../hooks/useSearch'
import './SearchItems.css'

export function SearchItems ({ handleSubmit, handleChange, search }) {
  const { error } = useSearch(search)
  return (
		<form className='search__form' onSubmit={handleSubmit}>
			<input
				className='card search__input'
				type='text'
				placeholder='Buscar productos por nombre'
				onChange={handleChange}
				value={search}
			/>
			{error && <p className='text-red-500 text-center'>{error}</p>}
		</form>
  )
}
