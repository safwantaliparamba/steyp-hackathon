import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import thumbnail from "../../assets/images/course-image.jpeg";
import user from "../../assets/images/demo-profile.jpg";
import sections from "./sections.json";
import Review from "../includes/Review";
import reviewsJSON from "./reviews.json";

function CourseDetail() {
    const inputRef = useRef();
    const chatRef = useRef();

    const [isDiscussionsActive, setIsDiscussionsActive] = useState(false);
    const [isReviewsActive, setIsReviewsActive] = useState(true);
    const [isPostReview, setIsPostReview] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [chat, setChat] = useState([
        {
            message: "what about react ??",
            isUser: false,
        },
        {
            message: "React is a fine library",
            isUser: false,
        },
        {
            message: "Woow!! i wanna learn react ::))",
            isUser: true,
        },
    ]);
    const [ratingValue, setRatingValue] = useState(0);
    const [isBought, setIsBought] = useState(false);

    useEffect(() => {
        setReviews(reviewsJSON);
    }, []);

    const handleRating = (number) => {
        setRatingValue(number);
        setIsPostReview(true);
    };

    return (
        <>
            <div id="courseDetails">
                <div className="wrapper">
                    <div className="left">
                        <div className="img-wrapper">
                            <img src={thumbnail} alt="" />
                        </div>
                        <h1>Django Beginner To Advanced</h1>
                        <Link to="/">Dennis ivy</Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatem quaerat magni distinctio
                            voluptates, dignissimos quae?
                        </p>
                        <div className="actions">
                            <h2>₹ 1999/-</h2>
                            {!isBought && (
                                <span
                                    className="add-to-cart"
                                    onClick={(e) => {
                                        setIsBought(true);
                                    }}
                                >
                                    Buy Now
                                </span>
                            )}
                        </div>
                        <div className="tabs">
                            <h2
                                onClick={(e) => {
                                    setIsDiscussionsActive(true);
                                    setIsReviewsActive(false);
                                }}
                            >
                                Discussions
                            </h2>
                            <h2
                                onClick={(e) => {
                                    setIsReviewsActive(true);
                                    setIsDiscussionsActive(false);
                                }}
                            >
                                Reviews
                            </h2>
                        </div>
                        <div className="Tab">
                            {isDiscussionsActive && (
                                <div className="discussions">
                                    <h1>Discussions</h1>
                                    <div className="chat">
                                        {chat?.map((message) => (
                                            <span
                                                className={
                                                    message.isuser ? "you" : ""
                                                }
                                            >
                                                {message.message}
                                            </span>
                                        ))}
                                    </div>
                                    {isBought && (
                                        <div className="input">
                                            <input
                                                placeholder="Enter your message"
                                                ref={chatRef}
                                                type="text"
                                            />
                                            <button
                                                onClick={(e) => {
                                                    if (
                                                        chatRef.current
                                                            .value !== ""
                                                    ) {
                                                        setChat([
                                                            ...chat,
                                                            {
                                                                message:
                                                                    chatRef
                                                                        .current
                                                                        .value,
                                                                isuser: true,
                                                            },
                                                        ]);
                                                        chatRef.current.value =
                                                            "";
                                                    }
                                                }}
                                            >
                                                submit
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {isReviewsActive && (
                                <div className="reviews-section">
                                    <h1>Reviews</h1>
                                    <div className="post-review">
                                        {isBought && (
                                            <Rating onClick={handleRating} />
                                        )}
                                        {isPostReview && (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Review"
                                                    ref={inputRef}
                                                />
                                                <button
                                                    onClick={(e) => {
                                                        setIsPostReview(false);
                                                        setReviews([
                                                            ...reviews,
                                                            {
                                                                username:
                                                                    "user06",
                                                                id: 6,
                                                                rating: +ratingValue,
                                                                review: inputRef
                                                                    .current
                                                                    .value,
                                                            },
                                                        ]);
                                                    }}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <ul className="reviews">
                                        {reviews.map((review) => (
                                            <li key={review.id}>
                                                <div className="top">
                                                    <img src={user} alt="" />
                                                    <span>
                                                        {review.username}
                                                    </span>
                                                </div>
                                                <Review rating={80} />
                                                <p>{review.review}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        {isBought && (
                            <>
                                <h1>Sections</h1>
                                <ul className="topics">
                                    {sections.map((section) => (
                                        <li key={section.id}>
                                            <Link
                                                className={
                                                    section.isProject
                                                        ? "project"
                                                        : ""
                                                }
                                                to="/course/1/section/1"
                                            >
                                                {section.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDetail;
