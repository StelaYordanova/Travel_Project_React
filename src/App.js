import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import Mask from './Components/Mask/Mask';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Services from './Components/Cards/Services';
import Rectangle from './Components/Rectangle/Rectangle';
import Footer from './Components/Footer/Footer';
// import Cards from './Components/Cards/CardsDescription/CardsDescription'


function App() {
	return (
		<div className='App'>
			<Navigation />
			<Mask />
			<About />
			<Gallery/>
			<Services />
			<Rectangle />
			<Footer />
			{/* <Cards /> */}
		</div>
	);
}

export default App;

// pictures={pictures} title="Галерия"