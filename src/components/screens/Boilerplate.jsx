import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../includes/Header";

function Boilerplate({ children }) {
    return (
        <>
            <Header />
            <div id="home-wrap">{children}</div>
        </>
    );
}

export default Boilerplate;
