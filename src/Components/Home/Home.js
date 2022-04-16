
import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Contact from '../Contact Us/Contact';

export const userContxt = createContext() 
const Home = () => {
    const [user, setUser] = useState({})
    return (
        <userContxt.Provider value={[user, setUser]}>
            <Header></Header>
            <Body></Body>
            <Contact></Contact>
        </userContxt.Provider>
    );
};

export default Home;