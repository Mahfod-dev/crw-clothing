import { useContext } from 'react'
import { CardContext } from '../../context/cardContext'

import Button from '../button/Button'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product

	const { addItemCart } = useContext(CardContext)

	const addProductToCart = () => {
		addItemCart(product)
	}

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={addProductToCart}>
				Add To Card
			</Button>
		</div>
	)
}
export default ProductCard
