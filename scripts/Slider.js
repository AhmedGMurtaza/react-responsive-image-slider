import React, { Component, Fragment } from "react";
import Controls from "./Controls";
import PropTypes from "prop-types";

class Slider extends Component {
  state = {
    wrapperWidth: 850,
    currentSlide: 1,
    slidesCount: this.props.children.length
  };

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
    const { children } = this.props;
    const wrapperStyles = {
      width: `${wrapperWidth * slidesCount}px`,
      left: `-${wrapperWidth * (currentSlide - 1)}px`
    };

    return (
      <div className="horizontal-slider">
        <div className="slides-container">
          <div className="slides-container__wrapper" style={wrapperStyles}>
            {children}
          </div>
        </div>
        <Controls
          onSliding={this.handleSlide}
          slidesCount={slidesCount}
          currentSlide={currentSlide}
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
