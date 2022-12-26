import React from 'react'

function Testimonials() {
    return (
        <div class="section-service bg-gray section-pt section-pb-90">
            <div class="container servicesSlider">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center">
                            <h2>Our Services At Glance</h2>
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
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    )
}

export default Testimonials