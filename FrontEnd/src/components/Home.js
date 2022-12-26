import React, { useState } from 'react'

import Section from './heroBannerSlider/Section'
// import Carousels from "react-simply-carousel";


function Home() {
    // const [activeSlide, setActiveSlide] = useState(0);
    return (
        <div>
      
            <Section></Section>

            {/* <div class="hero-section section">

    <div class="hero-slider hero-slider-one">
        <div class="hero-slide-item d-flex align-items-center image-bg" style={{background:'url(assets/images/hero/hero-2.jpg)'}} >
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        
                        <div class="hero-content text-start">
                            <h5>We Provide The Best</h5>
                            <h1>Security Service </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="contact-us.html" class="btn">get appointment</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div> */}
            <main class="page-content">

                <div class="section-service" style={{ marginTop: '3rem' }}>
                    <div class="container-fluid plr_-0">
                        <div class="row g-0">


                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="row-service-wrap_white">
                                    <div class="service text-start service-6 medical-service">
                                        <div class="icons">
                                            <img src="assets/images/icon/service-01.png" alt="service icons" />
                                        </div>
                                        <div class="content">
                                            <h4>Residence Security</h4>
                                            <p style={{ textAlign: 'justify', hyphens: 'auto' }}>Access complete visability through your phone or device. We provide a complete range of security solutions, day and night vision to improve security & enhance capabilities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="row-service-wrap">
                                    <div class="service text-start service-6 medical-service service-bg-2">
                                        <div class="icons">
                                            <img src="assets/images/icon/service-02.png" alt="service icons" />
                                        </div>
                                        <div class="content">
                                            <h4>Business Security</h4>
                                            <p style={{ textAlign: 'justify', hyphens: 'auto' }}>Alarm services to suit the right environment. From wired to wireless systems, Remote Monitored and Intergrating systems. We Instal all alarms to suit the need of the location.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="row-service-wrap_white">
                                    <div class="service text-start service-6 medical-service">
                                        <div class="icons">
                                            <img src="assets/images/icon/service-03.png" alt="service icons" />
                                        </div>
                                        <div class="content">
                                            <h4>Surveillance</h4>
                                            <p style={{ textAlign: 'justify', hyphens: 'auto' }}>Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or muliti-site entry points.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="row-service-wrap">
                                    <div class="service text-start service-6 medical-service service-bg-2">
                                        <div class="icons">
                                            <img src="assets/images/icon/service-04.png" alt="service icons" />
                                        </div>
                                        <div class="content">
                                            <h4>House Keeping Services</h4>
                                            <p style={{ textAlign: 'justify', hyphens: 'auto' }}>We offer & manage ongoing maintenance of your security systems. Keeping it working as it should be and keeping up with improvements that can be made.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="section-agency-benefit section-pt section-pb">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="agency-benefits">
                                    <div class="content">
                                        <div class="section-title title-2">
                                            <h2>We Have 18 Years of <br /> Experience</h2>
                                        </div>
                                        <p style={{ textAlign: 'justify', hyphens: 'auto' }}>Green corps Security and Facility Management Services Pvt Ltd have won the trust and confidence of wide range of clients who demand professionalism and up to date functioning. We offer services of highly qualified, experienced and capable Ex-Servicemen for Supervisor cadre.</p>

                                        <p style={{ textAlign: 'justify', hyphens: 'auto' }}> The selection, recruitment, training and quality control in respect of manpower operation is executed on the basis of detailed procedures backed up by quality staff.</p>
                                        <a href="#" class="btn contact-btn mt-30 btn-circle">CONTACT US</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="agency-thumb">
                                    <div class="thumb">
                                        <img src="assets/images/about/about-01.png" alt="Agency Images" />
                                        <div class="play-btn">
                                            <a class="video-popup" href="https://www.youtube.com/watch?v=G_G8SdXktHg"><i
                                                class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                

                <div class="section-service bg-gray section-pt section-pb-90">
                    <div class="container servicesSlider">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title text-center">
                                    <h2 style={{textAlign:'center'}}>Our Services At Glance</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>
                                </div>
                            </div>
                        </div>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="col-lg-12">

                                        <div class="service text-center service-2 padding-none cleaning-service mb-30">
                                            <div class="thumb">
                                                <a href="service-details.html">
                                                    <img src="assets/images/serviece/service-01.jpg" alt="service img" />
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="service-details.html">Private Security</a></h4>
                                                <p>Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid</p>
                                                <a class="readmore_btn btn-transparent" href="service-details.html">READ MORE</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-lg-12">

                                        <div class="service text-center service-2 padding-none cleaning-service mb-30">
                                            <div class="thumb">
                                                <a href="service-details.html">
                                                    <img src="assets/images/serviece/service-01.jpg" alt="service img" />
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="service-details.html">Private Security</a></h4>
                                                <p>Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid</p>
                                                <a class="readmore_btn btn-transparent" href="service-details.html">READ MORE</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-lg-12">

                                        <div class="service text-center service-2 padding-none cleaning-service mb-30">
                                            <div class="thumb">
                                                <a href="service-details.html">
                                                    <img src="assets/images/serviece/service-01.jpg" alt="service img" />
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h4><a href="service-details.html">Private Security</a></h4>
                                                <p>Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid</p>
                                                <a class="readmore_btn btn-transparent" href="service-details.html">READ MORE</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                                <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
                                <span class="sr-only" >Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
                                <span class="sr-only">Next</span>
                            </a>

                            {/* <ol class="carousel-indicators" >
                                <li  data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{backgroundColor:'black',marginTop:'2rem'}}></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{backgroundColor:'black',marginTop:'2rem'}}></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{backgroundColor:'black',marginTop:'2rem'}}></li>
                            </ol> */}
                        </div>




                    </div>
                </div>


            
                

                <div class="reapir-choose-us section-ptb">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="reapir-choose-inner">
                                    <div class="section-title title-2">
                                        <h2>Why Choose Us</h2>
                                    </div>
                                    <div class="choose-resone-inner mt-20">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>

                                        <div class="service text-start service-6 reapir-service mt-30">
                                            <div class="icons">
                                                <img src="assets/images/icon/c-01.png" alt="service icons" />
                                            </div>
                                            <div class="content">
                                                <h4>Free Estimate</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. </p>
                                            </div>
                                        </div>

                                        <div class="service text-start service-6 reapir-service">
                                            <div class="icons">
                                                <img src="assets/images/icon/c-02.png" alt="service icons" />
                                            </div>
                                            <div class="content">
                                                <h4>24/7 Services</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. </p>
                                            </div>
                                        </div>



                                        <div class="service text-start service-6 reapir-service">
                                            <div class="icons">
                                                <img src="assets/images/icon/c-03.png" alt="service icons" />
                                            </div>
                                            <div class="content">
                                                <h4>Flat Rate Fees</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div class="section-newsletter section-ptb bg_image bg-overlay">
                    <div class="container">
                        <div class="row newsletter-style-2 political-newsletter align-items-center">
                            <div class="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                                <div class="title">
                                    <h4>Join Our volunteer </h4>
                                    <h2>Subscribe Our Newsletter.</h2>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                                <form action="#">
                                    <div class="input-box">
                                        <input type="email" placeholder="Enter Your Email* " />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}

{/* <Carousels
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text",
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            visibility:'hidden'
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            visibility:'hidden'
            
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              marginRight:'10px',
              marginLeft:'10px',
              marginBottom:'20px'
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={2}
        speed={400}
      >
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            style={{
              background: "yellow",
              width: 400,
              height: 300,
              border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box",
              display:'flex',

            }}
            key={index}
          >
            <div style={{borderRadius:'50%',width:'30%',background:'blue'}}>
                <img style={{width:'50%'}} src="" alt="" />
            </div>
            <div style={{width:''}}>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <span>___ peter</span>
            </div>
          </div>
        ))}
      </Carousels> */}


<div class="section-testimonial-carousel section-pt section-pb">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center">
                        <h2>Our Clients Say</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>



                


                {/* <div class="section-team section-pt section-pb-90 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center">
                        <h2>Our Guards</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>
            </div>
    
            <div class="row">

                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="team team-8 mb-30">
                        <div class="thumb">
                            <a href="#">
                                <img src="assets/images/team/team-01.jpg" alt="team img"/>
                            </a>
                        </div>
                        <div class="team-info">
                            <div class="content">
                                <h4><a href="#">Cheryl Murray</a></h4>
                                <span>Director</span>
                            </div>
                            <ul class="social-network social-net-2">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="vimeo" href="#"><i class="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="team team-8 mb-30">
                        <div class="thumb">
                            <a href="#">
                                <img src="assets/images/team/team-02.jpg" alt="team img"/>
                            </a>
                        </div>
                        <div class="team-info">
                            <div class="content">
                                <h4><a href="#">Doris Welch</a></h4>
                                <span>Director</span>
                            </div>
                            <ul class="social-network social-net-2">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="vimeo" href="#"><i class="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
           
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="team team-8 mb-30">
                        <div class="thumb">
                            <a href="#">
                                <img src="assets/images/team/team-03.jpg" alt="team img"/>
                            </a>
                        </div>
                        <div class="team-info">
                            <div class="content">
                                <h4><a href="#">Virginia Moore</a></h4>
                                <span>Director</span>
                            </div>
                            <ul class="social-network social-net-2">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="vimeo" href="#"><i class="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
      
            </div>
   
        </div>
    </div> */}
                <div className="container" style={{ backgroundColor: 'rgba(249,184,9,0.8)',marginBottom:'1rem',marginTop:'1.5rem' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '1rem' }}>Salient features of our organization</h2>
                            <ul className='salientUl' style={{ listStyle: 'revert-layer', marginLeft: '1rem' }}>
                                <li >Our company is registered under Private Security Agency Regulation Act (PSARA).</li>
                                <li >Our organization is registered as per the rules and regulation of the Government of India.</li>
                                <li >We do have the facilities of E.S.I & EPF. • We supply our own uniforms, badges, raincoat, Crant coat and other accessories to our staff.</li>
                                <li>We supply our own uniforms, badges, raincoat, Crant coat and other accessories to our staff</li>
                                <li >We give a team of ex-service staff who are well conversant with the Security Management and fire fighting etc.</li>
                                <li >The Security officers and guards have undergone police verification in case of civilian and JillaSainik Board in case of ex-service man to vouch their past record.</li>
                            </ul>
                        </div>
                    </div>
                </div>




            </main>





        </div>
    )
}

export default Home