import React, { useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/userContext'
import { CardContext } from '../../context/cardContext'
import { signOutUser } from '../../utils/firebase/Firebase.utils'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)
	const { isCartOpen, setIsCartOpen } = useContext(CardContext)

	return (
		<>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<div>
						<Logo />
					</div>
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGNIN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</nav>

			<Outlet />
		</>
	)
}

export default Navigation
