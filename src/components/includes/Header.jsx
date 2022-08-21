import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import logo from "../../assets/images/gainit_logo.png";
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import { authActions } from "../../store/authSlice";
import profile from "../../assets/images/demo-profile.jpg";
import coins from "../../assets/images/coins.png";
import noted from "../../assets/icons/noted.svg";
import bookmark from "../../assets/icons/bookmark.svg";
import Modal from "../UI/Modal";

function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <header>
                <h1>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </h1>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="search here..." />
                        <button type="submit">
                            <img src={search} alt="Search" />
                        </button>
                    </form>
                </div>

                <div className="right">
                    {isAuthenticated && (
                        <ul className="nav">
                            <li>
                                <Link to="/cart">
                                    <img src={cart} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-courses">My Courses</Link>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsProfileOpen(!isProfileOpen);
                                    }}
                                >
                                    Profile
                                </a>
                            </li>
                        </ul>
                    )}
                    {!isAuthenticated && (
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className="logout"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(authActions.login());
                                    }}
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="logout"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(authActions.login());
                                    }}
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </header>
            {isProfileOpen && (
                <Modal
                    className="nav-profile"
                    onClick={(e) => setIsProfileOpen(false)}
                >
                    <div id="nav-profile">
                        <div className="img-wrap">
                            <Link to="/profile">
                                <img src={profile} alt="" />
                            </Link>
                        </div>
                        <Link to="/profile">
                            <h1>username</h1>
                        </Link>
                        <div className="bottom">
                            <div className="nav-wrap">
                                <Link to="/coins">Coins</Link>
                                <img src={coins} alt="" />
                            </div>
                            <div className="nav-wrap">
                                <Link to="/Bookmarks">Bookmarks</Link>
                                <img src={bookmark} alt="" />
                            </div>
                            <div className="nav-wrap">
                                <Link to="/noted-videos">Noted Videos</Link>
                                <img src={noted} alt="" />
                            </div>

                            <a
                                href="/"
                                className="link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(authActions.logout());
                                    setIsProfileOpen(false);
                                }}
                            >
                                Logout{" "}
                            </a>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Header;
