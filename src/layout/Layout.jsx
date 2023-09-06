import Header from '../components/Header/Header'
import './Layout.css'

export function Layout ({ children }) {
  return (
		<section className="wrapper">
			<Header/>
			<main className='wrapper__main'>
				{children}
			</main>
		</section>
  )
}
