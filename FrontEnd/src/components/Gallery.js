import { React, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import GalleryCard from "./GalleryCard";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    axios.get("/api/admin/viewAllGallery").then((res) => {
      setGallery(res.data);
    });
  }, []);

  return (
    <div>
      <Header></Header>
      <div
        class="breadcrumb-area bg-image section-ptb"
        style={{
          background: "url(assets/images/bg/gallery-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: 'center',
          marginTop: '5rem'

        }}
      >
        <div class="container">
          <div class="row breadcrumb">
            <div class="col" style={{ marginTop: "4rem" }}>
              <h2 style={{ color: "black" }}>Gallery</h2>

              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="/" style={{ color: "black" }}>
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" style={{ color: "black" }}>
                  Gallery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {gallery.map((item) => {
            console.log(item);
            return <GalleryCard item={item}></GalleryCard>;
          })}

        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Gallery;
