import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Signin from './routes/signin/Signin'

const Shop = () => {
	return <h3>Shop</h3>
}

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<Signin />} />
			</Route>
		</Routes>
	)
}

export default App
