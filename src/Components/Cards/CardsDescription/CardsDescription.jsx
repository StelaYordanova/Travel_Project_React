
































import React from "react";
// import {CardList} from '../Services'
import { useParams } from 'react-router-dom';

const DurationExcursion = ({}) => {
  const { id } = useParams();
  const card = card.find(card => card.id === parseInt(id));

  if (!card) {
    return <div>Excursion not found</div>;
  }
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
      <div className="duration-excursion">
        <h1>{cards.title}</h1>
        <p>{cards.description}</p>
        <p>{cards.duration}</p>
        <p>{cards.sum}</p>
        <img src={cards.image} alt={cards.title} />
      </div>
    );
  };


// export default CardList;



	// return (
	// 	<div>
	// 		{/* <h1>Предлагани Услуги</h1> */}
	// 		<div className='card-list'>
	// 			<div className='row'>
	// 				{cards.map((card) => (
	// 					<div
	// 						className='card'
	// 						key={card.id}>
	// 						<Card
	// 							type={card.type}
	// 							title={card.title}
	// 							image={card.image}
	// 							time={card.time}
	// 							wallet={card.wallet}
	// 							duration={card.duration}
	// 							sum={card.sum}
	// 							description={card.description}
	// 							buttonText={card.buttonText}
	// 						/>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</div>
	// );

export default CardList;

