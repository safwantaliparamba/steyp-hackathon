import React from "react";

import coin from "../../assets/images/coin.svg";

function Coins() {
    return (
        <section id="main">
            <section className="wrapper">
                <div className="wrap">
                    <h2> COINS HISTORY </h2>
                    <ul>
                        <li className="g">
                            <h5>+100 coins on 21/8/2022</h5>{" "}
                            <img src={coin} alt="#" />
                        </li>
                        <li className="g">
                            <h5> +50 coins on 22/8/2022</h5>{" "}
                            <img src={coin} alt="#" />
                        </li>
                        <li className="r">
                            <h5> -50 coins on 25/8/2022 </h5>{" "}
                            <img src={coin} alt="#" />
                        </li>
                        <li className="g">
                            <h5> +50 coins on 25/8/2022</h5>{" "}
                            <img src={coin} alt="#" />
                        </li>
                        <li className="r">
                            <h5>
                                {" "}
                                - 50 coins on 27/8/2022 ( Project not completed
                                before deadline)
                            </h5>{" "}
                            <img src={coin} alt="#" />
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Coins;
