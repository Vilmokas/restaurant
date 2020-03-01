import React from 'react';
import Dish from '../../Assets/Images/Dishes/4.png';

function DiscountDish() {
    return (
        <div className="discount">
            <div className="row">
                <img className="col" src={Dish} alt=""></img>
                <div className="col">
                    <div className="info">
                        <h3>
                            Discount up to 50% All Menu
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <button className="button">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscountDish;
