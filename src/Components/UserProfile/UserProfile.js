import React, { useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeUser } from '../../Hooks/AuthenticationFunctions';
import { userContxt } from '../Home/Home';
import './UserProfile.css';

const UserProfile = () => {
    const exitIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/><path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/></svg>
    const [user, setUser] = useContext(userContxt)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const LogOutHandler = () => {
        removeUser()
        .then(
            setUser({}), navigate(from, { replace: true })
            )
    }
    console.log(user)
    return (
        <div className='m-auto'>
            <div className='user mt-4 p-4'>
            {
                user.username && <h3>Name: {user.username}</h3>
            }
            {
                user.email && <p>Booked Room: 0</p>
            }
            {
                user.phoneNumber && <p>Phone: {user.phoneNumber}</p>
            }
            {
                user.email && <p>Email: {user.email}</p>
            }
            
            {
                user.email && <button onClick={LogOutHandler}>{exitIcon} Log Out</button>
            }
        </div>
        </div>
    );
};

export default UserProfile;