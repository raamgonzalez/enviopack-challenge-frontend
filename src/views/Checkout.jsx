import { useContext, useEffect, useState } from 'react'
import { Title } from '../components/ui/Title'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { CartContext } from '../context/CartContext'
import './Checkout.css'

export function Checkout () {
  const [isPurchase, setPurchase] = useState(false)
  const { onPurchaseWithCredit } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    setPurchase(onPurchaseWithCredit())
  }, [])

  return (
		<>
			<Title>Estado de compra</Title>
			<section className='card checkout'>
				<p className='checkout__p'>{isPurchase ? '✔️ La compra se realizó con éxito' : '❌ Ocurrio un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta'}</p>
				<Button onClick={() => navigate('/')}>
					Volver al catálogo
				</Button>
			</section>
		</>
  )
}
