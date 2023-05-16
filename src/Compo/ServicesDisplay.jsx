import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDisplay = ({data}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={data.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/bookmark/${data._id}`}><button className="btn btn-primary">More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDisplay;