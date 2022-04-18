
import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Contact from '../Contact Us/Contact';
import './Home.css';
import Footer from '../Footer/Footer';

export const userContxt = createContext() 
const Home = () => {
    const [user, setUser] = useState({})
    return (
        <userContxt.Provider value={[user, setUser]}>
            <Header></Header>
            <Body></Body>
            <Contact></Contact>
            <Footer></Footer>
        </userContxt.Provider>
    );
};

export default Home;