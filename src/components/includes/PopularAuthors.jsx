import React from "react";

import instructor from "../../assets/images/Dennis Ivy.jpg";

function PopularAuthors() {
    return (
        <div id="popular-instructor">
            <div className="left">
                <img src={instructor} alt="" />
            </div>
            <div className="right">
                <div className="dialog-box">
                    <h1>Learning that gets you</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor repellat blanditiis accusamus nulla, culpa
                        voluptates at. Exercitationem amet officia.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PopularAuthors;
