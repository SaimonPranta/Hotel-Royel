import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='row m-auto'>
                    <div className='col-6'>
                        <h6>About Our Hotel</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    </div>
                    <div className='col-6'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/hQ0n9gxAAmc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default About;