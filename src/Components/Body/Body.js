import React from 'react';
import BookingPeriod from '../BookingPeriod/BookingPeriod';
import FoodSection from '../FoodSection/FoodSection';
import RoomSection from '../RoomSection/RoomSection';
import Rooms from '../Rooms/Rooms';
import About from '../About/About';
import Testimonial from '../Testimonial/Testimonial';
import './Body.css';
import { Route, Routes } from 'react-router-dom';
import Food from '../Food/Food';


const Body = () => {
    return (
        <>
            <div className='container booking-from'>
                <div className='py-4'>
                    <BookingPeriod></BookingPeriod>
                    <Routes>
                        <Route path='/' element={<RoomSection></RoomSection>}></Route>
                        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
                    </Routes>
                    <Routes>
                        <Route path='/' element={<FoodSection></FoodSection>}></Route>
                        <Route path='/foods' element={<Food></Food>}></Route>
                    </Routes>
                </div>
            </div>
            <About></About>
            <Testimonial></Testimonial>
        </>
    );
};

export default Body;