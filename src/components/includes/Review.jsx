import React, { useEffect, useState } from "react";
import star_filled from "../../assets/icons/star-fill.svg";
import star from "../../assets/icons/star.svg";

function Review({ rating=2 }) {
    const [starsFilled, setStarsFilled] = useState(0);
    const [stars, setStars] = useState(0);

    useEffect(() => {
        setStarsFilled(+rating / 20);
        setStars(5 - +rating / 20);
    }, []);
    return (
        <div>
            {Array.from(Array(starsFilled), (e, i) => {
                return <img key={e} src={star_filled} alt="" />;
            })}
            {Array.from(Array(stars), (e, i) => {
                return <img key={e} src={star} alt="" />;
            })}
        </div>
    );
}

export default Review;
