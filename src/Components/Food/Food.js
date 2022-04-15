import React from 'react';
import breakFast from '../../FoodItems/Breakfast.json';
import Lunch from '../../FoodItems/Lunch.json';
import Dinner from '../../FoodItems/Dinner.json';
import CommonFrame from '../CommonFrame/CommonFrame';
import { shuffle } from '../../Hooks/Shuffle';
import './Food.css';

const Food = () => {

    const breakFastFood = shuffle(breakFast)
    const lunchtFood = shuffle(Lunch)
    const dinnerFood = shuffle(Dinner)

    return (
        <div className='food'>
            <div className='container py-4'>
                <h1>Our Breakfast</h1>
                <div className='common-conttainer'>
                    {
                        breakFastFood.slice(0, 4).map(info => <CommonFrame info={info}></CommonFrame>)
                    }
                </div>
            </div>
            <div className='container'>
                <h1>Our Lunch</h1>
                <div className='common-conttainer'>
                    {
                        lunchtFood.slice(0, 4).map(info => <CommonFrame info={info}></CommonFrame>)
                    }
                </div>
            </div>
            <div className='container'>
            <h1>Our Dinner</h1>
                <div className='common-conttainer'>
                    {
                        dinnerFood.slice(0, 4).map(info => <CommonFrame info={info}></CommonFrame>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Food;