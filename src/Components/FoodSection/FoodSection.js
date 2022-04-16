import React from 'react';
import { NavLink } from 'react-router-dom';

const FoodSection = () => {
    return (
        <>
        <div className='row card-handeler my-5 py-5 m-auto'>
                    <div className='col-6 row'>
                        <div className='col-12 ros-div'>
                            <img src="https://i.ndtvimg.com/i/2016-10/carrot-juice_625x350_51475839497.jpg" loading="lazy" />
                        </div>
                        <div className='col-6'>
                            <img src="https://media.newyorker.com/photos/5cfecb5f23770dd0460bfaac/2:1/w_2560,h_1280,c_limit/Budin-LuxuryFood.jpg" loading="lazy" />
                        </div>
                        <div className='col-6'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZW_o8lf9MaD18-_Oz7SNjW7xxy5CoVapMDQ&usqp=CAU" loading="lazy" />
                        </div>
                    </div>
                    <div className='col-6 pt-5 text-end'>
                        <h6 className='py-2'>Our Best <br /><strong> Breakfast </strong> </h6>
                        <p className='py-3'>Hotel accommodations are one of the biggest travel-related expenses. Whether you’re looking for a place to crash for a night or want a relaxing away from home where you can pamper yourself. So we will porvides Comfortable rooms with neat and clean attachments and fine interior design.</p>
                        <NavLink to="/foods"><button className='butn-control'>See More</button></NavLink>
                    </div>
                </div>
        
        </>
    );
};

export default FoodSection;