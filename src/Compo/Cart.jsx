import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import CartShow from './CartShow';

const Cart = () => {
    const [users, setServices] = useState([])
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)

    useEffect(()=>{
        fetch(`https://y-indol-eta.vercel.app/user?email=${user?.email}`,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(datas => {
           console.log(datas)
           setServices(datas)
        })
    },[user?.email])
    console.log(user)

    const deleteHandler = id =>{
        console.log(id)
        fetch(`https://y-indol-eta.vercel.app/user/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = users.filter(d => d._id !== id)
            setServices(remaining)
        })
    }
    return (
        <div className='grid gap-5 mt-10'>
            {
                users?.map(d => <CartShow key={d._id} user={d} deleteHandler={deleteHandler}></CartShow>)
            }
        </div>
    );
};

export default Cart;