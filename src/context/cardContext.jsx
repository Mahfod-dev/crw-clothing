import { createContext, useState, useEffect } from 'react'

export const CardContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemCart: () => {},
	countCart: 0,
})

const addCartItem = (cartItems, productsToAdd) => {
	const existingItem = cartItems.find(
		(cartItem) => cartItem.id === productsToAdd.id
	)
	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productsToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	return [...cartItems, { ...productsToAdd, quantity: 1 }]
}

export const CardProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [countCart, setCountCart] = useState(0)

	useEffect(() => {
		const newCartItems = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity
		}, 0)
		console.log(newCartItems)
		setCountCart(newCartItems)
	}, [cartItems])

	const addItemCart = (productsToAdd) => {
		setCartItems(addCartItem(cartItems, productsToAdd))
	}

	const value = { isCartOpen, setIsCartOpen, addItemCart, cartItems, countCart }

	return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}
