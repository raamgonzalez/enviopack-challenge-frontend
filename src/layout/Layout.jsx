import React from 'react'
import Header from '../components/Header/Header'
import './Layout.css'

export function Layout ({ children }) {
  return (
		<section className="wrapper">
			<Header/>
			{children}
		</section>
  )
}
