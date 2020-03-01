import React from 'react';

function PopularSmall({ cardImg }) {
    return (
        <div className="card">
            <img className="card-img-top" src={cardImg} alt=""></img>
            <div className="card-body">
                <h5>Noodles</h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur  adipisicing...
                </p>
                <h6>$ 13</h6>
            </div>
        </div>
    );
}

export default PopularSmall;
