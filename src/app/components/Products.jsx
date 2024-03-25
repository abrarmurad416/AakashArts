"use client"
import React from "react";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2"

export default function Products() {
    const imagesSet1 = [
        "download.jpg",
        "download.jpg",
        "porsche.jpg"
    ];

    const newimage = [
        "download.jpg",
        "ferrari.jpg"
    ];

    const imagesSet3 = [
        "lambo.jpg",
        "lambo.jpg"
    ];

    return (
        <div>
            <div id="products" className="is-size-1 has-text-centered has-text-danger-dark py-6">
                <b>Products</b>
                <p>just testing images for now</p>
            </div>
            <div>
                <Carousel1 images={imagesSet1} />
            </div>
            <div>
                <Carousel2 images={newimage} />
            </div>
        </div>
    );
}
