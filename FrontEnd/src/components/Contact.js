import React, { useState } from "react";

function Contact() {
  const [subject,setSubject]=useState()
  const [email,setEmail]=useState()
  const [message,setMessage]=useState()
  return (
    <div>
      <div
        class="breadcrumb-area bg-image section-ptb"
        style={{
          background: "url(assets/images/about/cocontact-us.jpg)",
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          marginTop:'5rem'
        }}
      >
        <div class="container">
          <div class="row breadcrumb">
            <div class="col">
              <h2>Contact Us</h2>

              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main class="page-content">
        <div class="google-map">
          <div
            id="googleMap-2"
            class="embed-responsive-item contact-map"
            data-lat="40.712776"
            data-Long="-74.005974"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6299326806256!2d76.29192551409473!3d9.964715492875353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0872b7dfa1fdc3%3A0xfdc9735f650ed567!2sGreencorps%20Facility%20Management%20Services%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1671183106989!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="contact-form-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form_wrapper form-style-1">
                  <div class="contact-title">
                    <div class="title-3">
                      <h3>Get In Touch</h3>
                    </div>
                  </div>
                  <div class="form-inner-box-warp">
                    <form id="contact-form" action="assets/php/mail.php" />
                    <form
                      id="contact-form"
                      action="http://hasthemes.com/file/mail.php"
                    >
                      <div class="row">
              
                        <div class="col-lg-12  mb-30">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Email*"
                            onChange={(e)=>{setEmail(e.target.value)}}
                          />
                        </div>
                        <div class="col-lg-12  mb-30">
                          <input
                            name="con_subject"
                            type="text"
                            placeholder="Subject*"
                            onChange={(e)=>{setSubject(e.target.value)}}
                          />
                        </div>
                        <div class="col-lg-12  mb-30">
                          <textarea
                            name="con_message"
                            placeholder="Your Message*"
                              onChange={(e)=>{setSubject(e.target.value)}}
                          ></textarea>
                        </div>
                        <div class="col-lg-12">   
                          <a href={`mailto:asifsaheer7034@gmail.com?subject=${subject}&body=${message}`} type="submit" class="submit-btn default-btn">
                            Send
                          </a>
                          <p class="form-messege"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 offset-lg-1 col-md-6">
                <div class="contact-info-wrapper">
                  <div class="contact-title">
                    <div class="title-3">
                      <h3>Contact Us</h3>
                    </div>
                  </div>

                  <div class="contact-info">
                    <ul>
                      <li>
                        <div class="contact-text d-flex align-items-center">
                          <i class="fa fa-phone"></i>
                          <p>
                            <a href="#">0484-2323230</a>
                            <a href="#">8589055501</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="contact-text d-flex align-items-center">
                          <i class="fa fa-globe"></i>
                          <p>
                            <a href="#">accounsgreencorps@gmail.com</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="contact-text d-flex align-items-center">
                          <i class="fa fa-map-marker"></i>
                          <p>
                            H B No. 44, South Bridge Avenu Road Panampilly
                            Nagar, Cochin -682 036, Kerala, India
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
