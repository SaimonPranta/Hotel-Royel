import React from 'react';
import { NavLink } from 'react-router-dom';
import bed from '../../images/icons/bed.png';
import person from '../../images/icons/person.png';
import './CommonFrame.css';
const CommonFrame = ({ info }) => {
    console.log(info)
    const fillStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7CE08" class="bi bi-star-fill " viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
    const emptyStart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#717171" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
    return (
        <div className="sub_common_contaienr ">
                        <img id='img' src={info.url} loading="lazy" />
                        {
                            info.firstName && <h6 className='room-name'>Room {info.firstName} {info.lastName}</h6>
                        }
                        {
                            info.foodName && <h6 className='room-name'>{info.foodName}</h6>
                        }

                        {
                            info.rating && info.rating === 1 && <div className='start'>{fillStar}{emptyStart}{emptyStart}{emptyStart}{emptyStart}</div>
                        }
                        {
                            info.rating && info.rating === 2 && <div className='start'>{fillStar}{fillStar}{emptyStart}{emptyStart}{emptyStart} </div>
                        }
                        {
                            info.rating && info.rating === 3 && <div className='start'>{fillStar}{fillStar}{fillStar}{emptyStart}{emptyStart}</div>
                        }
                        {
                            info.rating && info.rating === 4 && <div className='start'>{fillStar}{fillStar}{fillStar}{fillStar}{emptyStart}</div>
                        }
                        {
                            info.rating && info.rating === 5 && <div className='start'>{fillStar}{fillStar}{fillStar}{fillStar}{fillStar}</div>
                        }
                        {
                            info.firstName && !info.rating && <div className='start'>{emptyStart}{emptyStart}{emptyStart}{emptyStart}{emptyStart}</div>
                        }

                        {
                            info.bed && <span><img className='similar-icon' src={bed} loading="lazy" />:{info.bed}</span>
                        }
                        {
                            info.sleep && <span><img className='similar-icon' src={person} loading="lazy" /> :{info.sleep}</span>
                        }
                        {
                            info.price && <strong className='tk'>Tk {info.price} </strong>
                        }
                        {
                            info.firstName && <NavLink to='/profile'><button>Book Now</button></NavLink>
                        }
                    </div>
    );
};

export default CommonFrame;