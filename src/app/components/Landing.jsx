"use client";

import React from "react";
import 'font-awesome/css/font-awesome.min.css';

export default function Landing() {
  return (
    <main id="about">
      <div className="is-size-1 has-text-centered has-text-danger-dark py-6">
        <b>Aakash Arts</b>
      </div>
      <section class="container">
      <div className="mgt-large py-6 px-4 has-text-centered box has-shadow">
      Aakash Arts stands as a premium destination for those seeking unparalleled craftsmanship and artistic ingenuity. Our studio is dedicated to pushing the boundaries in textile printing, custom apparel design, and art commissions. Driven by a profound passion for innovation. With a team of seasoned artisans and designers, each endowed with a unique blend of expertise, we distinguish ourselves on delivering tailored solutions that exceed expectations and leave an indelible mark on the world of art and fashion.
      </div>
        <div class="columns features py-4"> 
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="py-2 px-2 fa fa-print" style={{color: 'hsl(348, 86%, 43%)	', fontSize: '100px'}} ></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Textile Printing</h4>
                  <p>
                  We excel in the art of textile printing. Whether you are looking to add intricate patterns to garments or create vibrant textiles for art, our skilled team ensures high-quality prints. We deliver exceptional results that elevate your textiles to new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="py-2 px-2 fa fa-diamond" style={{color: 'hsl(348, 86%, 43%)	', fontSize: '100px'}} ></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>Custom Design</h4>
                  <p>
                  Our talented designers work closely with clients to create personalized clothing that reflects their style. Whether it is for a special event, promotional merchandise, or everyday wear, we offer a wide range of customization options. We utilize attention to detail and a commitment to quality. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <i class="py-2 px-2 fa fa-paint-brush" style={{color: 'hsl(348, 86%, 43%)	', fontSize: '100px'}} ></i>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4> Art Commissions </h4>
                  <p>
                  Our team of skilled artists specializes in art comissions on canvas, paper, or any medium of your choosing. Whether you are seeking a captivating mural or a custom illustration, we work closely with you to understand your concept and bring it to fruition with precision and creativity. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


