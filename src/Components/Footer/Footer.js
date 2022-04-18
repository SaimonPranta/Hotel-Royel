import React from 'react';

const Footer = () => {
    const scroolTopArrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/></svg>
    const topLink = ()=>{
        const aboutSecation = document.querySelector(".header")
        aboutSecation.scrollIntoView({behavior:"smooth"})
    }
    return (
        <section>
            <p className='py-3 mb-4 text-center'>Copyright 2022 All Right Reserved By Hotel Royel</p>
        <div className='scroolTop' onClick={topLink}>{scroolTopArrow}</div>
        </section>
    );
};

export default Footer;