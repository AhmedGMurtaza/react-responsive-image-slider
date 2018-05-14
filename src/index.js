import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Slide from './Slide';

ReactDOM.render(
    <Slider>
        <Slide cover="../img/1.jpg">
            {/* Add your desired content inside */}
        </Slide>
        <Slide cover="../img/2.jpg">
            <div className="slide-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
        </Slide>
        <Slide cover="../img/3.jpg">
            <div className="slide-text">1</div>
        </Slide>
        <Slide cover="../img/4.jpg">4</Slide>
        <Slide cover="../img/5.jpg">5</Slide>
        <Slide cover="../img/6.jpg">6</Slide>
    </Slider>
    , document.getElementById('root'));
