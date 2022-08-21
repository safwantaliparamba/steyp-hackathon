import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import PopularAuthors from "../includes/PopularAuthors";
import CourseOverview from '../includes/CourseOverview'
import arrow from '../../assets/icons/arrow.png';

// images  
import { ai_engineer,ar_engineer,backend_engineer,blockchain,devops,ioT } from '../includes/images'

function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div id="homePage">
                <div className="wrapper">
                    <div className="top-swiper">
                        <h1>Top Instructors</h1>
                        <Slider {...settings}>
                            <PopularAuthors />
                            <PopularAuthors />
                        </Slider>
                    </div>
                    <div className="my-courses">
                        <h1>My Courses</h1>
                        <ul className="list">
                            <CourseOverview thumb={ai_engineer} />
                            <CourseOverview thumb={ar_engineer} />
                            <CourseOverview thumb={backend_engineer} />
                            <Link to='/my-courses'>View All <img src={arrow} alt="" /></Link>
                        </ul>
                    </div>
                    <div className="my-courses">
                        <h1>Popular Courses</h1>
                        <ul className="list">
                            <CourseOverview thumb={blockchain} />
                            <CourseOverview thumb={devops} />
                            <CourseOverview thumb={ioT} />
                            <Link to=''>View All <img src={arrow} alt="" /></Link>
                        </ul>
                    </div>
                    <div className="my-courses">
                        <h1>Recommended for you</h1>
                        <ul className="list">
                            <CourseOverview />
                            <CourseOverview />
                            <CourseOverview />
                            <Link to=''>View All <img src={arrow} alt="" /></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
