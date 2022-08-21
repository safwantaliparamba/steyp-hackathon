import React from "react";

import CourseOverview from "../includes/CourseOverview";

function MyCourse() {
    return (
        <>
            <div id="my-posts">
                <div className="wrapper">
                    <h1>My Courses</h1>
                    <ul>
                        <CourseOverview />
                        <CourseOverview />
                        <CourseOverview />
                        <CourseOverview />
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MyCourse;
