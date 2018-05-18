import React, { Component } from "react";
import Controls from "./Controls";
import PropTypes from "prop-types";

class Slider extends Component {
  state = {
    wrapperWidth: 850,
    currentSlide: 1,
    slidesCount: this.props.children.length
  };

  bubbleSlideTransition = (slideNo) => {
    this.setState((prevState,nextProps)=>{
      return {
        currentSlide: slideNo
      }
    },()=>{
      console.log('slide done');
    })
  }

  handleSlide = mode => {
    const { currentSlide, slidesCount } = this.state;
    if (mode === "next" && currentSlide < slidesCount) {
      this.setState(prev => {
        return {
          currentSlide: prev.currentSlide + 1
        };
      });
    } else if (mode === "prev" && currentSlide > 1) {
      this.setState(prev => {
        return {
          currentSlide: prev.currentSlide - 1
        };
      });
    }
  }; //handleclick

  render() {
    const { wrapperWidth, slidesCount, currentSlide } = this.state;
    const { handleSlide, bubbleSlideTransition } = this;
    const { children } = this.props;
    const wrapperStyles = {
      width: `${wrapperWidth * slidesCount}px`,
      left: `-${wrapperWidth * (currentSlide - 1)}px`
    };

    return (
      <div className="horizontal-slider">
        <div className="slides-container" onClick={this.slideTransition}>
          <div className="slides-container__wrapper" style={wrapperStyles}>
            {children}
          </div>
        </div>
        <Controls
          onSliding={handleSlide}
          slidesCount={slidesCount}
          currentSlide={currentSlide}
          bubbleTransition={bubbleSlideTransition}
        />
      </div>
    );
  }
}

export default Slider;

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
