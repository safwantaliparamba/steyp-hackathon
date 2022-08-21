import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'

import video from "../../assets/images/Laptop - 1625.mp4";
import ar_Engineer from "../../assets/images/AR_Engineer.jpg";
import backend from "../../assets/images/Backend_Developer_ACsVD3G.jpg";
import blockchain from "../../assets/images/Blockchain_Developer.jpg";
import ui from "../../assets/images/UI_Engineer.jpg";
import fav from "../../assets/icons/fav.svg";
import faved from "../../assets/icons/faved.svg";
import arrow from "../../assets/icons/arrow.png";

function SectionDetailed() {
    const [notes, setNotes] = useState([{ note: "first note", id: 1 }]);
    const [isFav, setIsFav] = useState(false);
    const inputRef = useRef();
    return (
        <section id="mainvideo">
            <section className="wrapper">
                <section className="main">
                    <h3><Link to='/course/1'><img src={arrow} alt="" /></Link> UI Engineering</h3>
                    <video poster={ar_Engineer} src={video} controls></video>
                    <div className="fav">
                        <h3>UI engineer</h3>
                        {!isFav && (
                            <img
                            title="add to favourite"
                                onClick={(e) => {
                                    setIsFav(true);
                                }}
                                src={fav}
                                alt=""
                            />
                        )}
                        {isFav && (
                            <img
                            title="remove from favourite"
                                onClick={(e) => {
                                    setIsFav(false);
                                }}
                                src={faved}
                                alt=""
                            />
                        )}
                    </div>
                    <span>Abraham</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur delectus tenetur, vel dignissimos eum
                        doloremque pariatur sunt quia, ipsam temporibus numquam
                        qui sit placeat laudantium! Eos voluptas facere facilis
                        quasi.
                    </p>
                    <div className="notes-section">
                        <div className="input">
                            <input
                                placeholder="enter note here"
                                ref={inputRef}
                                type="text"
                            />
                            <button
                                onClick={(e) => {
                                    setNotes([
                                        ...notes,
                                        {
                                            note: inputRef.current.value,
                                            id: notes.length + 1,
                                        },
                                    ]);
                                    inputRef.current.value = "";
                                }}
                            >
                                add
                            </button>
                        </div>
                        <div className="bottom">
                            <h1>Notes</h1>
                            <ul>
                                {notes.map((note) => (
                                    <li>{note.note}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="que">
                    <ul>
                        <li>
                            <img src={ar_Engineer} alt="img" />
                        </li>
                        <li>
                            <img src={backend} alt="img" />
                        </li>
                        <li>
                            <img src={blockchain} alt="img" />
                        </li>
                        <li>
                            <img src={ui} alt="img" />
                        </li>
                        <li>
                            <img src={ar_Engineer} alt="img" />
                        </li>
                        <li>
                            <img src={ar_Engineer} alt="img" />
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default SectionDetailed;
