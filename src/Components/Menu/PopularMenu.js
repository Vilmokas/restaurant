import React from 'react';
import PopularSmall from './PopularSmall';
import Dish1 from '../../Assets/Images/Dishes/1.png';
import Dish2 from '../../Assets/Images/Dishes/2.png';
import Dish3 from '../../Assets/Images/Dishes/3.png';

function PopularMenu() {
    return (
        <div className="container popular">
            <h2>POPULAR MENU</h2>
            <div className="row">
                <div className="col">
                    <PopularSmall cardImg={Dish1}/>
                </div>
                <div className="col">
                    <PopularSmall cardImg={Dish2}/>
                </div>
                <div className="col">
                    <PopularSmall cardImg={Dish3}/>
                </div>
            </div>
            <button className="button">SHOW MORE</button>
        </div>
    );
}

export default PopularMenu;
