"use client"
import React, { useState, useEffect } from "react";
import "./carouselstyle1.css"

export default function Carousel1({ images }) {
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
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

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
                <b>Textile Printing</b>
            </div>
            <div className="slideshow-container">
                {images.map((image, index) => (
                    <div className="mySlides fade" key={index}>
                        <div className="numbertext">{index + 1} / {images.length}</div>
                        <img
                            src={`/images/${image}`}
                            style={{ width: "100%" }}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: "center" }}>
                {images.map((_, index) => (
                    <span className="dot" key={index} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
        </div>
    );
}
