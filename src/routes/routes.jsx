import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { Error404 } from "../views/Error404";


export function RouterRoutes (){
	return(
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/cart' element={<Cart/>}/>
			<Route path='*' element={<Error404/>}/>
		</Routes>
	)
}