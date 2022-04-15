import React from 'react';
import { NavLink } from 'react-router-dom';

const FontPageOfRooms = () => {
    return (
        <>
            <div className=' row card-handeler m-auto my-5 py-5'>
                <div className='col-6 pt-5'>
                    <h6 className='py-2'>Choose The Perfect <br /><strong> Accommodation </strong> </h6>
                    <p className='py-3'>Hotel accommodations are one of the biggest travel-related expenses. Whether you’re looking for a place to crash for a night or want a relaxing away from home where you can pamper yourself. So we will porvides Comfortable rooms with neat and clean attachments and fine interior design.</p>
                    <NavLink to='/rooms'><button className='butn-control'>See More</button></NavLink>
                </div>
                <div className='col-6 row'>
                    <div className='col-12 ros-div'>
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/towel-759980_1920_1200x768.jpeg?XpDKwA9nMRHLpRkTOClkdj5g2ZLfpauc&size=770:433" alt="" />
                    </div>
                    <div className='col-6'>
                        <img src="https://content.r9cdn.net/res/images/horizon/ui/seo/common/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4" alt="" />
                    </div>
                    <div className='col-6'>
                        <img src="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/Notated_News(1)/the-shared-hotel-room.jpg?tr=w-800%2Ch-400%2Cfo-auto" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FontPageOfRooms;