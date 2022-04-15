import React from 'react';
import { Carousel } from 'react-bootstrap';
import commnentIcon from '../../images/icons/te1.png';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div>
                <h5 className='text-center'>Testimonial</h5>
            </div>
            <div className='container'>
                <div className='m-auto'>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className='d-flex justify-content-around  comment-section'>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Mr MacFoly</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Awdard Bond</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-around  comment-section'>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Mrs Lara</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Hanry Dow</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-around  comment-section'>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Dcruz Willem</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                                <div className="p-3 sub-commnt">
                                    <div className='h6-img'>
                                        <h6>Mr Hariken</h6>
                                        <div className='img'><img src={commnentIcon} alt="icon" /></div>
                                    </div>
                                    <div className='p'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores mollitia aliquid voluptatum porro sed, non provident fugit quibusdam laborum dolores ratione eligendi, illo ut quam corrupti asperiores blanditiis nemo modi?</p></div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default Testimonial;