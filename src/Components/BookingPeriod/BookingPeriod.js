import React from 'react';
import './BookingPeriod.css';

const BookingPeriod = () => {
    return (
        <>
            <div className='row m-auto'>
                    <div className='col-3 a-auto'>
                        <label> ARRIVAL DATE</label>
                        <input type="date" name="" id="" /></div>
                    <div className='col-3'>
                        <label> DEPARTURE DATE</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className='col-3'>
                        <label> PERSON</label>
                        <input type="number" name="" id="" />
                    </div>
                    <div className='col-3'>
                        <label></label><br />
                        <input type="button" value="Book Now" />
                    </div>
                </div>
        </>
    );
};

export default BookingPeriod;