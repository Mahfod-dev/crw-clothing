import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase/Firebase.utils'

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)

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
				</div>
			</nav>

			<Outlet />
		</>
	)
}

export default Navigation
