import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const BookMark = () => {
    const {user} =  useContext(AuthContext)
    const id = useParams()
    const data = useLoaderData()
    const [singleData, setSignleDAta] = useState([])
    const {img,title,price} = singleData;
    console.log(singleData)
    useEffect(()=>{
       const findedData = data.find(d => d._id == id.id)
       setSignleDAta(findedData)
    },[])
    
    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due = form.due.value;
        const booking = {
            name, 
            email, 
            due,
            date,
            img,
            title,
            price
        }
        console.log(booking)
        fetch('https://y-indol-eta.vercel.app/user',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service:  </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="due" defaultValue={price}  className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default BookMark;