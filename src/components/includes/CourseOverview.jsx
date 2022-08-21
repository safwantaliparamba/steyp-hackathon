import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/images/course-image.jpeg";
import star from "../../assets/images/star01.jpg";

function CourseOverview({thumb=img}) {
    return (
        <li className="course-overview">
            <Link className='link' to="/course/1">
                <img src={thumb} alt="" />
                <h2>Django beginner to advanced</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore.
                </p>
            </Link>
            <ul className="stars">
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
            <Link to="">19,992 reviews</Link>
            <span>₹ 1699/-</span>
        </li>
    );
}

export default CourseOverview;
