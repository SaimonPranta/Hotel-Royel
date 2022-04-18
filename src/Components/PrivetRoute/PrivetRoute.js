import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useCurrentUser from '../../Hooks/useCurrentUser';
import { userContxt } from '../Home/Home';


const PrivetRoute = ({ children }) => {
  const [user, setUser] = useContext(userContxt)
  let location = useLocation();
  const currentUser = useCurrentUser()

  return user.email || currentUser.email ? children : <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;