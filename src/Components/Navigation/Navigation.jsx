import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navigation.scss';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<nav
				className='nav'
				ref={navRef}>
				<a href='/#'>За нас</a>
				<a href='/#'>Контакти</a>
			</nav>

			<div className='logo'>
				<img
					className='logo-arrow'
					src='/images/647.svg'
					alt='arrow'></img>
				<img
					className='logo-pic'
					src='/images/2.svg'
					alt='Logo'></img>
			</div>
			
			<button
				className='nav-btn'
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

