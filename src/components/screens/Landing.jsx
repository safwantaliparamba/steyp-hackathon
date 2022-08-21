import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../../assets/images/gainit_logo.png";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import Alumni from "../includes/Alumni";

function Landing() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id="landing">
            <section class="wrapper">
                <div class="img">
                    <img src={logo} alt="img" />
                </div>
                <section class="content">
                    <p class="top">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere quod amet, ipsa atque eius tenetur quidem ducimus
                        ullam vitae molestiae labore quasi voluptatibus saepe
                        repellat, eligendi laudantium voluptatum aut rem.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.Facere
                        quod amet
                    </p>
                    <div class="button">
                        <Link to="/home" class="button">
                            Get started
                        </Link>
                    </div>
                    <div class="about">
                        <h3>Why do you need us</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere quod amet, ipsa atque eius tenetur
                            quidem ducimus ullam vitae molestiae labore quasi
                            voluptatibus saepe repellat, eligendi laudantium
                            voluptatum aut rem.Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.Facere quod amet, ipsa
                            atque eius tenetur quidem ducimus ullam vitae
                            molestiae labore quasi voluptatibus saepe repellat,
                            eligendi laudantium voluptatum aut rem.
                        </p>
                        <h1 className="head">Alumni</h1>
                        <Slider {...settings}>
                            <Alumni />
                            <Alumni />
                            <Alumni />
                            <Alumni />
                        </Slider>

                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere quod amet, ipsa atque eius tenetur
                            quidem ducimus ullam vitae molestiae labore quasi
                            voluptatibus saepe repellat, eligendi laudantium
                            voluptatum aut rem.Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.Facere quod amet, ipsa
                            atque eius tenetur quidem ducimus ullam vitae
                            molestiae labore quasi voluptatibus saepe repellat,
                            eligendi laudantium voluptatum aut rem.
                        </p>
                    </div>
                </section>
            </section>
            <footer>
                <section class="wrapper">
                    <section class="top">
                        <div class="item">
                            <h3>GainIT</h3>
                            <ul>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/">GainIT writing program</Link>
                                </li>
                                <li>
                                    <Link to="/">API</Link>
                                </li>
                                <li>
                                    <Link to="/">Site status</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <h3>Resources</h3>
                            <ul>
                                <li>
                                    <Link to="/">Technical support</Link>
                                </li>
                                <li>
                                    <Link to="/">Documentation</Link>
                                </li>
                                <li>
                                    <Link to="/">Plans & pricing</Link>
                                </li>
                                <li>
                                    <Link to="/">What is Version Control?</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="item large">
                            <h3>Connect with us</h3>
                            <p>Sign up for Git articles and resources:</p>
                            <form action="">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                />
                                <input type="submit" value="Subscribe" />
                            </form>
                            <div class="social">
                                <p>Connect with GainIT</p>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={instagram}
                                                alt="facebook"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img src={twitter} alt="twitter" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="bottom">
                        <div class="left">
                            <div class="top">
                                <ul>
                                    <li>
                                        <Link to="/">Privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Terms of use</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Trust & security</Link>
                                    </li>
                                </ul>
                                <p>Copyright &copy; 2022</p>
                            </div>
                            <div class="bottom">
                                <form action="">
                                    <select
                                        defaultValue="01"
                                        option="language-selector"
                                        name="url"
                                    >
                                        <option disabled="" selected="selected">
                                            Choose your language
                                        </option>
                                        <option
                                            aria-label="Deutsch"
                                            label="Deutsch"
                                            class="notranslate SL_opaque"
                                            data-lang="de"
                                        >
                                            Deutsch
                                        </option>
                                        <option
                                            aria-label="English"
                                            label="English"
                                            class="notranslate SL_opaque"
                                            data-lang="en"
                                        >
                                            English
                                        </option>
                                        <option
                                            aria-label="Español"
                                            label="Español"
                                            class="notranslate SL_opaque"
                                            data-lang="es"
                                        >
                                            Español
                                        </option>

                                        <option
                                            aria-label="Polski"
                                            label="Polski"
                                            class="notranslate SL_opaque"
                                            data-lang="pl"
                                        >
                                            Polski
                                        </option>
                                        <option
                                            aria-label="Português"
                                            label="Português"
                                            class="notranslate SL_opaque"
                                            data-lang="br"
                                        >
                                            Português
                                        </option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="right">
                            <Link to="/" class="btn">
                                View all GainIT products
                            </Link>
                        </div>
                    </section>
                </section>
            </footer>
        </section>
    );
}

export default Landing;
