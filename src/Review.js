import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, text, image } = people[index];

    const previousPerson = () => {
        if (index === 0) {
            return setIndex(people.length - 1);
        }
        setIndex((prevIndex) => prevIndex - 1);
    };

    const nextPerson = () => {
        if (index === people.length - 1) {
            return setIndex(0);
        }
        setIndex((prevIndex) => prevIndex + 1);
    };

    const randomPerson = () => {
        setIndex(Math.floor(Math.random() * people.length));
    };

    return (
        <article key={id} className="review">
            <div className="img-container">
                <img className="person-img" src={image} alt={`${name}`} />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn">
                    <FaChevronLeft onClick={previousPerson} />
                </button>
                <button className="next-btn">
                    <FaChevronRight onClick={nextPerson} />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                Surprise Me
            </button>
        </article>
    );
};

export default Review;
