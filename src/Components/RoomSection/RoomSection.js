import React from 'react';
import { NavLink } from 'react-router-dom';
import './RoomSection.css';

const FontPageOfRooms = () => {
    return (
        <>
            <div className='m-auto room-sub-container pt-5'>
                <div className='item-1'>
                    <img className='buttom-img' src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" loading="lazy" />
                </div>
                <div className='item-2'>
                    <img src="https://content.r9cdn.net/res/images/horizon/ui/seo/common/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4" loading="lazy" />
                    <img src="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/Notated_News(1)/the-shared-hotel-room.jpg?tr=w-800%2Ch-400%2Cfo-auto" loading="lazy" />
                </div>
                <div className='item-3'>
                    <h1 className='py-2'>Choose The Perfect <strong> Accommodation </strong> </h1>
                    <p className='py-3 room-discription'>Hotel accommodations are one of the biggest travel-related expenses. Whether you’re looking for a place to crash for a night or want a relaxing away from home where you can pamper yourself. So we will porvides Comfortable rooms with neat and clean attachments and fine interior design.</p>
                    <NavLink to='/rooms'><button className='butn-control'>See More</button></NavLink>
                </div>
            </div>
        </>
    );
};

export default FontPageOfRooms;