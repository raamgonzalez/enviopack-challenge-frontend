import { useContext, useEffect } from 'react'
import { UsersContext } from '../../context/UsersContext'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { NavBar } from './NavBar'
import './Header.css'

export default function Header () {
  const { credit, users } = useContext(UsersContext)
  const { cart } = useContext(CartContext)

  useEffect(() => {

  }, [credit])

  return (
		<header className='header'>
			<NavBar/>
			<section className='header__users'>
				<p>{users.firstName}</p>
				<NavLink to='/cart'>
					<p className='header__users--bold'>Carrito ({cart.length})</p>
				</NavLink>
				<p>Crédito $ {credit}</p>
			</section>
		</header>
  )
}
