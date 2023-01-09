import { React, useState, useEffect } from "react";

function About() {
  const [happyClients, setHappyClients] = useState(0);
  const [awardWinning, setAwardWinning] = useState(0);
  const [projects, setProjects] = useState(0);
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    const item = document.querySelector(".check");
    const observer = new IntersectionObserver((enteries) => {
      const entry = enteries[0];
      if (entry.isIntersecting) {
        setCheckState(true);
        observer.unobserve(item);
      }
    });
    observer.observe(item);
  }, []);

  useEffect(() => {
    if (happyClients < 300) {
      setTimeout(() => {
        setHappyClients(happyClients + 1);
      }, 10);
    }
    if (awardWinning < 300) {
      setTimeout(() => {
        setAwardWinning(awardWinning + 1);
      }, 10);
    }
    if (projects < 200) {
      setTimeout(() => {
        setProjects(projects + 1);
      }, 10);
    }
  }, [checkState, projects, awardWinning, happyClients]);

  return (
    <div>
      <div
        class="breadcrumb-area bg-image section-ptb"
        style={{
          background: "url(assets/images/about/businessman.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "5rem",
        }}
      >
        <div class="container">
          <div class="row breadcrumb">
            <div class="col mt-5">
              <h2>About Us</h2>

              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main class="page-content">
        <div class="section-agency-benefit section-pt section-pb">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="agency-benefits">
                  <div class="content">
                    <div class="section-title title-2">
                      <h2>
                        We Have 18 Years of <br /> Experience
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      The Greencorps was founded in 2005, at a time when a fast
                      moving economy demanded reliable safety and security
                      services. The vision was to provide world class security,
                      investigation and house keeping services to its clients
                      when industrial strife and scarcity of credible and
                      competent professionals were looming large over the
                      business fraternity. The company has since then grown many
                      folds and today is a one stop shop for security, safety
                      and housekeeping solutions. It has operation centres
                      across south India, including major cities like Bangalore,
                      Mysore, Mangalore, Trivandrum and Kochi.
                    </p>

                    <a
                      href="/contact"
                      class="btn contact-btn mt-30 btn-circle mb-5"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="agency-thumb">
                  <div class="thumb">
                    <img src="assets/images/bg/1I0A4693.JPG" alt="Agency Images" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="section-agency-benefit section-pt section-pb mb-5"
          style={{ backgroundColor: "beige" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-md-12 section-title "
                style={{ textAlign: "center", marginBottom: "0px" }}
              >
                <h2>Mr. Santhosh Kumar N S (Director)</h2>
              </div>
              <div class="col-lg-5">
                <div class="agency-thumb">
                  <div class="thumb">
                    <img
                      src="assets/images/about/director.jpeg"
                      alt="Agency Images"
                    />
                    {/* <div class="play-btn">
                      <a
                        class="video-popup"
                        href="https://www.youtube.com/watch?v=G_G8SdXktHg"
                      >
                        <i class="fa fa-play"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="agency-benefits">
                  <div class="content">
                    <p
                      style={{
                        textAlign: "justify",
                        hyphens: "auto",
                        fontSize: "large",
                        marginTop: "20px",
                      }}
                    >
                      Mr. Santhosh Kumar N S, Director of the Company, is
                      graduated with LLB degree from SDM Law College, Manglore
                      and also holding Diploma in Personnel Management. He has
                      more than 15 years of experience in providing security
                      management services. Mr. Santhosh Kumar N S is the
                      promoter and Director of M/s. Green Corps Facility
                      Management Services (OPC) Private Limited which is one of
                      the leading security service providers in the country,
                      providing professional services to all corporate, public
                      sectors and private institutions and has an excellent
                      track record in its kind. The scope of company activities
                      includes security and facility management services etc. He
                      heads the commercial relationship management of the
                      Company. He is also promoter and Director M/s. Cactus
                      Exploration LLC, Okhlahoma, US.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" project-count-area image-bg section-pt-90 section-pb"
          style={{ background: "url(assets/images/bg/about-bg.jpg)" }}
          data-black-overlay="7"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="project-count-inner domain-inner-bg">
                  <div class="row">
                    <div
                      class="col-lg-4 col-sm-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        class="counter text-center mt-30"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src="assets/images/icon/fun-01.png" alt="" />
                        <h3 class="counter-active">{happyClients}</h3>
                        <p className="check">Happy Clients</p>
                      </div>
                    </div>
                    <div
                      class="col-lg-4 col-sm-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        class="counter text-center mt-30"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src="assets/images/icon/fun-02.png" alt="" />
                        <h3 class="counter-active">{awardWinning}</h3>
                        <p>Award Winning</p>
                      </div>
                    </div>
                    <div
                      class="col-lg-4 col-sm-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        class="counter text-center mt-30"
                        style={{
                          marginLeft: "1.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src="assets/images/icon/fun-03.png" alt="" />
                        <h3 class="counter-active">{projects}</h3>
                        <p>Project Completed</p>
                      </div>
                    </div>
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

export default About;
