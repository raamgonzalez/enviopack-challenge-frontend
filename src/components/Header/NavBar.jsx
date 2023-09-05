import './NavBar.css'
import { NavLink } from 'react-router-dom'

export function NavBar () {
  return (
		<nav className='nav'>
			<NavLink to='/'>
				<h1 className='nav__title'>TecnoLAB</h1>
			</NavLink>
		</nav>
  )
}
