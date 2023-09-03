import './NavBar.css'
import { NavLink } from 'react-router-dom'

export function NavBar () {
  return (
		<header>
			<NavLink to='/'><h1>TecnoLAB</h1></NavLink>
		</header>
  )
}
