import { useContext, useEffect, useState } from 'react'
import { Title } from '../components/ui/Title'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { CartContext } from '../context/CartContext'

export function Checkout () {
  const [isPurchase, setPurchase] = useState(false)
  const { onPurchaseWithCredit } = useContext(CartContext)

  useEffect(() => {
    setPurchase(onPurchaseWithCredit())
  }, [])

  return (
		<>
			<Title>Estado de compra</Title>
			<section className='card checkout'>
				<p>{isPurchase ? '✔️ Compra finalizada con exito' : '❌ Ocurrio un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta'}</p>
				<Button>
					<Link to='/'>Volver al catálogo</Link>
				</Button>
			</section>
		</>
  )
}
