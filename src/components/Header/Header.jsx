import { useContext } from 'react'
import { UsersContext } from '../../context/UsersContext'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { CartContext } from '../../context/CartContext'

export default function Header () {
  const { users } = useContext(UsersContext)
  const { cart } = useContext(CartContext)

  return (
		<header className='header'>
			<h1>TecnoLAB</h1>
			<section className='header__users'>
				<p>{users.firstName}</p>
				<NavLink to='/cart'>Carrito ({cart.length})</NavLink>
				<p>Crédito ${users.credit}</p>
			</section>
		</header>
  )
}
