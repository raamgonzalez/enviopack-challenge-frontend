import { useSearch } from '../../hooks/useSearch'
import './SearchItems.css'

export function SearchItems ({ handleSubmit, handleChange, search }) {
  const { error } = useSearch(search)
  return (
		<form className='Search-form' onSubmit={handleSubmit}>
			<input
				className='Search-input'
				type='text'
				placeholder='Buscar productos por nombre'
				onChange={handleChange}
				value={search}
			/>
			{error && <p className='text-red-500 text-center'>{error}</p>}
		</form>
  )
}
