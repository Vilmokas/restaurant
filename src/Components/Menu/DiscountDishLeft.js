import React from 'react';
import Dish from '../../Assets/Images/Dishes/5.png';

function DiscountDishLeft() {
    return (
        <div className="discount">
            <div className="row">
                <div className="col">
                    <div className="info-left">
                        <h3>
                        January’s Promo: Buy 1 Get 1 Free!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <button className="button">READ MORE</button>
                    </div>
                </div>
                <img className="col" src={Dish} alt=""></img>
            </div>
        </div>
    );
}

export default DiscountDishLeft;
