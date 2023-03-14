import { Route, Routes } from 'react-router';
import React from 'react';
// import Home from './Home';
import Services from './Components/Cards/Services';
// import CardData  from './Components/Cards/CardsDescription';
// import Navigation from './Components/Navigation/Navigation';
// import Footer from './Components/Footer/Footer';
import CardDescription from './Cards/CardsDescription'



const Layout = () => {
	return (
		<Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path="/card-description/:id" element={<CardData />} /> */}
            <Route path='/card-description' element={<Services />} />
            {/* <Route path='/navigation' element={<Navigation />} /> */}
            {/* <Route path='/footer' element={<Footer />} /> */}
            <Route path='/card-description' element={<CardDescription />} />
		</Routes>
	);
};

export default Layout;