import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './Authprovider';

const CartShow = ({ user, deleteHandler }) => {
    const {_id, img, name, title, email} = user;
    console.log(user)
    const me = useContext(AuthContext)
    console.log(me)
   
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-64 w-96' src={img}alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Ordered by: {name} & email: {email}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> deleteHandler(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartShow;