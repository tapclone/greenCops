import React from 'react'

function BannerSlider() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{marginTop:"5rem"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 bannerImg"   src="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 bannerImg"  src="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 bannerImg"  src="https://res.cloudinary.com/www-menscarts-shop/image/upload/v1672734596/ezgif.com-gif-maker-5_eo57js.webp" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default BannerSlider