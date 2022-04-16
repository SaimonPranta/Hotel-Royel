import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContxt } from '../Home/Home';

const PrivetRoute = () => {
    const [user, setUser] = useContext(userContxt)

  let location = useLocation();
  if(!user.email){
      return <Navigate to="/login"></Navigate>
  }
};

export default PrivetRoute;