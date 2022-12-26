import {React,useState,useEffect} from 'react'

function About() {
    const [happyClients,setHappyClients]=useState(0)
    const [awardWinning,setAwardWinning]=useState(0)
    const [projects,setProjects]=useState(0)
    const [checkState,setCheckState]=useState(false)


    useEffect(()=>{
      

            const item=document.querySelector('.check')
            const observer=new IntersectionObserver((enteries)=>{
                  
                const entry=enteries[0];
                if(entry.isIntersecting){
                    setCheckState(true)
                    observer.unobserve(item)
                
                } 
             })
              observer.observe(item)

            

    },[])

    useEffect(()=>{
        if(happyClients<300){
            setTimeout(()=>{
                setHappyClients(happyClients+1)
            },10)
        }
        if(awardWinning<300){
            setTimeout(()=>{
                setAwardWinning(awardWinning+1)
            },10)
        }
        if(projects<200){
            setTimeout(()=>{
                setProjects(projects+1)
            },10)
        }
    },[checkState,projects,awardWinning,happyClients])
    
   
    

  return (
    <div>
        <div class="breadcrumb-area bg-image section-ptb" style={{background:'url(assets/images/bg/breadcrumb-bg.jpg)'}}>
    <div class="container">
        <div class="row breadcrumb">
            <div class="col">
                <h2>About Us</h2>

                <ul class="breadcrumb-list">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
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
                                <h2>We Have 21 Years of <br/> Experience</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimg veniam, quis nostrud exerci ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor</p>

                            <p> in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidata non proident.</p>
                            <a href="#" class="btn contact-btn mt-30 btn-circle">CONTACT US</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="agency-thumb">
                        <div class="thumb">
                            <img src="assets/images/about/about-01.png" alt="Agency Images"/>
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

    <div className=" project-count-area image-bg section-pt-90 section-pb" style={{background:'url(assets/images/bg/counter-bg.jpg)'}}  data-black-overlay="7">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="project-count-inner domain-inner-bg">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          
                                <div class="counter text-center mt-30" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                                    <img src="assets/images/icon/fun-01.png" alt=""/>
                                    <h3 class="counter-active">{happyClients}</h3>
                                    <p className='check'>Happy Clients</p>
                                </div>
                  
                            </div>
                            <div class="col-lg-4 col-sm-6" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                          
                                <div class="counter text-center mt-30" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                                    <img src="assets/images/icon/fun-02.png" alt=""/>
                                    <h3 class="counter-active">{awardWinning}</h3>
                                    <p>Award Winning</p>
                                </div>
                             
                            </div>
                            <div class="col-lg-4 col-sm-6" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                       
                                <div class="counter text-center mt-30" style={{marginLeft:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                                    <img src="assets/images/icon/fun-03.png" alt=""/>
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
   
    <div class="section-team section-pt section-pb-90 bg-gray">
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
    </div>

    
    
</main>
    </div>
  )
}

export default About