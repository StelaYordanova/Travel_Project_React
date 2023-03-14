import React from 'react';
import { Container } from 'react-bootstrap';
import './Mask.scss';
import girl from '../../images/girl.png';
import arrow from '../../images/1.svg'

function Mask() {
	return (
		<Container className='container'>
			<div className='mask'>
				<div className='find_places'>
					<div className='content'>
						<p>Открий нови</p>
						<p>вълнуващи места с нас!</p>
					</div>
                    <img className='arrow'
						src={arrow}
						alt='arrow'
					/>
					<img className='girl'
						src={girl}
						alt='girl'
					/>
				</div>
			</div>
		</Container>
	);
}

export default Mask;
