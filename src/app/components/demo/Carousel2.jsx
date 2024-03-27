"use client";
import React, { useState, useEffect } from "react";
import "./carouselstyle2.css";

export default function Carousel2({ images }) {
    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex > images.length) {
                return 1;
            } else if (newIndex < 1) {
                return images.length;
            } else {
                return newIndex;
            }
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = () => {
        let slides = document.getElementsByClassName("mySlides2");
        let dots = document.getElementsByClassName("dot2");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    useEffect(() => {
        showSlides();
    }, [slideIndex]);

    return (
        <div>
            <div className="is-size-1 has-text-centered">
                <b>Custom Apparel Design</b>
            </div>
            <div className="slideshow-container2">
                {images.map((image, index) => (
                    <div className="mySlides2 fade2" key={index}>
                        <div className="numbertext2">
                            {index + 1} / {images.length}
                        </div>
                        <img
                            src={`/images/${image}`}
                            style={{ width: "100%" }}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}

                <a className="prev2" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next2" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: "center" }}>
                {images.map((_, index) => (
                    <span
                        className="dot2"
                        key={index}
                        onClick={() => currentSlide(index + 1)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
