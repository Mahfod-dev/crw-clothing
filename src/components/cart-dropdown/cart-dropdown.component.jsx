import { useContext } from 'react'
import { CardContext } from '../../context/cardContext'

import './cart-dropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
	const { cartItems } = useContext(CardContext)
	console.log(cartItems)

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => {
					return <CartItem key={item.id} cartItem={item} />
				})}

				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	)
}
export default CartDropdown
