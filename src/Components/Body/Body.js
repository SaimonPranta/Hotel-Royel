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
import UserProfile from '../UserProfile/UserProfile';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import Authentication from '../AuthenticationFrom/Authentication';
import { useLocation } from 'react-router-dom';


const Body = () => {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <>
            <div className='container body'>
                <div className='py-4'>
                    <BookingPeriod></BookingPeriod>
                    <Routes>
                        <Route path='/' element={<RoomSection></RoomSection>}></Route>
                        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
                        <Route path='/login' element={<Authentication></Authentication>}></Route>
                        <Route path='/' element={<Rooms></Rooms>}></Route>
                        <Route path='/profile' element={<PrivetRoute>
                            <UserProfile/>
                        </PrivetRoute>}></Route>
                    </Routes>
                    <Routes>
                        <Route path='/' element={<FoodSection></FoodSection>}></Route>
                        <Route path='/foods' element={<Food></Food>}></Route>
                    </Routes>
                </div>
            </div>
            {
                location.pathname === "/" && <About></About>
            }
            {
                location.pathname === "/" && <Testimonial></Testimonial>
            }
        </>
    );
};

export default Body;