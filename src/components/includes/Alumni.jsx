import React from "react";

import star from '../../assets/images/star-svgrepo-com.svg';
import user from '../../assets/images/avatar-1577909_1280.webp';

function Alumni() {
    return (
        <>
            <div class="profile">
                <span>
                    <img src={user} alt="" />
                </span>
                <h3>John wick</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere quod amet.
                </p>
                <ul>
                    <li>
                        <img src={star} alt="" />
                    </li>
                    <li>
                        <img src={star} alt="" />
                    </li>
                    <li>
                        <img src={star} alt="" />
                    </li>
                    <li>
                        <img src={star} alt="" />
                    </li>
                    <li>
                        <img src={star} alt="" />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Alumni;
