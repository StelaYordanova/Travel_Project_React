import React, { useState } from 'react';
import './Services.scss';

const Card = ({
	title,
	image,
	description,
	buttonText,
	type,
	time,
	wallet,
	duration,
	sum,
}) => {
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	const handleButtonClick = () => {
		// console.log('clicked')
		window.location.href = '/card-description';
	};


	return (
		<div card-container>
			<div
				className='card'
				onClick={togglePopup}>
				<h2>{type}</h2>
				<h3>{title}</h3>
				<img
					className='landmark'
					src={image}
					alt={title}
				/>
				<div className='time'>
					<img
						className='time-pic'
						src={time}
						alt={title}
					/>
					<p>{duration}</p>
				</div>
				<div className='wallet'>
					<img
						className='wallet-pic'
						src={wallet}
						alt={title}
					/>
					<p>{sum}</p>
				</div>
					<button
						className='card-button'
						onClick={handleButtonClick}>
						{buttonText}
					</button>

				{showPopup && (
					<div className='popup'>
						<div className='type-title'>
							<div className='grey-box'>
								<h2>{type}</h2>
								<h3>{title}</h3>
								<img
									src={image}
									alt={title}
								/>
							</div>

							<div className='white-box'>
								<p className='paragraph-white-box'>
									{description}
								</p>
								<div className='popup-time-wallet'>
									<div className='time'>
										<img
											className='time-pic'
											src={time}
											alt={title}
										/>
										<p className='popup-duration'>
											{duration}
										</p>
									</div>

									<div className='wallet'>
										<img
											className='wallet-pic'
											src={wallet}
											alt={title}
										/>
										<p className='popup-sum'>{sum}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const CardList = () => {
	const cards = [
		{
			id: 1,
			type: 'Екскурзия до',
			title: 'Побити камъни',
			image: '/images/varna-stone.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 3 часа',
			sum: 'цена: 60лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
		{
			id: 2,
			type: 'Обиколка на',
			title: 'Градска художествена галерия',
			image: '/images/gallery.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 1 час',
			sum: 'цена: 30лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
		{
			id: 3,
			type: 'Обиколка на',
			title: 'Римски Терми',
			image: '/images/therms.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 2 часа',
			sum: 'цена: 40лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
		{
			id: 4,
			type: 'Екскурзия до',
			title: 'Аладжа манастир',
			image: '/images/monastery.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 3 часа',
			sum: 'цена: 60лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
		{
			id: 5,
			type: 'Обиколка на',
			title: 'Резиденция Евкиноград',
			image: '/images/varna-castle.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 3 часа',
			sum: 'цена: 90лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
		{
			id: 6,
			type: 'Обиколка на',
			title: 'Музей на куклите',
			image: '/images/dolls.jpg',
			time: '/images/time.svg',
			wallet: '/images/wallet.svg',
			duration: 'Времетраене: 2 часа',
			sum: 'цена: 40лв.',
			buttonText: 'виж повече',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
		},
	];

	return (
		<div className='offered-services'>
			<h1>Предлагани Услуги</h1>
			<div className='card-list'>
				<div className='row'>
					{cards.map((card) => (
						<div
							className='card'
							key={card.id}>
							<Card
								type={card.type}
								title={card.title}
								image={card.image}
								time={card.time}
								wallet={card.wallet}
								duration={card.duration}
								sum={card.sum}
								description={card.description}
								buttonText={card.buttonText}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardList;
