import React from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import Wrapper from "./writings/wraper";
import Title from "./writings/title";
import Subtitle from "./writings/subtitle";
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672662049/greencopsbannerimage_oedomk.jpg";
const craterRock = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672662049/greencopsbannerimage_oedomk.jpg";
const giauPass = "https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672662049/greencopsbannerimage_oedomk.jpg";
function Section() {
  return (
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

<Overlay>
        <Wrapper>
          <Title>Green Corps</Title>
          <Subtitle>
          WE GUARD WHAT IS PRECIOUS TO YOU. YOUR PEACE OF MIND
          </Subtitle>
        </Wrapper>
      </Overlay>

<Slide
        shouldRenderMask

        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
    
  )
}

export default Section