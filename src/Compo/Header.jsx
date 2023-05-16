import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const Header = () => {
    const {logOut, user} = useContext(AuthContext)

    const logOutHandle = () =>{
        logOut()
        localStorage.removeItem('token')
        .then(() => {
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='flex justify-center text-xl my-5 gap-3'>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/signin'>SignIn</Link>
            <Link to='/login'>Login</Link>
            {
                user == null ? "" : <Link onClick={logOutHandle}>SignOut</Link>
            }
        </div>
    );
};

export default Header;