import React from "react";
import ReactDOM from "react-dom";

/* Mandatory Imports */
import Slider from "./scripts/Slider";
import Slide from "./scripts/Slide";

const wrapper = (
  /* Slider Begins */
  <Slider>
    <Slide cover="../img/1.jpg">{/* Add your desired content inside */}</Slide>
    <Slide cover="../img/2.jpg">
      <div className="slide-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
      </div>
    </Slide>
    <Slide cover="../img/3.jpg">
      <div className="slide-text">3</div>
    </Slide>
    <Slide cover="../img/4.jpg">4</Slide> 
    <Slide cover="../img/5.jpg">5</Slide>
    <Slide cover="../img/6.jpg">6</Slide>
  </Slider>
  /* Slider Ends */
);

ReactDOM.render(
  wrapper,  
  document.getElementById("root")
);

