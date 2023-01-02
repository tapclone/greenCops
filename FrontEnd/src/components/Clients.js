import { React, useState, useEffect } from "react";
import ClientCard from "./ClientCard";
import axios from "axios";

function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios.get("/api/admin/viewAllClients").then((res) => {
      setClients(res.data);
    });
  }, []);
  return (
    <div>
      <div
        class="breadcrumb-area bg-image section-ptb"
        style={{ background: "url(assets/images/bg/our-clients.jpg)" }}
      >
        <div class="container">
          <div class="row breadcrumb">
            <div class="col mt-5">
              <h2>Clients</h2>

              <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active">Clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ padding: "2rem 0" }}>
          {/* {clients.map((item) => {
            return (
              <ClientCard image={item.image} name={item.Name}></ClientCard>
            );
          })} */}
          <div className="col-md-4 clientCard" style={{ padding: "1px" }}>
            <img
              src="https://res.cloudinary.com/dbpxhm5vt/image/upload/v1671711805/Nediyath%20Product%20image/rzoh0qmzpjvet59bcdfq.webp"
              alt=""
            />
            <div className="cardLayer"></div>
            <p className="cardContent">LULU Y MALL</p>
          </div>
          <div className="col-md-4 clientCard" style={{ padding: "1px" }}>
            <img
              src="https://res.cloudinary.com/dbpxhm5vt/image/upload/v1671710390/Nediyath%20Product%20image/qyfrmqxifezvyui81ndo.webp"
              alt=""
            />
            <div className="cardLayer"></div>
            <p className="cardContent">LULU HYPERMARKET</p>
          </div>
        </div>   
      </div> 
    </div>
  );
}

export default Clients;
