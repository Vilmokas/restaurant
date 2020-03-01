import React from 'react';
import './Assets/css/default.min.css';
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';
import Title from './Components/Main/Title';
import PopularMenu from './Components/Menu/PopularMenu';
import DiscountDish from './Components/Menu/DiscountDish';
import DiscountDishLeft from './Components/Menu/DiscountDishLeft';
import HowToOrder from './Components/Info/HowToOrder';
import FreeDelivery from './Components/Info/FreeDelivery';
import Contacts from './Components/Info/Contacts';

function App() {
  return (
    <div className="">
      <Header />
      <Title />
      <PopularMenu />
      <DiscountDish />
      <DiscountDishLeft />
      <HowToOrder />
      <FreeDelivery />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
