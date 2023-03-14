import React from 'react';
import './Rectangle.scss';

const Triangle = () => {
	const imagegroup21 = '/images/Group21.jpg';
	const imagegroup22 = '/images/Group22.jpg';
	const title1 = 'Не се колебай';
	const title2 = 'Свържи се с нас';
	const facebookIcon = '/images/facebook.png';
	const writeToUs = 'пиши ни';
	const text =
		'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one';

	return (
		<div className='rectangle'>
			<div className='suitcase-pattern'>
				<div className='suitcase-image'>
					<img
						className='suitcase'
						src={imagegroup21}
						alt='image21'
					/>
				</div>
				<div className='pattern-image'>
					<img
						className='pattern'
						src={imagegroup22}
						alt='image22'
					/>
					<div className='rectangle-description'>
						<h2 className='title-rectangle'>{title1}</h2>
						<h2 className='title-rectangle'>{title2}</h2>
						<p className='rectangle-text'>{text}</p>
						<div className='facebook-icon'>
							<div className='write-span'>
								<span className='write-to-us'>{writeToUs}</span>
							</div>
							<img
								className='facebook'
								src={facebookIcon}
								alt='facebook'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Triangle;
