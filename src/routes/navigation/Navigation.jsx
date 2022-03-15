import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
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
				</div>
			</nav>

			<Outlet />
		</>
	)
}

export default Navigation
