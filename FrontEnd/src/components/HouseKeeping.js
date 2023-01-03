import {React,useEffect,useState} from "react";

function HouseKeeping() {
  const [state,setState]=useState(false)
  useEffect(()=>{
    document.documentElement.scrollTop=0;
  },[state])

  return (
    <div onLoad={()=>setState(true)
    }>
      <div
        class="breadcrumb-area bg-image section-ptb"
        style={{
          background:
            "url(assets/images/bg/car-mechanic-repair-service-center-cleaning-using-mops-roll-water-from-epoxy-floor-car-repair-service-center.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          backgroundPosition:'center',
          marginTop:'5rem'
        }}
      >
        <div class="container">
          <div class="row breadcrumb">
            <div class="col" style={{ marginTop: "4rem" }}>
              <h2>House Keeping</h2>

              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main class="page-content" data-aos="fade-right">
        <div class="section-service bg-gray section-pt section-pb-90">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title text-center">
                  <h2 style={{ textAlign: "center" }}>
                    Our House Keeping Services
                  </h2>
                </div>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "large",
                    marginBottom: "2rem",
                  }}
                >
                  Green Corps Facility Management Services is a one stop shop
                  providing integrated housekeeping services across commercial
                  and residential segments. We possess a professional,
                  trustworthy and well-experienced team capable of giving you
                  services at par with international standards. Our customers
                  enjoy the minimum response time, thanks to a well-tuned
                  customer service department co-ordinating staff movement. Our
                  selection process makes sure that the cleaning staff are
                  proficient in all aspects of modern cleaning, cleaning devices
                  and chemicals to guarantee fresh, healthy life-spaces and
                  workplaces to our clients.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service mb-30">
                  <div class="thumb">
                    <img
                      src="assets/images/serviece/disinfecting-home.jpg"
                      alt="service img"
                    />
                  </div>
                  <div class="content">
                    <h4>HouseKeeping staff male & female</h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
                    <img
                      src="assets/images/serviece/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg"
                      alt="service img"
                    />
                  </div>
                  <div class="content">
                    <h4>One time cleaning</h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
                    <img
                      src="assets/images/serviece/services-house-4.jpg"
                      alt="service img"
                    />
                  </div>
                  <div class="content">
                    <h4>Regular HouseKeeping</h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
                    <img
                      src="assets/images/serviece/young-man-cleaning.jpg"
                      alt="service img"
                    />
                  </div>
                  <div class="content">
                    <h4>Spring cleaning</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
                    <img
                      src="assets/images/serviece/woman-with-rubber-gloves-cleaning-floors.jpg"
                      alt="service img"
                    />
                  </div>
                  <div class="content">
                    <h4>Carpet Shampooing</h4>
      
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
                
                      <img
                        src="assets/images/serviece/high-rise-window-cleaner-glass-cleaner-working-most-dangerous-jobs-building.jpg"
                        alt="service img"
                      />
                 
                  </div>
                  <div class="content">
                    <h4>
                    Glass cleaning
                    </h4>
      
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12" data-aos="flip-up">
                <div class="service text-center service-2 padding-none cleaning-service  mb-30">
                  <div class="thumb">
               
                      <img
                        src="assets/images/serviece/happy-young-cleaning-man-wearing-casual-clothes.jpg"
                        alt="service img"
                      />
            
                  </div>
                  <div class="content">
                    <h4>
                Acid wash
                    </h4>
          
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

export default HouseKeeping;
