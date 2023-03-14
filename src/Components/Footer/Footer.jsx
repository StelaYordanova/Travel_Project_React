
import React from 'react';
import './Footer.scss';
import { FaRegEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='logo-container'>
				<img
					className='logo-footer'
					src='images/2.svg'
					alt='Logo'
				/>
				<div className='arrow-logo-container'>
					<img
						className='arrow-logo-image'
						src='images/1.svg'
						alt='arrow'></img>
				</div>
			</div>
			<div className='social-icons-container'>
				<div className='phone'>
					<span>+359 875 625 985</span>
					<span className='FaPhone'>
						<FaPhone />
					</span>
				</div>
				<div className='mail'>
					<span>varna_trave2gmail.com</span>
					<span className='FaRegEnvelope'>
						<FaRegEnvelope />
					</span>
				</div>
				<div className='location'>
					<span>Варна, ул. Някоя си 23</span>
					<span className='FaMapMarkerAlt'>
						<FaMapMarkerAlt />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
