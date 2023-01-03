import {React,useEffect,useState} from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import Wrapper from "./writings/wraper";
import Title from "./writings/title";
import Subtitle from "./writings/subtitle";
const slider1 = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp";
const slider2 = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp";
const slider3 = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp";
const slider4 = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp";
const slider1Resp="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734673/ezgif.com-gif-maker-6_lky6io.webp";
const slider2Resp="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734673/ezgif.com-gif-maker-6_lky6io.webp";
const slider3Resp="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734673/ezgif.com-gif-maker-6_lky6io.webp";
const slider4Resp="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734673/ezgif.com-gif-maker-6_lky6io.webp";

function Section() {
  const [state,setState]=useState(false)

  useEffect(()=>{
    if(window.innerWidth<700){
      setState(true)
    }else{
      setState(false)
    }
  },[window.innerWidth])
  
  return (
    <div style={{marginTop:'5rem'}}>
      <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >



<Slide
        shouldRenderMask

        background={{
          backgroundImageSrc: state? slider1:slider1Resp
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: state? slider2:slider2Resp
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc:state? slider3:slider3Resp
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: state?slider4:slider4Resp
        }}
      />

      <MenuNav />
    </HeroSlider>
    </div>
    
  )
}

export default Section