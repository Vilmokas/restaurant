import React from 'react';
import delivery from '../../Assets/Images/Background/delivery.png';

function FreeDelivery() {
    return (
        <div className="delivery">
            <img src={delivery} alt=""></img>
            <div className="info">
                <h1>Free Delivery</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <button className="button">GET VOUCHER</button>
            </div>
        </div>
    );
}

export default FreeDelivery;
