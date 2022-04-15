import { useContext, useState } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CardContext } from '../../context/cardContext'
import './cart-icons.style.scss'

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, countCart } = useContext(CardContext)
	console.log(countCart)
	const handleCart = () => {
		setIsCartOpen(!isCartOpen)
	}

	return (
		<div onClick={handleCart} className='cart-icon-container'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{countCart}</span>
		</div>
	)
}
export default CartIcon
