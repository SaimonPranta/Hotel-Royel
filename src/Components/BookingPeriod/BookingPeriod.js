import React from 'react';
import './BookingPeriod.css';

const BookingPeriod = () => {
    return (
        <>
            <div className='row m-auto booking-from'>
                <div className='col-md-3 col-sm-12 a-auto'>
                    <label> ARRIVAL DATE</label>
                    <input type="date" name="" /></div>
                <div className='col-md-3 col-sm-12 '>
                    <label> DEPARTURE DATE</label>
                    <input type="date" name="" />
                </div>
                <div className='col-md-3 col-sm-12 '>
                    <label> PERSON</label>
                    <input type="number" name="" />
                </div>
                <div className='col-md-3 col-sm-6 m-auto'>
                    <label></label><br />
                    <input type="button" value="Book Now" className='m-auto'/>
                </div>
            </div>
        </>
    );
};

export default BookingPeriod;