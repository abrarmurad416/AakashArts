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
                          <strong>aakasharts06@gmail.com</strong>
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
                    <div className="is-flex-direction-row columns">
                      <a href="https://www.instagram.com/aakasharts81/" target="_blank"><i style={{ color: 'hsl(348, 86%, 43%)	', fontSize: '60px' }} className="fa fa-instagram"></i></a>
                      <br />
                      <svg width="60px" height="60px" viewBox="0 0 48 48" style={{color: 'hsl(348, 86%, 43%'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Tiktok</title>
                        <a href="https://www.tiktok.com/@_niagarafalls2020_" target="_blank">                        
                        <g id="Icon/Social/tiktok-black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#000000"></path>
                        </g></a>
                      </svg>
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
