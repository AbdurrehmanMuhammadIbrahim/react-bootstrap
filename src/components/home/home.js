import React from "react";
import image from "../images/download1.png"

function Home() {
    return (
      <div>
        <h2>Home</h2>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" className="main">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..." height="500px"/>
    </div>
    
  </div>
</div>
      </div>
    );
  }
  export default Home;