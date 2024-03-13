import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Contact() {
  return (
    <main id="contact">
      <div className="is-size-1 has-text-centered has-text-danger-dark py-6">
        <b>Contact</b>
      </div>
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification has-background-white-bis">
                    <p className="title">Email</p>
                    <br />
                    <div className="is-size-5">
                      <button className="button is-danger is-outlined px-4 py-5">
                        <a href="mailto:aakasharts06@gmail.com">
                          <i>
                            <strong>aakasharts06@gmail.com</strong>
                          </i>
                        </a>
                      </button>
                      <br />
                      <br />
                      <button className="button is-danger is-outlined px-4 py-5 mg-large">
                        <a href="mailto:sdus1092@gmail.com" class="email-link">
                          <strong>sdus1092@gmail.com</strong>
                        </a>
                      </button>
                    </div>
                  </article>
                  <article className="tile is-child notification has-background-white-bis">
                    <p className="title">Social Media</p>
                    <div className="is-flex-direction-row">
                      <a href="https://www.instagram.com/aakasharts81/" target="_blank"><i style={{color: 'hsl(348, 86%, 43%)	', fontSize: '100px'}} className="fa fa-instagram"></i></a>
                        <br />
                      
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification has-background-white-bis">
                    <p className="title">Phone Number & Location</p>
                    <strong>+1 416-903-5282</strong>
                    <br />
                    <strong>+1 416-904-3465</strong>
                    <br />
                    <figure className="image container is-widescreen">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186586.329796311!2d-79.25284321585985!3d43.05381425706788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56156bda288!2sNiagara%20Falls%2C%20ON!5e0!3m2!1sen!2sca!4v1710319997669!5m2!1sen!2sca"
                        width="500"
                        height="300"
                        style={{
                          border: 0,
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
