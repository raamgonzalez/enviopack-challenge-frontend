import React from 'react'
import { NavBar } from '../components/Header/NavBar'
import Header from '../components/Header/Header'

export function Layout ({ children }) {
  return (
		<section className="wrapper">
			<Header/>
			{children}
		</section>
  )
}
