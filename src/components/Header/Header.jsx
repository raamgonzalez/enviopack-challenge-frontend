import { useContext } from 'react'
import { UsersContext } from '../../context/UsersContext'
import './Header.css'

export default function Header () {
  const { users } = useContext(UsersContext)
  console.log(users)
  return (
		<header>
			<h1>TecnoLAB</h1>
			<section>
				<p>{users.firstName}</p>
				<p>Carrito ({1})</p>
				<p>Crédito ${users.credit}</p>
			</section>
		</header>
  )
}
