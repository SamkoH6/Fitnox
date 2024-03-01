import React from "react";
import sectionVideo from "../images/video2.mp4";

const Section2 = () => {
  return (
    <div>
      <section>
        <video
          className="bg-video"
          src={sectionVideo}
          muted
          loop
          autoPlay
        ></video>
        <div className="card bg_white big flex">
          <h1>Kde Sa Luxus a Fitness Stretávajú</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus atque numquam autem consectetur vel tenetur laudantium
            porro ad cum accusamus?
          </p>
          <div>
            <a href="" className="underline">
              Nájsť Fitko
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
