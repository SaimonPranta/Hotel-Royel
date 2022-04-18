import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodSection.css';

const FoodSection = () => {
    return (
        <>
            <div className='m-auto food-sub-container pt-5'>
                <div className='g-item-1 main-img'>
                    <img src="https://i.ndtvimg.com/i/2016-10/carrot-juice_625x350_51475839497.jpg" loading="lazy" />

                </div>
                <div className='g-item-2'>
                    <img src="https://media.newyorker.com/photos/5cfecb5f23770dd0460bfaac/2:1/w_2560,h_1280,c_limit/Budin-LuxuryFood.jpg" loading="lazy" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZW_o8lf9MaD18-_Oz7SNjW7xxy5CoVapMDQ&usqp=CAU" loading="lazy" />
                </div>
                <div className='g-item-3'>
                    <h1>Our Best <strong> Breakfast </strong> </h1>
                    <p className='py-3'>Hotel accommodations are one of the biggest travel-related expenses. Whether you’re looking for a place to crash for a night or want a relaxing away from home where you can pamper yourself. So we will porvides Comfortable rooms with neat and clean attachments and fine interior design.</p>
                    <NavLink to="/foods"><button className='butn-control'>See More</button></NavLink>
                </div>
            </div>

        </>
    );
};

export default FoodSection;