"use client";

import React from "react";
import 'font-awesome/css/font-awesome.min.css';


const Landing = () => {
  return (
    <main>
      <section class="container">
      <div className="py-6 px-6 text-center">
        Aakash Arts is a dynamic creative studio specializing in textile
        printing, custom apparel design, and art commissions. With a passion for
        innovation and craftsmanship, we offer a diverse range of services
        tailored to meet the unique needs of our clients.
      </div>
        <div class="columns features"> 
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-paw"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Textile Printing </h4>
                  <p>
                  At Aakash Arts, we excel in the art of textile printing, utilizing cutting-edge techniques to bring your designs to life on a variety of fabrics. Whether you're looking to add intricate patterns to garments or create eye-catching textiles for home decor, our skilled team ensures high-quality prints that capture the essence of your vision. From digital printing to screen printing and everything in between, we deliver exceptional results that elevate your textiles to new heights.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-empire"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Custom Apparel Design</h4>
                  <p>
                  Elevate your wardrobe with custom apparel designed by Aakash Arts. Our talented designers work closely with clients to create personalized clothing that reflects their individual style and personality. Whether it's for a special event, promotional merchandise, or everyday wear, we offer a wide range of customization options, including embroidery, vinyl printing, and dye-sublimation. With meticulous attention to detail and a commitment to quality, we bring your apparel ideas to life with unparalleled craftsmanship.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="fa fa-apple"></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4> Art Commissions </h4>
                  <p>
                  Unlock the potential of your imagination with art commissions from Aakash Arts. Our team of skilled artists specializes in bringing your visions to life on canvas, paper, or any medium of your choosing. Whether you're seeking a stunning portrait, a captivating mural, or a custom illustration, we work closely with you to understand your concept and bring it to fruition with precision and creativity. With a dedication to excellence and a passion for artistic expression, we transform your ideas into timeless masterpieces that inspire and enchant.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
